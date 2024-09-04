import { Metadata } from "next";

import { ColorPage } from "../../../_internal/pages/ColorPage";

interface Params {
  params: Record<"code", string>;
}

export default async function Page({ params }: Params) {
  const code = params.code;

  return <ColorPage code={code} />;
}

export function generateMetadata({ params }: Params): Metadata {
  const code = params.code;
  const title = `Color #${code}`;

  return {
    title,
    openGraph: {
      title,
      images: `data:image/svg+xml,%3Csvg width='1200' height='630' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1200' height='630' fill='%23$${code}'/%3E%3C/svg%3E%0A`,
    },
  };
}

export async function generateStaticParams(): Promise<Params["params"][]> {
  return [..."0123456789ABCDEF"].flatMap((r) =>
    [..."0123456789ABCDEF"].flatMap((g) =>
      [..."0123456789ABCDEF"].map((b) => ({ code: `${r}${r}${g}${g}${b}${b}` }))
    )
  );
}

export const dynamicParams = false;
export const dynamic = "force-static";
