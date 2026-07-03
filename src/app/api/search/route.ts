import { NextResponse } from "next/server";
import { searchComponents } from "@/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ?? "";

  if (!query.trim()) {
    return NextResponse.json({ data: [], total: 0 });
  }

  const results = searchComponents(query);

  return NextResponse.json({
    data: results.slice(0, 10).map((c) => ({
      id: c.metadata.id,
      name: c.metadata.name,
      category: c.metadata.category,
      description: c.metadata.description,
    })),
    total: results.length,
  });
}
