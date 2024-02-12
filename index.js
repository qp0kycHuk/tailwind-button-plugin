const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

const defaultOptions = {
  className: 'btn',
  disabledOpacity: 0.4,
  colorHoverOffset: 15,
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
      '--tw-btn-size': theme('btnSize.base'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      height: 'var(--tw-btn-size)',
      padding: '0 calc(var(--tw-btn-size) / 2)',
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
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: '#fff'
        },
      },
      ...optional({
        [getStateSelector('focus:not(:active)', options)]: {
          background: '#fff',
          boxShadow: '0 0 0 2px var(--tw-btn-color)',

        }
      }, options.withFocusStyles),
    },

    [`.${options.className}-text`]: {
      width: 'auto',
      height: 'auto',
      padding: 0,
      background: 'none',
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
      minWidth: 'var(--tw-btn-size)',
      width: 'var(--tw-btn-size)',
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
        let string = size.DEFAULT || size[500] || size

        if (typeof size == 'function') {
          string = size({});
        }

        const parsed = parseColor(string)
        if (!!parsed?.color) return null

        return ({ '--tw-btn-size': size })
      },
    },
    { values: theme('btnSize') }
  )

  // colors
  matchUtilities(
    {
      [options.className]: (color) => {
        let string = color.DEFAULT || color[500] || color

        if (typeof color == 'function') {
          string = color({});
        }

        const parsed = parseColor(string)

        if (!parsed?.color) return null

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


function optional(object, flag) {
  return flag ? object : {}
}

function getStateSelector(state, options) {
  return (
    `&:${state}, ` +
    `&:is(${options.targetGroupSelector}:${state} .${options.className}), ` +
    `&:is(${options.targetPeerSelector}:${state}~.${options.className})`
  )

}