export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-2xl px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-gengar-bright sm:text-5xl">
          Hello, World.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gengar-lavender">
          This is the personal site of Cam Thompson. More to come.
        </p>
        <div className="mt-8 flex gap-6 text-sm">
          <a
            href="https://github.com/camthompson"
            className="text-gengar-red transition-colors hover:text-gengar-red-hover"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
