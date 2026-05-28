import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-8">
      <div className="max-w-5xl">
        <p className="text-sm text-zinc-400 mb-4">
          Investment Portfolio Management
        </p>

        <h1 className="text-6xl font-bold mb-6">
          Fundfolio
        </h1>

        <p className="text-xl text-zinc-300 max-w-2xl mb-10">
          投資信託・株式の保有状況を登録し、評価額・損益・資産状況を可視化するポートフォリオ管理アプリです。
        </p>

        <div className="flex gap-4">
          <Link
            href="/funds"
            className="rounded-lg bg-white text-black font-bold px-6 py-3 hover:bg-zinc-200 transition"
          >
            保有銘柄を見る
          </Link>

          <Link
            href="/funds/new"
            className="rounded-lg border border-zinc-700 text-white px-6 py-3 hover:border-zinc-500 transition"
          >
            銘柄を登録する
          </Link>
        </div>
      </div>
    </main>
  );
}