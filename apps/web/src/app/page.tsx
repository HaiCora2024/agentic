import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">video-meetings</h1>
      <Button variant="primary">HeroUI работает</Button>
    </main>
  );
}
