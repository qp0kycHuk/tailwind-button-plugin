import plugin from 'tailwindcss/plugin'
import { ButtonOptions } from './types';
import { sizeUtilities } from './size';
import { getStateSelector } from './utils';
import { contur, fill, icon, light, text, whitebg } from './variants';
import { colorUtilities } from './color';

const defaultOptions: ButtonOptions = {
  className: 'btn',
  baseStyles: {},
  colorHoverOffset: 15,
  lightColorOpacity: 0.1,
  lightColorOpacityHover: 0.2,
  withFocusStyles: false,
  targetGroupSelector: '.btn-group',
  targetPeerSelector: '.btn-peer',
  hoverStyles: {
    background: 'var(--tw-btn-color-light)',
  },
  focusStyles: {
    zIndex: '2',
  },
  activeStyles: {
    transform: 'translateY(2px)',
  },
  disabledStyles: {
    opacity: '0.4',
    pointerEvents: 'none',
  },
}

module.exports = plugin.withOptions<ButtonOptions>((opts) => function (api) {
  const { addComponents, theme } = api
  const options: ButtonOptions = {
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
      transition: '.2s ease',
      color: 'var(--tw-btn-color)',
      userSelect: 'none',
      ...options.baseStyles,
      '@media (hover)': {
        [getStateSelector('hover', options)]: options.hoverStyles,
      },
      '&:focus': options.focusStyles,
      [getStateSelector('active', options)]: options.activeStyles,
      ['&:disabled']: options.disabledStyles
    },
    ...fill(options),
    ...contur(options),
    ...light(options),
    ...text(options),
    ...icon(options),
    ...whitebg(options),

  })

  // size
  sizeUtilities(api, options)

  // colors
  colorUtilities(api, options)


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


