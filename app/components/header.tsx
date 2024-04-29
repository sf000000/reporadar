"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "react-feather";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";

const Header = () => {
  const { theme } = useTheme();

  const [stargazers, setStargazers] = useState<number | null>(null);

  useEffect(() => {
    const fetchStargazers = async () => {
      const response = await fetch("/api/stargazers");
      const data = await response.json();

      setStargazers(data);
    };

    fetchStargazers();
  }, []);

  return (
    <div className="fixed top-0 z-30 flex w-full justify-center border border-b bg-white/50 backdrop-blur-xl transition-all dark:bg-neutral-950/50">
      <div className="mx-5 flex h-16 w-full max-w-screen-md items-center justify-between">
        <Link href="/">
          <Image
            src={`/logo-${theme === "dark" ? "light" : "dark"}.png`}
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            href={process.env.NEXT_PUBLIC_REPO_URL!}
            target="_blank"
            passHref
          >
            <Button
              className="flex items-center space-x-1 text-muted-foreground ring-secondary/30 hover:ring-4"
              variant="outline"
            >
              <Star size={16} />
              <span>{stargazers}</span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
