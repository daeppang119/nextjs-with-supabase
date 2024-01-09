function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow w-full mx-auto max-w-2xl border-l border-r px-5 py-8 bg-white">
      {children}
    </main>
  );
}

export default Page;
