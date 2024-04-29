import { NextResponse } from "next/server";
import fs from "fs";

export const revalidate = 60 * 60 * 24; // 24 hours

export async function GET() {
  try {
    const items = JSON.parse(fs.readFileSync("languages.json", "utf8"));
    return NextResponse.json(items);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
