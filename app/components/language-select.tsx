"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const LANGUAGES = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "PHP",
  "Ruby",
  "Go",
  "Swift",
  "Kotlin",
  "Rust",
  "Scala",
  "Perl",
  "Haskell",
  "Lua",
  "Clojure",
  "Elixir",
  "Erlang",
  "Dart",
  "F#",
  "R",
  "Groovy",
  "Julia",
  "Crystal",
  "Nim",
  "Zig",
  "Nix",
  "Shell",
  "PowerShell",
];

export function LanguageSelect() {
  const router = useRouter();

  const onValueChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("language", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {LANGUAGES.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
