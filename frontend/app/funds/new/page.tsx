export default function NewFundPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">銘柄登録</h1>

        <form className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              銘柄名
            </label>
            <input
              type="text"
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white"
              placeholder="例：eMAXIS Slim 全世界株式"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              商品種別
            </label>
            <select className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white">
              <option>投資信託</option>
              <option>株式</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              資産分類
            </label>
            <select className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white">
              <option>国内株式</option>
              <option>外国株式</option>
              <option>債券</option>
              <option>REIT</option>
              <option>バランス</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              口座区分
            </label>
            <select className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white">
              <option>NISA</option>
              <option>特定口座</option>
              <option>一般口座</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-2">
                取得額
              </label>
              <input
                type="number"
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white"
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-2">
                評価額
              </label>
              <input
                type="number"
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white"
                placeholder="125000"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white text-black font-bold py-3 hover:bg-zinc-200 transition"
          >
            登録する
          </button>
        </form>
      </div>
    </main>
  );
}