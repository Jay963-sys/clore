"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [name, setName] = useState("User");

  useEffect(() => {
    const storedName = sessionStorage.getItem("wallet_name");
    if (storedName) setName(storedName);
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center items-start px-4 pt-16 text-white">
      <div className="w-full max-w-2xl">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold">{name}’s Wallet</h1>
          <button
            className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg text-sm transition"
            onClick={() => router.push("/")}
          >
            Logout
          </button>
        </div>

        {/* BALANCE CARD MOCK */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6">
          <p className="text-neutral-400 text-sm mb-1">Total Balance</p>
          <h2 className="text-3xl font-bold">0.00</h2>
          <p className="text-neutral-500 text-xs">USD ≈ $0.00</p>
        </div>

        {/* BUTTON ACTIONS */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Buy", path: "/buy" },
            { label: "Send", path: "/send" },
            { label: "Receive", path: "/receive" },
          ].map((item) => (
            <button
              key={item.label}
              className="bg-neutral-900 border border-neutral-800 rounded-xl py-3 hover:bg-neutral-800"
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* TOKENS LIST MOCK */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Tokens</h3>

          <div className="text-center text-neutral-500 text-sm py-8">
            No tokens found yet
          </div>
        </div>
      </div>
    </div>
  );
}
