"use client";

import RepoCard from "./repo-card";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const RepoList = () => {
  const params = useSearchParams();

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`/api/repos?${params.toString()}`);
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchRepos();
  }, [params]);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <RepoCard loading={loading} repos={repos} />
    </div>
  );
};

export default RepoList;
