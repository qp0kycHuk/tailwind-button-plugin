const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

const defaultOptions = {
  className: 'btn',
  disabledOpacity: 0.4,
  colorHoverOffset: 25,
  lightColorOpacity: 0.1,
  lightColorOpacityHover: 0.2,
  transition: '.2s ease',
  withFocusStyles: false,
  targetGroupSelector: '.btn-group',
  targetPeerSelector: '.btn-peer',
  activeStiles: {
    transform: 'translateY(2px)',
  }
}

module.exports = plugin.withOptions((opts) => function ({ addComponents, matchUtilities, theme }) {
  const options = {
    ...defaultOptions,
    ...opts
  }
  options.className = options.className.trim()

  addComponents({
    [`.${options.className}`]: {
      '--size': theme('btnSize.base'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      height: 'var(--size)',
      padding: '0 calc(var(--size) / 2)',
      transition: options.transition,
      color: 'var(--tw-btn-color)',
      userSelect: 'none',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color-light)',
        },
      },
      '&:focus': {
        zIndex: 2,
      },
      [getStateSelector('active', options)]: options.activeStiles
    },
    [`.${options.className}-fill`]: {
      background: 'var(--tw-btn-color)',
      border: 'transparent',
      color: '#fff',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color)',
        },
      },
      ...optional({
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color)',
          boxShadow: '0 0 0 5px var(--tw-btn-color-light)'

        }
      }, options.withFocusStyles),
    },
    [`.${options.className}-contur`]: {
      background: 'transparent',
      border: '1px solid var(--tw-btn-color)',
      color: 'var(--tw-btn-color)',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color-light)'
        },
      },
      ...optional({
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color-light)',
          boxShadow: '0 0 0 2px var(--tw-btn-color)'
        }
      }, options.withFocusStyles),
    },
    [`.${options.className}-light`]: {
      background: 'var(--tw-btn-color-light)',
      color: 'var(--tw-btn-color)',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color-light)',
        },
      },
      ...optional({
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color-light)',
          boxShadow: '0 0 0 2px var(--tw-btn-color)'
        }
      }, options.withFocusStyles),
    },
    [`.${options.className}-whitebg`]: {
      background: '#fff',
      boxShadow: theme('boxShadow.md'),
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: '#fff',
          boxShadow: theme('boxShadow.lg'),
        },
      },
      ...optional({
        [getStateSelector('focus:not(:active)', options)]: {
          background: '#fff',
          boxShadow: theme('boxShadow.md') + ', 0 0 0 2px var(--tw-btn-color)',

        }
      }, options.withFocusStyles),
    },

    [`.${options.className}-text`]: {
      width: 'auto',
      height: 'auto',
      padding: 0,
      background: 'transparent',
      borderRadius: 0,
      color: 'var(--tw-btn-color)',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'none',
        },
      },

      ...optional({
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color-light)',
          boxShadow: '0 0 0 5px var(--tw-btn-color-light)',
        }
      }, options.withFocusStyles),
    },
    [`.${options.className}-icon`]: {
      minWidth: 'var(--size)',
      width: 'var(--size)',
      padding: 0,
    },
    [`.${options.className}:disabled`]: {
      opacity: options.disabledOpacity,
      pointerEvents: 'none',
    }
  })

  // size
  matchUtilities(
    {
      [options.className]: (size) => {
        // check is not color
        const string = size.DEFAULT || size[500] || size
        const parsed = parseColor(string)
        if (!!parsed?.color) return null

        return ({ '--size': size })
      },
    },
    { values: theme('btnSize') }
  )

  // colors
  matchUtilities(
    {
      [options.className]: (color) => {
        // check is color
        const string = color.DEFAULT || color[500] || color
        const parsed = parseColor(string)
        if (!parsed?.color) return null

        const [r, g, b] = parsed.color
        const hex = '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
        const hovered = checkColorShade(hex, -options.colorHoverOffset) != 0 ?
          colorShade(hex, -options.colorHoverOffset) :
          colorShade(hex, options.colorHoverOffset)

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


}, (options = defaultOptions) => ({
  theme: {
    extend: {
      btnSize: {
        xs: '28px',
        sm: '32px',
        base: '42px',
        lg: '48px',
        xl: '56px',
        ['2xl']: '64px',
      }
    }
  }
}))

function colorShade(color, amount) {

  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R + amount);
  G = parseInt(G + amount);
  B = parseInt(B + amount);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  R = (R > 0) ? R : 0;
  G = (G > 0) ? G : 0;
  B = (B > 0) ? B : 0;

  R = Math.round(R)
  G = Math.round(G)
  B = Math.round(B)

  var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

  return "#" + RR + GG + BB;
}

function checkColorShade(col, amt) {
  var usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (g | (b << 8) | (r << 16)).toString(16);
}

function optional(object, flag) {
  return flag ? object : {}
}

function getStateSelector(state, options) {
  return (
    ` &:${state}, 
      &:is(${options.targetGroupSelector}:${state} .${options.className}), 
      &:is(${options.targetPeerSelector}:${state}~.${options.className})`
  )

}