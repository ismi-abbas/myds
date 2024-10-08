import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/home-layout";
import { getMYDSConfig } from "@/app/[lang]/layout.config";

export default function Layout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: "en" | "ms" };
}): React.ReactElement {
  const baseOptions = getMYDSConfig(lang);

  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
