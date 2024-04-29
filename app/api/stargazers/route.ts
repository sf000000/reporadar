import { NextResponse } from "next/server";

import axios from "axios";

export const revalidate = 60 * 60; // 1 hour

export async function GET() {
  const repoUrl = process.env.NEXT_PUBLIC_REPO_URL!;
  const apiUrl = `https://api.github.com/repos/${repoUrl.split("github.com/")[1]}`;
  console.log(apiUrl);

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    return NextResponse.json(response.data.stargazers_count);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
