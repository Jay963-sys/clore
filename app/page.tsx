"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/brand/clore.svg')",
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center px-6 py-4">
        <Link href="/" className="text-white text-xl font-semibold">
          Clore Wallet
        </Link>
      </nav>

      {/* MAIN CARD */}
      <div className="relative z-10 flex justify-center items-center min-h-[80vh] px-6">
        <div className="bg-neutral-900/90 border border-neutral-700 rounded-xl p-6 w-full max-w-md shadow-lg backdrop-blur-md">
          <h2 className="text-white text-2xl font-semibold mb-2">Welcome</h2>
          <p className="text-neutral-400 text-sm mb-6">
            Create a new wallet or Recover an existing wallet
          </p>

          <Link href="/create">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition mb-3">
              Create A New Wallet
            </button>
          </Link>

          <button
            className="..."
            onClick={() => (window.location.href = "/recover")}
          >
            Recover an existing wallet
          </button>
        </div>
      </div>
    </div>
  );
}
