"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as bip39 from "bip39";

export default function Step1() {
  const router = useRouter();
  const [mnemonic, setMnemonic] = useState<string[]>([]);

  useEffect(() => {
    const phrase = bip39.generateMnemonic(128); // 12 words
    setMnemonic(phrase.split(" "));
    sessionStorage.setItem("wallet_mnemonic", phrase);
  }, []);

  const handleNext = () => {
    router.push("/create/step");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-white shadow-xl">
        {/* BACK BUTTON */}
        <button
          onClick={() => router.back()}
          className="text-neutral-400 hover:text-white text-xl mb-4"
        >
          &lt;
        </button>

        <h1 className="text-xl font-semibold mb-2">Secure Your Wallet</h1>
        <p className="text-neutral-400 text-sm mb-6">
          Save these 12 words in order. This is the only way to recover your
          wallet.
        </p>

        {/* MNEMONIC BOX */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-800/60 border border-neutral-700 rounded-xl mb-8">
          {mnemonic.map((word, i) => (
            <div
              key={i}
              className="text-center bg-neutral-800 py-2 rounded-lg text-sm border border-neutral-700"
            >
              <span className="text-neutral-500 text-xs mr-1">{i + 1}.</span>
              {word}
            </div>
          ))}
        </div>

        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
          onClick={handleNext}
        >
          Next
        </button>

        <p className="text-xs text-neutral-500 text-center mt-3">
          Do not screenshot or share. Anyone with these words can access your
          wallet.
        </p>
      </div>
    </div>
  );
}
