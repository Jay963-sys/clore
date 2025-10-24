"use client";

import { useState } from "react";
import Link from "next/link";

export default function RecoverWallet() {
  const [mnemonic, setMnemonic] = useState("");

  const handleNext = () => {
    if (!mnemonic || mnemonic.trim().split(" ").length !== 12) {
      alert("Please enter a valid 12-word recovery phrase.");
      return;
    }
    // Go to next step
    window.location.href = "/recover/confirmation";
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] flex justify-center items-center px-6">
      <div className="bg-neutral-900/90 border border-neutral-700 rounded-xl p-8 w-full max-w-lg shadow-[0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-md">
        {/* Step */}
        <p className="text-center text-neutral-400 text-sm mb-2">Step 1/3</p>

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Recover Existing Wallet
        </h2>

        {/* Input */}
        <textarea
          value={mnemonic}
          onChange={(e) => setMnemonic(e.target.value)}
          placeholder="12-Word Recovery Phrase"
          rows={3}
          className="w-full p-3 rounded-lg bg-black text-neutral-200 border border-neutral-700 focus:border-red-600 focus:outline-none mb-4"
        />

        {/* Warning */}
        <div className="text-center mb-6">
          <p className="text-red-500 font-medium text-sm">
            ⚠ DO NOT share your recovery phrase with ANYONE.
          </p>
          <p className="text-neutral-400 text-xs mt-1">
            Always be aware of phishing attempts.
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition"
        >
          Next
        </button>

        {/* Back */}
        <Link
          href="/"
          className="block mt-4 text-center text-neutral-500 text-sm hover:text-neutral-300 transition"
        >
          ← Back
        </Link>
      </div>
    </div>
  );
}
