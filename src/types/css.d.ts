import "react";

// Lets inline styles pass CSS custom properties (style={{ "--name": value }}) without casts.
declare module "react" {
  interface CSSProperties {
    [customProperty: `--${string}`]: string | number | undefined;
  }
}
