import React, { useState } from 'react';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  GitBranch, 
  Zap, 
  Code, 
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Network,
  Search,
  AlertTriangle,
  UserCheck,
  ShieldOff,
  Ghost,
  ClipboardCheck,
  Bot,
  PenSquare,
  Server,
  Fingerprint,
  ShieldCheck,
  User,
  MonitorSmartphone,
  LayoutDashboard,
  EyeOff,
  Link
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'problem', label: 'The Problem', icon: AlertTriangle },
    { id: 'solution', label: 'How It Works', icon: Shield },
    { id: 'components', label: 'Architecture', icon: Cpu },
    { id: 'features', label: 'Key Features', icon: CheckCircle },
    { id: 'getting-started', label: 'Getting Started', icon: Code },
    { id: 'api', label: 'API Reference', icon: Database },
    { id: 'roadmap', label: 'Roadmap', icon: GitBranch }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">TrustLens</h1>
                <p className="text-xs text-gray-400">Documentation</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        {/* Overview/Hero Section */}
      <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 mb-6">
                      <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-sm font-medium text-blue-300">A New Standard for Digital Trust</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                          TrustLens
                      </span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      TrustLens is a decentralized reputation protocol that creates a universal, user-owned "Trust Passport" for e-commerce. By combining AI verification with the immutability of the blockchain, we make the internet a safer place for both customers and businesses.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-blue-500/20">
                      <Bot className="w-8 h-8 text-blue-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Verification</h3>
                      <p className="text-gray-300">Our system uses machine learning to analyze user actions, like reviews, to filter out spam and fraudulent activity in real-time.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-xl border border-purple-500/20">
                      <Fingerprint className="w-8 h-8 text-purple-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">User-Owned Identity</h3>
                      <p className="text-gray-300">Users connect via their Web3 wallet, which acts as a universal passport, allowing them to own and control their reputation across platforms.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/10 to-blue-600/10 p-6 rounded-xl border border-green-500/20">
                      <Link className="w-8 h-8 text-green-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">Immutable Proof</h3>
                      <p className="text-gray-300">Genuine actions are recorded as tamper-proof credentials on the blockchain, creating a permanent and verifiable history of trust.</p>
                  </div>
              </div>

              {/* Platform Preview Section */}
              <div className="mt-20">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See TrustLens in Action</h2>
                      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                          Explore our seller dashboard—a powerful command center for monitoring customer trust and verifying on-chain reputation.
                      </p>
                  </div>
                  
                  <div className="relative group cursor-pointer" onClick={() => window.open('https://github.com/ishanpatelraj/TrustLens---Beta-Version.git', '_blank')}>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 md:p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                          <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300 shadow-2xl">
                              {/* Make sure this image URL is the screenshot of YOUR dashboard */}
                              <img 
                                  src="https://res.cloudinary.com/dy8vdilqu/image/upload/v1751390544/Trustlens_swlbgu.png"
                                  alt="TrustLens Dashboard Screenshot"
                                  className="w-full h-full object-cover object-top"
                              />
                              
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30">
                                      <ArrowRight className="w-8 h-8 text-white" />
                                  </div>
                              </div>
                              
                              <div className="absolute top-4 right-4 flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-green-300 text-sm font-medium">Live Demo</span>
                              </div>
                          </div>
                          
                          <div className="mt-6 text-center">
                              <h3 className="text-2xl font-bold text-white mb-2">Explore the Seller Dashboard</h3>
                              <p className="text-gray-300 mb-4">
                                  See how businesses can leverage on-chain data to reduce fraud and build trust.
                              </p>
                              <div className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                                  <span>Launch Platform</span>
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        {/* Problem Section */}
        {/* We've updated the colors from red/orange to a more fitting blue/purple tech theme */}
        <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    {/* The heading is now specific to your project's problem space */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Crisis of Digital Trust</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A 5-star rating on one platform means nothing on the next. This broken system hurts both customers and businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: The User's Problem */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 p-6 rounded-xl border border-blue-500/20">
                        <UserCheck className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Siloed Reputations</h3>
                        <p className="text-gray-300 text-sm">A loyal customer with a perfect history on one retail site is treated like a total stranger on another, facing tedious sign-ups and purchase limits.</p>
                    </div>
                    
                    {/* Card 2: The Business's Problem */}
                    <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 p-6 rounded-xl border border-indigo-500/20">
                        <ShieldOff className="w-8 h-8 text-indigo-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Blind to Fraud</h3>
                        <p className="text-gray-300 text-sm">Businesses can't distinguish new legitimate customers from fraudsters creating fresh accounts for return scams, fake reviews, or promotion abuse.</p>
                    </div>

                    {/* Card 3: The Fraudster's Advantage */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-red-600/10 p-6 rounded-xl border border-purple-500/20">
                        <Ghost className="w-8 h-8 text-purple-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">The Fraudster's Playground</h3>
                        <p className="text-gray-300 text-sm">Malicious users exploit this fragmentation. After being banned, they can instantly create a new, 'clean' account on another platform to continue their disruptive behavior.</p>
                    </div>

                    {/* Card 4: The Inefficient Pre-existing Solution */}
                    <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 p-6 rounded-xl border border-teal-500/20">
                        <ClipboardCheck className="w-8 h-8 text-teal-400 mb-4" />
                        <h3 className="text-lg font-semibold text-white mb-2">Costly, Manual Verification</h3>
                        <p className="text-gray-300 text-sm">Retailers are forced to rely on expensive, slow, and often inaccurate manual review teams and third-party risk tools for every single platform, increasing operational costs.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How TrustLens Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We transform online actions into verifiable, user-owned credentials through a secure, three-step process.
              </p>
            </div>

            <div className="space-y-16">

              {/* --- Step 1: The User Action & AI Analysis --- */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-xl border border-blue-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">The Action & Analysis</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      A customer connects their Web3 wallet and performs a positive action, like submitting a product review. Our backend immediately sends the review text to a dedicated AI microservice.
                    </p>
                    <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                      <p className="text-gray-400">// API call from backend to ML service</p>
                      <p className="text-purple-400">POST</p>
                      <p className="text-green-400">/api/analyze</p>
                      <p className="text-gray-400">{`{ "text": "This product is amazing!" }`}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64">
                    <Bot className="absolute w-24 h-24 text-blue-400 top-0 left-0" />
                    <PenSquare className="absolute w-32 h-32 text-purple-400 bottom-0 right-0" />
                    <ArrowRight className="absolute w-16 h-16 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* --- Step 2: The Secure Backend Oracle --- */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-green-500/10 to-teal-600/10 p-8 rounded-xl border border-green-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">The Backend Oracle</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      If the AI confirms the review is genuine, our secure Node.js backend acts as a trusted "oracle." It uses its own private key to sign and send a transaction to the blockchain.
                    </p>
                    <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                        <p className="text-gray-400">// Ethers.js code running on the server</p>
                        <p><span className="text-cyan-400">await</span> <span className="text-yellow-300">contract.addAttestation</span>(</p>
                        <p className="ml-4"><span className="text-orange-400">userAddress</span>,</p>
                        <p className="ml-4"><span className="text-orange-400">"positive_review"</span></p>
                        <p>);</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64">
                        <Server className="absolute w-24 h-24 text-green-400 top-0 left-0" />
                        <Fingerprint className="absolute w-32 h-32 text-teal-400 bottom-0 right-0" />
                        <ArrowRight className="absolute w-16 h-16 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
              </div>

              {/* --- Step 3: The Immutable Trust Passport --- */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-pink-500/10 to-red-600/10 p-8 rounded-xl border border-pink-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">The Trust Passport</h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      The `TrustLens` smart contract records the genuine action, creating a permanent, tamper-proof credential linked to the user's wallet. This credential is now a part of their universal Trust Passport.
                    </p>
                    <div className="bg-black/20 p-4 rounded-lg font-mono text-sm">
                        <p className="text-gray-400">// Resulting on-chain data</p>
                        <p>{`{`}</p>
                        <p className="ml-4">actionType: <span className="text-green-400">"positive_review"</span>,</p>
                        <p className="ml-4">attestedBy: <span className="text-green-400">"0xBackend..."</span>,</p>
                        <p className="ml-4">timestamp: <span className="text-green-400">1720...</span></p>
                        <p>{`}`}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64">
                        <ShieldCheck className="absolute w-24 h-24 text-pink-400 top-0 left-0" />
                        <User className="absolute w-32 h-32 text-red-400 bottom-0 right-0" />
                        <CheckCircle className="absolute w-16 h-16 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        {/* Components Section */}
        {/* Technical Architecture Section */}
        <section id="components" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Architecture</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        TrustLens is built on a robust, decoupled architecture that bridges Web2 speed with Web3 security.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Pillar 1: The Smart Contract */}
                    <div className="bg-gradient-to-br from-blue-600/10 to-purple-700/10 p-8 rounded-xl border border-blue-500/20">
                        <Fingerprint className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">The Trust Ledger</h3>
                        <p className="text-gray-300 mb-4">A lightweight, gas-efficient Solidity smart contract deployed on the Sepolia testnet.</p>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Acts as the immutable "Trust Passport" ledger.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Only the contract owner (our backend) can write new attestations.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Public `view` function allows anyone to read a user's reputation for free.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Deployed and managed via Remix IDE.
                            </li>
                        </ul>
                    </div>

                    {/* Pillar 2: The Backend & AI Oracle */}
                    <div className="bg-gradient-to-br from-purple-600/10 to-pink-700/10 p-8 rounded-xl border border-purple-500/20">
                        <Server className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">The AI Oracle</h3>
                        <p className="text-gray-300 mb-4">A secure backend system that analyzes data and decides when to write to the blockchain.</p>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Next.js API Routes act as the central hub.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                A Python/Flask microservice provides AI-powered review analysis.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Uses Ethers.js to sign and send transactions with a secure, server-side private key.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Prisma ORM for managing the off-chain database on Supabase.
                            </li>
                        </ul>
                    </div>

                    {/* Pillar 3: The Web Application */}
                    <div className="bg-gradient-to-br from-teal-500/10 to-blue-600/10 p-8 rounded-xl border border-teal-500/20">
                        <MonitorSmartphone className="w-12 h-12 text-teal-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">The Web Application</h3>
                        <p className="text-gray-300 mb-4">The user-facing interface for both sellers and customers to interact with the TrustLens protocol.</p>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Built with Next.js and React for a high-performance, modern user experience.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Secure authentication and user management powered by Clerk.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Directly reads on-chain data using Ethers.js to display the Trust Passport.
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                Styled with Tailwind CSS and ShadCN UI for a responsive, beautiful interface.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
       {/* Key Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A powerful suite of tools designed to rebuild trust in the digital economy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: The Trust Passport */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-xl border border-blue-500/20">
                        <Fingerprint className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Universal Trust Passport</h3>
                        <p className="text-gray-300">Users build a single, portable on-chain reputation that they own and control, eliminating the need to start from zero on new platforms.</p>
                    </div>
                    
                    {/* Feature 2: AI-Powered Verification */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-xl border border-purple-500/20">
                        <Bot className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Verification</h3>
                        <p className="text-gray-300">A dedicated ML microservice analyzes reviews and user actions in real-time to detect spam, fraud, and manipulation before it impacts your business.</p>
                    </div>

                    {/* Feature 3: Immutable Credentials */}
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-600/10 p-6 rounded-xl border border-green-500/20">
                        <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Immutable Credentials</h3>
                        <p className="text-gray-300">Genuine actions are recorded as tamper-proof attestations on the blockchain, creating a verifiable and permanent history of trustworthiness.</p>
                    </div>

                    {/* Feature 4: Secure Backend Oracle */}
                    <div className="bg-gradient-to-br from-yellow-500/10 to-red-600/10 p-6 rounded-xl border border-yellow-500/20">
                        <Server className="w-10 h-10 text-yellow-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Secure Backend Oracle</h3>
                        <p className="text-gray-300">Our Next.js backend acts as a secure oracle, using a server-side private key to ensure that only verified actions are written to the smart contract.</p>
                    </div>
                    
                    {/* Feature 5: Seller Analytics Dashboard */}
                    <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 p-6 rounded-xl border border-red-500/20">
                        <LayoutDashboard className="w-10 h-10 text-red-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Seller Analytics Dashboard</h3>
                        <p className="text-gray-300">A comprehensive dashboard for sellers to monitor review authenticity, track customer trust scores, and view on-chain verification metrics.</p>
                    </div>

                    {/* Feature 6: Stealth Moderation */}
                    <div className="bg-gradient-to-br from-indigo-500/10 to-blue-600/10 p-6 rounded-xl border border-indigo-500/20">
                        <EyeOff className="w-10 h-10 text-indigo-400 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Stealth Moderation</h3>
                        <p className="text-gray-300">Malicious users are "shadowbanned"—their fraudulent content is visible only to them, preventing them from adapting their tactics while protecting the community.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Getting Started Section */}
        {/* Getting Started & API Section */}
        <section id="getting-started" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Integrate with TrustLens</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Bring universal, on-chain reputation to your platform with simple REST API endpoints and frontend hooks.
              </p>
            </div>

            <div className="space-y-12">
              
              {/* --- Step 1: Frontend - Read Reputation --- */}
              <div>
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Frontend: Read a User's Trust Passport</h3>
                </div>
                <p className="text-gray-400 mb-6">Use Ethers.js in your frontend to connect to a user's wallet and read their on-chain history directly from our smart contract. This allows you to instantly assess the trustworthiness of new users.</p>
                <div className="bg-black/30 p-6 rounded-xl border border-gray-700">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code className="language-javascript">{`import { ethers } from 'ethers';
        import { TRUST_LENS_ABI, TRUST_LENS_ADDRESS } from './constants';

        async function checkReputation(userAddress) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const contract = new ethers.Contract(TRUST_LENS_ADDRESS, TRUST_LENS_ABI, provider);

          // Call the 'getAttestations' view function (it's free!)
          const attestations = await contract.getAttestations(userAddress);
          console.log(attestations); // Returns an array of trust credentials
        }`}</code>
                  </pre>
                </div>
              </div>

              {/* --- Step 2: Backend - Create Attestations --- */}
              <div>
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Backend: Create a New Attestation</h3>
                </div>
                <p className="text-gray-400 mb-6">After your own systems (like an AI model) verify a positive user action, send a secure, server-to-server request to our `/api/attest` endpoint to create a permanent on-chain record for that user.</p>
                <div className="bg-black/30 p-6 rounded-xl border border-gray-700">
                  <pre className="text-gray-300 text-sm overflow-x-auto">
                    <code className="language-javascript">{`// Example using fetch in a Node.js environment

        const userWallet = '0x123...abc'; // The customer's wallet address
        const reviewId = 'review-id-from-your-db';

        const response = await fetch('https://api.trustlens.io/api/attest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // Secure the endpoint
          },
          body: JSON.stringify({
            reviewId: reviewId, // Your internal ID for the verified action
          })
        });

        const result = await response.json();
        console.log(result.transactionHash); // The on-chain transaction hash`}</code>
                  </pre>
                </div>
              </div>

              {/* --- API Reference --- */}
              <div className="pt-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Core API Endpoints</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Simple, powerful endpoints to integrate TrustLens.
                    </p>
                </div>

                <div className="space-y-8">
                  {/* Endpoint 1 */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-8 rounded-xl border border-blue-500/20">
                    <h3 className="font-mono text-xl font-bold text-white mb-4">
                        <span className="text-green-400">POST</span> /api/attest
                    </h3>
                    <p className="text-gray-300 mb-4">Securely creates a new on-chain attestation for a verified user action.</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Request Body</h4>
                      <ul className="text-gray-300 space-y-1 font-mono text-sm">
                        <li><span className="text-blue-400">reviewId</span> (string): The unique ID of the review from your own database that has been verified as genuine.</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Success Response (200)</h4>
                      <ul className="text-gray-300 space-y-1 font-mono text-sm">
                        <li><span className="text-green-400">message</span> (string): "Attestation successful!"</li>
                        <li><span className="text-green-400">transactionHash</span> (string): The hash of the confirmed blockchain transaction.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Endpoint 2 (Conceptual for your project) */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 rounded-xl border border-purple-500/20">
                    <h3 className="font-mono text-xl font-bold text-white mb-4">
                        <span className="text-cyan-400">GET</span> /api/reviews/submit
                    </h3>
                    <p className="text-gray-300 mb-4">An example endpoint for accepting new reviews from customers, capturing their wallet address for future attestation.</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Request Body</h4>
                      <ul className="text-gray-300 space-y-1 font-mono text-sm">
                        <li><span className="text-blue-400">comment</span> (string): The text of the customer's review.</li>
                        <li><span className="text-blue-400">userAddress</span> (string): The customer's connected wallet address.</li>
                        <li><span className="text-blue-400">customerId</span> (string): Your internal ID for the customer.</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Current Status & Future Vision</h2>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-600/20 border border-green-500/30 mb-6">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        <span className="text-sm font-medium text-green-300">Proof of Concept Deployed</span>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        TrustLens has successfully demonstrated the core end-to-end flow, from AI verification to on-chain attestation. Here's what's next.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Current Features */}
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-600/10 p-8 rounded-xl border border-green-500/20">
                        <h3 className="text-2xl font-bold text-white mb-6">What We've Built (Current Features)</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">**Solidity Smart Contract:** Deployed on Sepolia testnet to act as the immutable trust ledger.</span>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">**Secure Backend Oracle:** A Next.js API that safely writes attestations using a server-side wallet.</span>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">**AI Integration:** A Python microservice that analyzes review text for authenticity before any on-chain action.</span>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">**Web3 Frontend:** A React component allowing users to connect their wallet and read their on-chain Trust Passport.</span>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">**Seller Dashboard:** A full-featured UI for businesses to monitor reviews and trigger verifications.</span>
                            </div>
                        </div>
                    </div>

                    {/* Future Roadmap */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-8 rounded-xl border border-purple-500/20">
                        <h3 className="text-2xl font-bold text-white mb-6">Future Roadmap</h3>
                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="flex items-start">
                                <div className="w-6 h-6 bg-purple-500 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">1</span>
                                </div>
                                <div>
                                    <span className="text-white font-medium">Expand Attestation Types</span>
                                    <p className="text-gray-300 text-sm">Move beyond reviews. Add attestations for "Verified Purchase," "On-Time Payment," "Low Return Rate," and "Identity Verified" to build a more holistic trust score.</p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex items-start">
                                <div className="w-6 h-6 bg-purple-500 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">2</span>
                                </div>
                                <div>
                                    <span className="text-white font-medium">Protocol Decentralization (Governance)</span>
                                    <p className="text-gray-300 text-sm">Introduce a governance token ($TRUST) and a DAO, allowing the community of users and businesses to vote on new attestation types and oracle standards.</p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex items-start">
                                <div className="w-6 h-6 bg-purple-500 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">3</span>
                                </div>
                                <div>
                                    <span className="text-white font-medium">Direct-to-Consumer (D2C) Mobile App</span>
                                    <p className="text-gray-300 text-sm">Launch a mobile app where users can manage their Trust Passport, view their credentials, and grant access to third-party platforms via QR code, fully controlling their data.</p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="flex items-start">
                                <div className="w-6 h-6 bg-purple-500 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">4</span>
                                </div>
                                <div>
                                    <span className="text-white font-medium">Launch on a Scalable L2</span>
                                    <p className="text-gray-300 text-sm">Migrate from the testnet to a low-cost, high-throughput Layer 2 network like Polygon, Arbitrum, or Base to make the system affordable for millions of users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TrustLens</span>
            </div>
            <div className="text-center text-gray-400">
              <p className="mb-4">
                Bringing trust and transparency to AI through decentralized verification.
              </p>
              <p className="text-sm">
                © 2025 TrustLens. Building the future of verifiable AI.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;