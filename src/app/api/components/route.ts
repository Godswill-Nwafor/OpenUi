import { NextResponse } from "next/server";
import { allComponents, searchComponents } from "@/data";
import type { Category } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") as Category | null;
  const sort = searchParams.get("sort") ?? "popular";
  const limit = parseInt(searchParams.get("limit") ?? "50");
  const offset = parseInt(searchParams.get("offset") ?? "0");

  let results = query ? searchComponents(query) : allComponents;

  if (category) {
    results = results.filter((c) => c.metadata.category === category);
  }

  results = [...results].sort((a, b) => {
    if (sort === "popular") return b.metadata.likes - a.metadata.likes;
    if (sort === "newest") return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime();
    return new Date(b.metadata.updatedAt).getTime() - new Date(a.metadata.updatedAt).getTime();
  });

  const total = results.length;
  const paginated = results.slice(offset, offset + limit);

  return NextResponse.json({
    data: paginated.map((c) => c.metadata),
    total,
    limit,
    offset,
    hasMore: offset + limit < total,
  });
}
