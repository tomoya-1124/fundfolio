async function getFunds() {
  const res = await fetch("http://process.env.NEXT_PUBLIC_API_URL/api/funds", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("データ取得失敗");
  }

  return res.json();
}

export default async function DashboardPage() {
  const funds = await getFunds();

  const totalCurrentValue = funds.reduce(
    (sum: number, fund: any) => sum + fund.currentValue,
    0
  );

  const totalAcquisitionAmount = funds.reduce(
    (sum: number, fund: any) => sum + fund.acquisitionAmount,
    0
  );

  const totalProfit = totalCurrentValue - totalAcquisitionAmount;

  const totalProfitRate =
    totalAcquisitionAmount === 0
      ? 0
      : (totalProfit / totalAcquisitionAmount) * 100;

  const isProfit = totalProfit >= 0;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold mb-10">ダッシュボード</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-400 mb-2">総評価額</p>
            <p className="text-4xl font-bold">
              ¥{totalCurrentValue.toLocaleString()}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-400 mb-2">総取得額</p>
            <p className="text-4xl font-bold">
              ¥{totalAcquisitionAmount.toLocaleString()}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-400 mb-2">総損益</p>
            <p
              className={
                isProfit
                  ? "text-4xl font-bold text-green-400"
                  : "text-4xl font-bold text-red-400"
              }
            >
              ¥{totalProfit.toLocaleString()}
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-400 mb-2">総損益率</p>
            <p
              className={
                isProfit
                  ? "text-4xl font-bold text-green-400"
                  : "text-4xl font-bold text-red-400"
              }
            >
              {totalProfitRate.toFixed(2)}%
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-400 mb-2">保有銘柄数</p>
            <p className="text-4xl font-bold">{funds.length}件</p>
          </div>
        </div>
      </div>
    </main>
  );
}