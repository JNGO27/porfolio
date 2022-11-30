import { CSSProperties } from "react";

export interface ImageStyles extends CSSProperties {
  [cssProp: string]: string | number | undefined;
}