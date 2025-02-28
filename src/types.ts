import { CSSRuleObject } from "tailwindcss/types/config"

export type ButtonOptions = {
  className: string,
  baseStyles: CSSRuleObject,
  colorHoverOffset: number,
  lightColorOpacity: number,
  lightColorOpacityHover: number,
  withFocusStyles: boolean,
  targetGroupSelector: string,
  targetPeerSelector: string,
  activeStyles: CSSRuleObject,
  disabledStyles: CSSRuleObject,
  hoverStyles: CSSRuleObject,
  focusStyles: CSSRuleObject,
}

export type ButtonVariant = (options: ButtonOptions) => Record<string, CSSRuleObject>