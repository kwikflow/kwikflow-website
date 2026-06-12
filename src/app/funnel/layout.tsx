import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kwikflow — Geen klus meer mislopen",
  description:
    "AI die de telefoon opneemt terwijl u aan het werk bent. Plus alles wat u verder nodig heeft om in Google bovenaan te staan. Vanaf €149 per maand.",
};

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}