import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto min-h-screen w-full max-w-screen-md">
        <div className="mx-auto w-full max-w-xl px-5 py-10 xl:px-0">
          <Link
            href={process.env.NEXT_PUBLIC_REPO_URL!}
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border px-7 py-2 transition-colors bg-neutral-50 dark:bg-neutral-900"
          >
            <Sparkles size={20} />
            <p className="text-neutral-800 dark:text-neutral-50 font-semibold text-sm">
              Introducing RepoRadar
            </p>
          </Link>
          <h1 className="bg-gradient-to-br from-neutral-900 to-neutral-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[1.1]">
            Discover trending repositories on GitHub
          </h1>
          <p className="mt-6 text-center text-muted-foreground md:text-xl">
            Find the most popular repositories on GitHub by language, date, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
}
