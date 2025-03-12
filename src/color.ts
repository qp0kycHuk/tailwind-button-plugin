
import { PluginAPI } from "tailwindcss/plugin";
import { ButtonOptions } from "./types";
import { getStateSelector } from "./utils";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
// const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

type Color = Record<string, string> | ((args: any) => string) | string

export function colorUtilities({ matchUtilities, theme }: PluginAPI, options: ButtonOptions) {
  matchUtilities(
    {
      [options.className]: (color: Color)  => {
        let string

        if (typeof color === 'string') {
          string = color
        } else if (typeof color == 'function') {
          string = color({});
        } else {
          string = color.DEFAULT || color[500]
        }

        const parsed = parseColor(string)

        if (!parsed?.color) return {}

        const hovered = 'color-mix(in srgb, ' + string + ' ' + (100 - options.colorHoverOffset) + '%, black)'

        return ({
          '--tw-btn-color': string,
          '--tw-btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: options.lightColorOpacity }),
          '@media (hover)': {
            [getStateSelector('hover', options)]: {
              '--tw-btn-color': hovered,
              '--tw-btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: options.lightColorOpacityHover }),
            }
          },
        })
      },
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: "color"
    }
  )
}