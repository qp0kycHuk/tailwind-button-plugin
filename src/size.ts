import { PluginAPI } from "tailwindcss/plugin";
import { ButtonOptions } from "./types";

export function sizeUtilities({ matchUtilities, theme }: PluginAPI, options: ButtonOptions) {
  matchUtilities(
    {
      [options.className]: (size) => {
        // check is not color
        // @ts-ignore
        let string = size.DEFAULT || size[500] || size

        if (typeof size == 'function') {
          // @ts-ignore
          string = size({});
        }

        return ({ '--tw-btn-size': size })
      },
    },
    { values: theme('btnSize') }
  )
}