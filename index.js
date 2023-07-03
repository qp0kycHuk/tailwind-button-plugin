const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(function ({ addComponents, matchUtilities, theme }) {
  addComponents({
    '.btn': {
      '--size': theme('btnSize.base'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      height: 'var(--size)',
      padding: '0 calc(var(--size) / 2)',
      transition: '.2s ease',
      fontWeight: 'bold',
      color: 'var(--tw-btn-color)',
      userSelect: 'none',
      '@media(hover)': {
        '&:hover': {
          background: 'var(--tw-btn-color-light)',
        },
      },
      '&:focus': {
        zIndex: 2,
      },
      '&:active': {
        transform: 'translateY(2px)',
      }
    },
    '.btn-fill': {
      background: 'var(--tw-btn-color)',
      border: 'transparent',
      color: '#fff',
      '@media(hover)': {
        '&:hover': {
          background: 'var(--tw-btn-color)',
        },
      },
      '&:focus:not(:active)': {
        background: 'var(--tw-btn-color)',
        boxShadow: '0 0 0 5px var(--tw-btn-color-light)'

      }
    },
    '.btn-contur': {
      background: 'transparent',
      border: '1px solid var(--tw-btn-color)',
      color: 'var(--tw-btn-color)',
      '@media(hover)': {
        '&:hover': {
          background: 'var(--tw-btn-color-light)'
        },
      },
      '&:focus:not(:active)': {
        background: 'var(--tw-btn-color-light)',
        boxShadow: '0 0 0 2px var(--tw-btn-color)'
      }
    },
    '.btn-light': {
      background: 'var(--tw-btn-color-light)',
      color: 'var(--tw-btn-color)',
      '@media(hover)': {
        '&:hover': {
          background: 'var(--tw-btn-color-light)',
        },
      },
      '&:focus:not(:active)': {
        background: 'var(--tw-btn-color-light)',
        boxShadow: '0 0 0 2px var(--tw-btn-color)'
      }
    },
    '.btn-whitebg': {
      background: '#fff',
      boxShadow: theme('boxShadow.md'),
      '@media(hover)': {
        '&:hover': {
          background: '#fff',
          boxShadow: theme('boxShadow.lg'),
        },
      },
      '&:focus:not(:active)': {
        background: '#fff',
        boxShadow: theme('boxShadow.md') + ', 0 0 0 2px var(--tw-btn-color)',

      }
    },
    '.btn-shadow': {
      boxShadow: theme('boxShadow.md'),
      '@media(hover)': {
        '&:hover': {
          boxShadow: theme('boxShadow.lg'),
        },
      },
      '&:active': {
        boxShadow: theme('boxShadow.md'),
      },

    },
    '.btn-text': {
      width: 'auto',
      height: 'auto',
      padding: 0,
      background: 'transparent',

      borderRadius: 0,
      color: 'var(--tw-btn-color)',
      '@media(hover)': {
        '&:hover': {
          background: 'none',
        },
      },

      '&:focus:not(:active)': {
        background: 'var(--tw-btn-color-light)',
        boxShadow: '0 0 0 5px var(--tw-btn-color-light)',
      }
    },
    '.btn-icon': {
      minWidth: 'var(--size)',
      width: 'var(--size)',
      padding: 0,
    },
    '.btn:disabled': {
      opacity: '0.4',
      pointerEvents: 'none',
    }
  })

  // size
  matchUtilities(
    {
      btn: (size) => {
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
      btn: (color) => {
        const string = color.DEFAULT || color[500] || color
        const parsed = parseColor(string)
        if (!parsed?.color) return null

        const [r, g, b] = parsed.color
        const hex = '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
        const hovered = checkColorShade(hex, -25) != 0 ? colorShade(hex, -25) : colorShade(hex, 25)

        return ({
          '--tw-btn-color': string,
          '--tw-btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.10 }),
          '@media(hover)': {
            '&:hover': {
              '--tw-btn-color': hovered,
              '--tw-btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.20 }),
            }
          },
        })
      },
    },
    { values: theme('colors') }
  )


}, {
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
})

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