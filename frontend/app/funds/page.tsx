"use client";

import { useEffect, useState } from "react";
import DeleteFundButton from "./DeleteFundButton";

// async function getFunds() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/funds`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("データ取得失敗");
//   }

//   return res.json();
// }

export default function FundsPage() {
  
  const [funds, setFunds] = useState([]);

  const [search, setSearch] = useState("");

  const [productType, setProductType] =
    useState("すべて");

  const [accountType, setAccountType] =
    useState("すべて");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/funds`)
      .then((res) => res.json())
      .then((data) => setFunds(data));
  }, []);

  const filteredFunds = funds.filter((fund: any) => {

    const matchesSearch =
      fund.fundName
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesProductType =
      productType === "すべて" ||
      fund.productType === productType;

    const matchesAccountType =
      accountType === "すべて" ||
      fund.accountType === accountType;

    return (
      matchesSearch &&
      matchesProductType &&
      matchesAccountType
    );
  });
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold mb-10">保有銘柄一覧</h1>
        <div className="mb-8 space-y-4">

            <input
              type="text"
              placeholder="銘柄名で検索"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
            />

            <div className="flex gap-4">

              <select
                value={productType}
                onChange={(e) =>
                  setProductType(e.target.value)
                }
                className="rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
              >
                <option>すべて</option>
                <option>投資信託</option>
                <option>株式</option>
              </select>

              <select
                value={accountType}
                onChange={(e) =>
                  setAccountType(e.target.value)
                }
                className="rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-white"
              >
                <option>すべて</option>
                <option>NISA</option>
                <option>特定口座</option>
                <option>一般口座</option>
              </select>

            </div>
          </div>
          <div className="space-y-6">
          {filteredFunds.map((fund: any) => {
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
               <div className="mt-6 flex gap-4">
                <a
                  href={`/funds/${fund.id}/edit`}
                  className="text-sm text-zinc-300 underline hover:text-white"
                >
                  編集する
                </a>

                <DeleteFundButton id={fund.id} />
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}