const funds = [
  {
    id: 1,
    fund_name: "eMAXIS Slim 全世界株式",
    current_value: 125000,
    acquisition_amount: 100000,
  },
  {
    id: 2,
    fund_name: "S&P500 Index",
    current_value: 95000,
    acquisition_amount: 100000,
  },
];

export default function FundsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">保有銘柄一覧</h1>

      <div className="max-w-3xl grid gap-4">
        {funds.map((fund) => {
          const profit =
            fund.current_value - fund.acquisition_amount;

          const profitRate =
            (profit / fund.acquisition_amount) * 100;

          return (
            <div
              key={fund.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
            >
              <h2 className="text-xl font-semibold mb-3">
                {fund.fund_name}
              </h2>

              <div className="space-y-1 text-sm text-zinc-300">
                <p className="text-lg font-semibold">
                  評価額：
                  ¥{fund.current_value.toLocaleString()}
                </p>

                <p>
                  取得額：
                  ¥{fund.acquisition_amount.toLocaleString()}
                </p>

                <p
                  className={
                    profit >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  損益：
                  ¥{profit.toLocaleString()}
                  （{profitRate.toFixed(2)}%）
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}