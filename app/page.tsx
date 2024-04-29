import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto min-h-screen w-full max-w-screen-md">
        <Hero />
      </div>
    </div>
  );
}
