import type { Metadata } from "next";
import { ContributePageClient } from "./ContributePageClient";

export const metadata: Metadata = {
  title: "Contribute",
  description: "Learn how to contribute UI components to OpenUI Hub. Fork, build, document, and open a Pull Request.",
};

export default function ContributePage() {
  return <ContributePageClient />;
}
