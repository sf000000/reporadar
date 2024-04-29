import Hero from "./components/hero";
import Repos from "./components/repo/repos";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto min-h-screen w-full max-w-screen-md">
        <Hero />
        <Suspense>
          <Repos />
        </Suspense>
      </div>
    </div>
  );
}
