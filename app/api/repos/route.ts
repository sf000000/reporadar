import { NextResponse, NextRequest } from "next/server";

import axios from "axios";

export const revalidate = 60 * 60; // 1 hour

export async function GET(req: NextRequest) {
  const from = req.nextUrl.searchParams.get("from");
  const to = req.nextUrl.searchParams.get("to");
  const language = req.nextUrl.searchParams.get("language");

  if (!from || !to || !language) {
    return NextResponse.json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=language:${language}+created:${from}..${to}&sort=stars&order=desc`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    const data = response.data.items.map((repo: any) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks,
        language: repo.language,
        url: repo.html_url,
        owner: {
          login: repo.owner.login,
          avatar: repo.owner.avatar_url,
          url: repo.owner.html_url,
        },
      };
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
