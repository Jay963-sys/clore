import { Metadata } from 'next';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-xl">CL</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Clore Hub</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">  
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#wallet" className="text-gray-600 hover:text-gray-900 transition-colors">Wallet</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <a href="#wallet" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/20">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              All‑in‑One Web3 Platform
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Invest with Confidence in the
              <span className="block text-4xl md:text-6xl mt-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Clore Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Clean, editorial layout for Web3 readers. Learn the latest in DeFi and GPU economies
              and manage your CLORE with the official Clore Wallet.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#wallet" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 text-lg">
                Explore Clore Wallet
              </a>
              <a href="#blog" className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold transition-all text-lg">
                Read the Blog
              </a>
            </div>
          </div>

          {/* Partner Row removed as requested */}
        </div>
      </section>

      {/* Feature Widgets */}
      <section id="features" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 font-bold mb-2">Fast, Secure Transactions</h3>
            <p className="text-gray-600 text-sm">Send and receive CLORE with audited, production‑grade security—no hidden fees.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 font-bold mb-2">Real‑Time Insights</h3>
            <p className="text-gray-600 text-sm">Track price moves and on‑chain metrics with clear charts and analytics.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 font-bold mb-2">Beginner‑Friendly</h3>
            <p className="text-gray-600 text-sm">Simple flows for creating wallets, backups, and transfers.</p>
          </div>
        </div>
      </section>

      {/* Clore Wallet Explainer */}
      <section id="wallet" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Clore Wallet</h2>
            <p className="text-gray-600 text-lg mb-8">
              Official wallet for CLORE—available on Windows, macOS, Linux, iOS, and Android. Manage
              assets, back up and restore, and participate in Proof of Holding (PoH) for immediate
              rewards without lockups.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                <span className="text-gray-700">Proof of Holding (PoH)</span>
                <span className="text-gray-900 font-bold">Instant rewards • No minimums</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                <span className="text-gray-700">Multi‑platform</span>
                <span className="text-gray-900 font-bold">Desktop & Mobile</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                <span className="text-gray-700">Languages</span>
                <span className="text-gray-900 font-bold">EN, ES, RU, ZH, TR</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a href="https://clore.ai/wallet" rel="noreferrer" target="_blank" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">Download Wallet</a>
              <a href="https://docs.clore.ai/proof-of-holding/overview" rel="noreferrer" target="_blank" className="px-6 py-3 rounded-lg font-semibold border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition-all">Learn PoH</a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h4 className="text-gray-900 font-semibold mb-2">Why CLORE + GPU Marketplace?</h4>
              <p className="text-gray-600 text-sm">Peer‑to‑peer GPU leasing: hosts earn rental fees and a share of
                block rewards; renters access affordable compute for AI, research, and mining.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h5 className="text-gray-900 font-semibold mb-1">On‑Demand Leasing</h5>
                <p className="text-gray-600 text-sm">Non‑interruptible. ~10% fee, reduced to ~5% with PoH.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h5 className="text-gray-900 font-semibold mb-1">Spot Leasing</h5>
                <p className="text-gray-600 text-sm">Interruptible. 2.5% fee, reduced to ~1.8% with PoH.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h5 className="text-gray-900 font-semibold mb-2">Coming: Proof‑of‑Stake</h5>
              <p className="text-gray-600 text-sm">PoS testnet initiative aimed at improved security and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-medium mb-2">Insights</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Web3 Journal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explanations and quick reads on DeFi, GPU economies, and the Clore network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:'What Proof of Holding Means for Users', tag:'Tokenomics'},
              {title:'GPU Markets: Renting Compute on‑chain', tag:'Research'},
              {title:'Self‑Custody Basics for New Users', tag:'Guides'}
            ].map((p, i) => (
              <article key={i} className="group bg-white border border-gray-200 hover:border-gray-300 transition-all rounded-2xl overflow-hidden shadow-sm">
                <div className="h-40 bg-linear-to-br from-purple-500/10 to-pink-500/10" />
                <div className="p-6">
                  <span className="text-xs text-purple-600 font-semibold">{p.tag}</span>
                  <h3 className="mt-2 text-xl font-bold group-hover:text-gray-900 text-gray-800">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">A concise overview with practical steps and links to docs.</p>
                  <a href="#" className="mt-4 inline-block text-purple-700 hover:text-purple-800 font-semibold">Read →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Answers</h3>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-white">
            {[{
              q:'Is PoH locked?',
              a:'No. Rewards are immediate and you can withdraw any time.'
            },{
              q:'Which platforms are supported?',
              a:'Windows, macOS, Linux, iOS, and Android.'
            },{
              q:'What is the difference between On‑Demand and Spot?',
              a:'On‑Demand cannot be overbid; Spot can be interrupted but costs less.'
            }].map((f, i) => (
              <div key={i} className="p-5 bg-white">
                <p className="text-gray-900 font-semibold">{f.q}</p>
                <p className="text-gray-600 text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-xl">CL</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Clore</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A Web3 editorial hub and guide to the Clore ecosystem and wallet.
              </p>
              <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Clore Hub. All rights reserved.</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Learn</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#wallet" className="hover:text-gray-900 transition-colors">Clore Wallet</a></li>
                <li><a href="#blog" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Docs</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="https://docs.clore.ai" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Clore Docs</a></li>
                <li><a href="https://docs.clore.ai/proof-of-holding/overview" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">PoH Overview</a></li>
                <li><a href="https://clore.ai/wallet" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Download Wallet</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Twitter/X</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
