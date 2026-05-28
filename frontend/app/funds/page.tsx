async function getFunds() {
  const res = await fetch("http://localhost:8080/api/funds", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("データ取得失敗");
  }

  return res.json();
}

export default async function FundsPage() {
  const funds = await getFunds();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold mb-10">保有銘柄一覧</h1>

        <div className="space-y-6">
          {funds.map((fund: any) => {
            const profit = fund.currentValue - fund.acquisitionAmount;
            const profitRate = (profit / fund.acquisitionAmount) * 100;
            const isProfit = profit >= 0;

            return (
              <div
                key={fund.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition"
              >
                <h2 className="text-3xl font-bold mb-6">{fund.fundName}</h2>

                <div className="space-y-2 text-xl">
                  <p className="text-2xl font-bold">
                    評価額：¥{fund.currentValue.toLocaleString()}
                  </p>

                  <p className="text-zinc-300 text-lg">
                    取得額：¥{fund.acquisitionAmount.toLocaleString()}
                  </p>

                  <p
                    className={
                      isProfit
                        ? "text-green-400 font-bold"
                        : "text-red-400 font-bold"
                    }
                  >
                    損益：¥{profit.toLocaleString()}（{profitRate.toFixed(2)}%）
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}