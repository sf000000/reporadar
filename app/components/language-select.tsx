"use client";

import * as React from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Languages } from "@/types";

export function LanguageSelect() {
  const router = useRouter();

  const [languages, setLanguages] = useState<Languages>({});

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("/api/languages");
        setLanguages(response.data);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchLanguages();
  }, []);

  const languageItems = Object.keys(languages).map((lang) => (
    <SelectItem key={languages[lang].language_id} value={lang}>
      {lang}
    </SelectItem>
  ));

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
          {languageItems}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
