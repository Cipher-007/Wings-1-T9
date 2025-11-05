import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const safeName = path.basename(decodeURIComponent(file));
  const basePaths = [
    path.join(process.cwd(), "public", "pdfs"),
    path.join(process.cwd(), "wings-t9-app", "public", "pdfs"),
  ];

  for (const base of basePaths) {
    const filePath = path.join(base, safeName);
    try {
      const fileBuffer = await fs.readFile(filePath);
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      // Try next base path
    }
  }

  console.error(
    `PDF not found: ${safeName} (searched bases: ${basePaths.join(", ")})`
  );
  return NextResponse.json({ error: "PDF not found" }, { status: 404 });
}
