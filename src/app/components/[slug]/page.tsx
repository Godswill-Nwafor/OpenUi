import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getComponentById, getRelatedComponents, allComponents } from "@/data";
import { ComponentDetailClient } from "./ComponentDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allComponents.map((c) => ({ slug: c.metadata.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = getComponentById(slug);
  if (!comp) return { title: "Component Not Found" };
  return {
    title: `${comp.metadata.name} — React Component`,
    description: comp.metadata.description,
  };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const comp = getComponentById(slug);
  if (!comp) notFound();

  const related = getRelatedComponents(slug, 4);

  return <ComponentDetailClient comp={comp} related={related.map((r) => r.metadata)} />;
}
