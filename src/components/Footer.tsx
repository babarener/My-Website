export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 py-6 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="mx-auto max-w-5xl px-4 flex items-center justify-center">
        <p>© {new Date().getFullYear()} Frank Bo — Designed & coded with care.</p>
      </div>
    </footer>
  );
}
