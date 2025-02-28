import { ButtonVariant } from "./types"
import { getStateSelector, optional } from "./utils"

export const fill: ButtonVariant = (options) => {
  return {
    [`.${options.className}-fill`]: {
      background: 'var(--tw-btn-color)',
      border: 'transparent',
      color: '#fff',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color)',
        },
      },
      ...optional(options.withFocusStyles, {
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color)',
          boxShadow: '0 0 0 5px var(--tw-btn-color-light)'

        }
      }),
    },
  }
}

export const contur: ButtonVariant = (options) => {
  return {
    [`.${options.className}-contur`]: {
      background: 'transparent',
      border: '1px solid var(--tw-btn-color)',
      color: 'var(--tw-btn-color)',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color-light)'
        },
      },
      ...optional(options.withFocusStyles, {
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color-light)',
          boxShadow: '0 0 0 2px var(--tw-btn-color)'
        }
      }),
    },
  }
}

export const light: ButtonVariant = (options) => {
  return {
    [`.${options.className}-light`]: {
      background: 'var(--tw-btn-color-light)',
      color: 'var(--tw-btn-color)',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'var(--tw-btn-color-light)',
        },
      },
      ...optional(options.withFocusStyles, {
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color-light)',
          boxShadow: '0 0 0 2px var(--tw-btn-color)'
        }
      }),
    },
  }
}

export const text: ButtonVariant = (options) => {
  return {
    [`.${options.className}-text`]: {
      width: 'auto',
      height: 'auto',
      padding: '0',
      background: 'none',
      color: 'var(--tw-btn-color)',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: 'none',
        },
      },
      ...optional(options.withFocusStyles, {
        [getStateSelector('focus:not(:active)', options)]: {
          background: 'var(--tw-btn-color-light)',
          boxShadow: '0 0 0 5px var(--tw-btn-color-light)',
        }
      }),
    },
  }
}

export const whitebg: ButtonVariant = (options) => {
  return {
    [`.${options.className}-whitebg`]: {
      background: '#fff',
      '@media (hover)': {
        [getStateSelector('hover', options)]: {
          background: '#fff'
        },
      },
      ...optional(options.withFocusStyles, {
        [getStateSelector('focus:not(:active)', options)]: {
          background: '#fff',
          boxShadow: '0 0 0 2px var(--tw-btn-color)',

        }
      }),
    },
  }
}

export const icon: ButtonVariant = (options) => {
  return {
    [`.${options.className}-icon`]: {
      minWidth: 'var(--tw-btn-size)',
      width: 'var(--tw-btn-size)',
      padding: '0',
    },
  }
}