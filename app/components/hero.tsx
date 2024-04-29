import { Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-auto w-full max-w-xl px-5 py-10 xl:px-0">
      <Link
        href={process.env.NEXT_PUBLIC_REPO_URL!}
        className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-neutral-50 px-7 py-2 transition-colors dark:bg-neutral-900"
      >
        <Sparkles size={20} />
        <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-50">
          Introducing RepoRadar
        </p>
      </Link>
      <h1
        className="font-display bg-gradient-to-br from-neutral-900 
      to-neutral-500 bg-clip-text
      text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] dark:from-neutral-500 dark:to-neutral-800 md:text-6xl md:leading-[1.1]"
      >
        Discover trending repositories on GitHub
      </h1>
      <p className="mt-6 text-center text-muted-foreground md:text-xl">
        Find the most popular repositories on GitHub by language, date, and
        more.
      </p>
    </div>
  );
};

export default Hero;
