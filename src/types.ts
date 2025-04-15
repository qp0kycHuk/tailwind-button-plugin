
export type CssInJs = {
  [key: string]: string | string[] | CssInJs | CssInJs[];
};

export type ButtonOptions = {
  className: string,
  baseStyles: CssInJs,
  colorHoverOffset: number,
  lightColorOpacity: number,
  lightColorOpacityHover: number,
  withFocusStyles: boolean,
  targetGroupSelector: string,
  targetPeerSelector: string,
  activeStyles: CssInJs,
  disabledStyles: CssInJs,
  hoverStyles: CssInJs,
  focusStyles: CssInJs,
}

export type ButtonVariant = (options: ButtonOptions) => Record<string, CssInJs>
