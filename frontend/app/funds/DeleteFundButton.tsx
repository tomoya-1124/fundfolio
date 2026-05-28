"use client";

import { useRouter } from "next/navigation";

type DeleteFundButtonProps = {
  id: number;
};

export default function DeleteFundButton({
  id,
}: DeleteFundButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("本当に削除しますか？");

    if (!confirmed) {
      return;
    }

    await fetch(`http://localhost:8080/api/funds/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="text-sm text-red-400 underline hover:text-red-300"
    >
      削除する
    </button>
  );
}