import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyScaleContainerStyle(scale: number): SerializedStyles {
  return css`
    transform: scale(${scale / 100});
    transform-origin: 50% 0;
    overflow: auto;
    background: ${globalColor(`--${illaPrefix}-white-01`)};
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  `
}