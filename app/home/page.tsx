import { Metadata } from 'next';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-purple-500/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <span className="text-2xl font-bold text-white">CoinSwap</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Swap</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Staking</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Farming</a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg shadow-purple-500/20">
                Connect Wallet
              </button>
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Decentralized Exchange
              <span className="block text-4xl md:text-6xl mt-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Redefining DeFi
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              CoinSwap is a comprehensive DeFi platform offering AMM swaps, yield farming, staking, and access to Initial DEX Offerings (IDOs) through SpacePad.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-purple-500/30 text-lg">
                Start Swapping
              </button>
              <button className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold transition-all text-lg">
                Explore Features
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            {/* Left Side - Statistics */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Platform Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Total Supply</span>
                    <span className="text-white font-bold">19,999,999 CSS</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Initial Supply</span>
                    <span className="text-white font-bold">400,000 CSS</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Platform Users</span>
                    <span className="text-white font-bold">100+ Weekly</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                    <span className="text-white/70">Questions Answered</span>
                    <span className="text-white font-bold">20,000+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features Preview */}
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Automated Market Maker</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Smart routing for optimal swapping rates with minimal slippage</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Yield Farming</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Stake CSSLP tokens in farms to earn rewards</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">Staking</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Stake CSS tokens to earn additional CSS rewards</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-white font-semibold">SpacePad Launchpad</span>
                    </div>
                    <p className="text-white/60 text-sm ml-5">Access IDOs and early-stage investment opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium mb-2">Our Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete DeFi Ecosystem
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need for decentralized finance in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AMM/Swap Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 10a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3zM7 4a1 1 0 00-1 1v1a1 1 0 001 1h9a1 1 0 001-1V5a1 1 0 00-1-1H7zM7 10a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-9a1 1 0 00-1-1H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AMM/Swap</h3>
              <p className="text-white/70 mb-6">
                Launch new pools with smart routing, optimal rates, and minimal slippage
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                Swap Now →
              </a>
            </div>

            {/* Yield Farming Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Yield Farming</h3>
              <p className="text-white/70 mb-6">
                Stake CSSLP tokens in farms to maximize returns on your liquidity
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                Start Farming →
              </a>
            </div>

            {/* Staking Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Staking</h3>
              <p className="text-white/70 mb-6">
                Stake CSS tokens to earn additional rewards within the ecosystem
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                Stake Now →
              </a>
            </div>

            {/* SpacePad Card */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.769l4-3a.999.999 0 01.787-.15l3 1a1 1 0 00.787 0l7-3a1 1 0 000-1.84L10.394 2.08zM3.422 9.442l1.967.394 1.5-1.5-1.967-.394-1.5 1.5zm9.647-9.647a.996.996 0 000-.283l.394-1.967.394 1.967a.997.997 0 000 .283z" />
                  <path d="M13.414 10l-.394.394.5-2.475.394.394a.996.996 0 00.283 0L14 8l-.394-.394a.996.996 0 00-.283 0l-.394.394.5 2.475L13 10h.414zM6.25 11.25l-.394-1.968-.394 1.968a.993.993 0 000 .283l1.967.394.394-1.967a.993.993 0 00-.283 0L5.25 12.5l1.5-1.5 1.5 1.5-1.967.394a.993.993 0 00-.283 0l-.394 1.967.394-1.967a.995.995 0 000-.283l1.968-.394L7.75 11.25l-1.5-1.5zM16.5 9.75l-.394.394.5 2.475-.394-.394a.996.996 0 00-.283 0L16 12.5l.394.394c.05.048.11.086.177.112l.017.006h.006a.998.998 0 00.283 0L17.5 13l-.5-2.475.5-2.475-.394.394a.996.996 0 00-.283 0L16 8.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SpacePad</h3>
              <p className="text-white/70 mb-6">
                Launchpad for IDOs and early access to new investment opportunities
              </p>
              <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold">
                Explore IDOs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CSS Token
              </h2>
              <p className="text-xl text-white/70 mb-8">
                The native utility and governance token powering the CoinSwap ecosystem
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Utility Token</h4>
                    <p className="text-white/70">Used for governance, staking, and platform operations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Maximum Supply</h4>
                    <p className="text-white/70">19,999,999 CSS tokens total supply</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Governance</h4>
                    <p className="text-white/70">Participate in platform decisions and token economics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Token Economics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Maximum Supply</span>
                  <span className="text-white font-bold">19,999,999 CSS</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Initial Supply</span>
                  <span className="text-white font-bold">400,000 CSS</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-500/5 rounded-lg">
                  <span className="text-white/70">Token Type</span>
                  <span className="text-white font-bold">Utility & Governance</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all">
                  View on Explorer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Roadmap & Future
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our commitment to continuous innovation and platform development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Swap v2 Integration</h3>
              <p className="text-white/70 text-sm">Enhanced trading tools and improved AMM functionality</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">New UI Launch</h3>
              <p className="text-white/70 text-sm">Redesigned interface for better user experience</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CERTIK Audit</h3>
              <p className="text-white/70 text-sm">Security certification for enhanced trust</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 font-bold">04</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NFT Features</h3>
              <p className="text-white/70 text-sm">Non-fungible token integration and marketplace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <span className="text-2xl font-bold text-white">CoinSwap</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                A comprehensive DeFi platform for swapping, farming, staking, and accessing IDOs.
              </p>
              <p className="text-white/50 text-xs">© 2024 CoinSwap. All rights reserved.</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Platform</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Swap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Farming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SpacePad</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audit Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Security</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Bounty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Audit</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
