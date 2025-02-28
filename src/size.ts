import { PluginAPI } from "tailwindcss/types/config";
import { ButtonOptions } from "./types";

export function sizeUtilities({ matchUtilities, theme }: PluginAPI, options: ButtonOptions) {
  matchUtilities(
    {
      [options.className]: (size) => {
        // check is not color
        let string = size.DEFAULT || size[500] || size

        if (typeof size == 'function') {
          string = size({});
        }

        return ({ '--tw-btn-size': size })
      },
    },
    { values: theme('btnSize') }
  )
}