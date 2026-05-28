"use client";

import { useState } from "react";

export default function NewFundPage() {
  const [fundName, setFundName] = useState("");
  const [productType, setProductType] = useState("投資信託");
  const [assetType, setAssetType] = useState("外国株式");
  const [accountType, setAccountType] = useState("NISA");
  const [acquisitionAmount, setAcquisitionAmount] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/funds`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fundName,
          productType,
          assetType,
          accountType,
          acquisitionAmount,
          currentValue,
        }),
      }
    );

    const data = await res.text();

    console.log(data);
  };
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">銘柄登録</h1>

        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              銘柄名
            </label>
            {/* <input
              type="text"
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white"
              placeholder="例：eMAXIS Slim 全世界株式"
            /> */}
            <input
              type="text"
              value={fundName}
              onChange={(e) =>
                setFundName(e.target.value)
              }
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white"
              placeholder="例：eMAXIS Slim 全世界株式"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              商品種別
            </label>
            <select
              value={productType}
              onChange={(e) =>
                setProductType(e.target.value)
              }
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white"
            >
              <option>投資信託</option>
              <option>株式</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              資産分類
            </label>
            <select
              value={assetType}
              onChange={(e) =>
                setAssetType(e.target.value)
              }
              className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 text-white">
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
                value={acquisitionAmount}
                onChange={(e) =>
                  setAcquisitionAmount(e.target.value)
                }
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
                value={currentValue}
                onChange={(e) =>
                  setCurrentValue(e.target.value)
                }
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