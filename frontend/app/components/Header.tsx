import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-black text-white">
    <div className="px-10 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
        Fundfolio
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-300">
        <Link href="/funds" className="hover:text-white transition">
            保有銘柄
        </Link>
        <Link href="/funds/new" className="hover:text-white transition">
            登録
        </Link>
        <Link href="/dashboard" className="hover:text-white transition">
            ダッシュボード
        </Link>
        </nav>
    </div>
    </header>
    );
}