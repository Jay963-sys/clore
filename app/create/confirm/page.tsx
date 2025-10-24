"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmRecovery() {
  const router = useRouter();
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [confirmationWords, setConfirmationWords] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("mnemonic");
    if (!saved) return router.push("/create");

    const words = saved.split(" ");
    setMnemonic(words);

    // Pick 3 random unique indexes
    const indexes = new Set<number>();
    while (indexes.size < 3) {
      indexes.add(Math.floor(Math.random() * words.length));
    }

    const confirmWords = Array.from(indexes)
      .sort((a, b) => a - b)
      .map((i) => words[i]);

    setConfirmationWords(confirmWords);
  }, [router]);

  const handleWordClick = (word: string) => {
    if (selectedWords.includes(word)) return;
    setSelectedWords([...selectedWords, word]);
    setError("");
  };

  const handleNext = () => {
    if (selectedWords.join(" ") === confirmationWords.join(" ")) {
      router.push("/create/password");
    } else {
      setError("Incorrect order. Try again.");
      setSelectedWords([]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] flex justify-center items-center px-6">
      <div className="bg-neutral-900/90 border border-neutral-700 rounded-xl p-8 w-full max-w-lg shadow-[0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-md text-center">
        <p className="text-neutral-400 text-sm mb-2">Step 2/3</p>
        <h2 className="text-white text-2xl font-semibold mb-6">
          Confirm Recovery Phrase
        </h2>

        {/* Prompt */}
        <p className="text-neutral-300 mb-4">
          Select the following words in the correct order:
        </p>
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {confirmationWords.map((w, i) => (
            <span
              key={i}
              className="text-red-500 font-medium px-3 py-1 border border-red-600 rounded-lg"
            >
              {w}
            </span>
          ))}
        </div>

        {/* Word buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {mnemonic.map((word, i) => (
            <button
              key={i}
              onClick={() => handleWordClick(word)}
              disabled={selectedWords.includes(word)}
              className={`px-3 py-2 rounded-lg border text-sm transition ${
                selectedWords.includes(word)
                  ? "bg-red-600 text-white border-red-600"
                  : "border-neutral-600 text-neutral-300 hover:border-neutral-400"
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Next */}
        <button
          onClick={handleNext}
          disabled={selectedWords.length !== 3}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition disabled:bg-red-900/30 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
