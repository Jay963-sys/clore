"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Step2() {
  const router = useRouter();
  const [mnemonic, setMnemonic] = useState<string[]>([]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);

  const [positions, setPositions] = useState<number[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const phrase = sessionStorage.getItem("wallet_mnemonic");
    if (!phrase) return;

    const words = phrase.split(" ");
    setMnemonic(words);

    const randomPositions = [
      ...new Set(
        Array.from({ length: 3 }, () => Math.floor(Math.random() * 12))
      ),
    ];

    while (randomPositions.length < 3) {
      const pos = Math.floor(Math.random() * 12);
      if (!randomPositions.includes(pos)) randomPositions.push(pos);
    }

    setPositions(randomPositions.sort((a, b) => a - b));
  }, []);

  const handleSubmit = () => {
    setError("");

    if (!name || !password) {
      setError("Name & password are required.");
      return;
    }

    const isCorrect = answers.every(
      (answer, index) =>
        answer.trim().toLowerCase() === mnemonic[positions[index]]
    );

    if (!isCorrect) {
      setError("Incorrect seed words. Try again.");
      return;
    }

    sessionStorage.setItem("wallet_name", name);
    sessionStorage.setItem("wallet_password", password);

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-white shadow-xl">
        <button
          onClick={() => router.back()}
          className="text-neutral-400 hover:text-white text-xl mb-4"
        >
          &lt;
        </button>

        <h1 className="text-xl font-semibold mb-4">Verify Your Wallet</h1>

        {/* NAME INPUT */}
        <label className="block text-sm mb-1">Wallet Name</label>
        <input
          type="text"
          className="w-full bg-neutral-800 rounded-lg p-3 mb-4 text-sm"
          placeholder="Enter wallet name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* PASSWORD INPUT */}
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          className="w-full bg-neutral-800 rounded-lg p-3 mb-6 text-sm"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* SEED WORD VALIDATION */}
        {positions.map((pos, i) => (
          <div key={i} className="mb-4">
            <label className="block text-xs mb-1">Enter word #{pos + 1}</label>
            <input
              type="text"
              className="w-full bg-neutral-800 rounded-lg p-3 text-sm"
              placeholder={`Word #${pos + 1}`}
              value={answers[i]}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[i] = e.target.value;
                setAnswers(newAnswers);
              }}
            />
          </div>
        ))}

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <button
          className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg mt-2"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
