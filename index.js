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
            '&:hover': {
                background: 'var(--tw-btn-color-light)',
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
            '&:hover': {
                background: 'var(--tw-btn-color)',
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
            '&:hover': {
                background: 'var(--tw-btn-color-light)'
            },
            '&:focus:not(:active)': {
                background: 'var(--tw-btn-color-light)',
                boxShadow: '0 0 0 2px var(--tw-btn-color)'
            }
        },
        '.btn-light': {
            background: 'var(--tw-btn-color-light)',
            color: 'var(--tw-btn-color)',
            '&:hover': {
                background: 'var(--tw-btn-color-light)',
            },
            '&:focus:not(:active)': {
                background: 'var(--tw-btn-color-light)',
                boxShadow: '0 0 0 2px var(--tw-btn-color)'
            }
        },
        '.btn-whitebg': {
            background: '#fff',
            boxShadow: theme('boxShadow.md'),
            '&:hover': {
                background: '#fff',
                boxShadow: theme('boxShadow.lg'),
            },
            '&:focus:not(:active)': {
                background: '#fff',
                boxShadow: theme('boxShadow.md') + ', 0 0 0 2px var(--tw-btn-color)',

            }
        },
        '.btn-shadow': {
            boxShadow: theme('boxShadow.md'),
            '&:hover': {
                boxShadow: theme('boxShadow.lg'),
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
            '&:hover': {
                background: 'none',
            },

            '&:focus:not(:active)': {
                background: 'var(--tw-btn-color-light)',
                boxShadow: '0 0 0 5px var(--tw-btn-color-light)',
            }
        },
        '.btn-icon': {
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
                return ({
                    '--tw-btn-color': string,
                    '--tw-btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.10 }),
                    '&:hover': {
                        '--tw-btn-color': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.90 }),
                        '--tw-btn-color-light': formatColor({ mode: 'rgba', color: parsed.color, alpha: 0.20 }),
                    }
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