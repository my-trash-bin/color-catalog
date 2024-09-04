import { ReactNode } from "react";
import { complementaryColor } from "../lib/complementaryColor";

export interface ColorPageProps {
  code: string;
}

export function ColorPage({ code }: ColorPageProps): ReactNode {
  return (
    <div
      style={{ background: `#${code}`, color: `#${complementaryColor(code)}` }}
    >
      This color is #{code}!
    </div>
  );
}
