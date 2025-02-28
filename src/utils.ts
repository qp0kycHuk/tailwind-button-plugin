import { CSSRuleObject } from "tailwindcss/types/config"
import { ButtonOptions } from "./types"

export function optional(flag: boolean, object: CSSRuleObject) {
  return flag ? object : {}
}

export function getStateSelector(state: string, options: ButtonOptions) {
  return (
    `&:${state}, ` +
    `&:is(${options.targetGroupSelector}:${state} .${options.className}), ` +
    `&:is(${options.targetPeerSelector}:${state}~.${options.className})`
  )

}