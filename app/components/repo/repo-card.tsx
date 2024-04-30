import { Repo } from "@/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Star } from "react-feather";

interface RepoCardProps {
  repos: Repo[];
  loading: boolean;
}

const gradients = [
  "from-amber-100 via-amber-50 to-amber-200",
  "from-rose-100 via-rose-50 to-rose-200",
  "from-emerald-100 via-emerald-50 to-emerald-200",
  "from-indigo-100 via-indigo-50 to-indigo-200",
  "from-sky-100 via-sky-50 to-sky-200",
];

const randomGradient = () => {
  const gradient = gradients[Math.floor(Math.random() * gradients.length)];
  return `bg-gradient-to-tr ${gradient}`;
};

const RepoCard = ({ repos, loading }: RepoCardProps) => {
  const _repos = Array.isArray(repos) ? repos : [];
  return (
    <>
      {loading ? (
        <>
          <RepoCardSkeleton />
        </>
      ) : (
        _repos.map((repo) => (
          <Link
            href={repo.url}
            key={repo.id}
            className="overflow-hidden rounded-xl border bg-secondary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            target="_blank"
          >
            <div
              className={cn(
                "aspect-[5/2] w-full rounded-t-xl bg-gradient-to-tr",
                randomGradient(),
              )}
            />
            <div className="-mt-8 flex items-center justify-between px-2">
              <Image
                src={repo.owner.avatar}
                alt={repo.owner.login}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex items-center space-x-1 rounded-lg border bg-secondary px-2 py-1 text-sm text-muted-foreground transition-all hover:ring-2 hover:ring-neutral-200 dark:ring-0">
                <Star size={16} />
                <span>{repo.stars.toLocaleString()}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-1">
                <h2 className="font-display w-60 truncate text-xl font-semibold">
                  {repo.name}
                </h2>
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {repo.description}
              </p>
            </div>
          </Link>
        ))
      )}
    </>
  );
};

const RepoCardSkeleton = () => {
  return Array.from({ length: 9 }).map((_, i) => (
    <div
      key={i}
      className="h-[223px] w-[245px] animate-pulse rounded-xl bg-secondary"
    />
  ));
};

export default RepoCard;
