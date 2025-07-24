"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Target,
  DollarSign,
  BarChart3,
  Brain,
  Sparkles,
  Play,
  MessageSquare,
  Rocket,
  Clock,
  ChevronDown,
  ShoppingCart,
  CreditCard,
  Package,
  Monitor,
  Cloud,
  X,
  Menu,
  Search,
  Filter,
  Calendar,
  FileText,
  Settings,
  Bell,
  User,
  LogOut,
  Globe,
  Heart,
  Send,
  Instagram,
  Video,
  Crown,
  TestTube,
  Lightbulb,
  Eye,
  Camera,
  Trophy
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function BrandPage() {
  const [isFAQOpen, setIsFAQOpen] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Professional features inspired by Upfluence
  const coreFeatures = [
    {
      title: "AI-Powered Creator Discovery",
      description: "Find the perfect creators using advanced AI that analyzes audience demographics, engagement quality, and brand affinity",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      status: "Available Now"
    },
    {
      title: "Campaign Management Suite",
      description: "Complete workflow from creator selection to content approval, all in one intuitive dashboard",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      status: "Available Now"
    },
    {
      title: "Performance Analytics",
      description: "Track ROI, engagement rates, and conversion metrics with detailed reporting and insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      status: "Available Now"
    },
    {
      title: "Secure Payment System",
      description: "Escrow-protected payments with flexible models: fixed pay, commission-based, or hybrid",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      status: "Available Now"
    }
  ]

  // Coming soon features
  const comingSoonFeatures = [
    {
      title: "Advanced Integrations",
      description: "Connect with Shopify, WooCommerce, Amazon, and major e-commerce platforms",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      status: "Coming Soon"
    },
    {
      title: "Content Calendar",
      description: "Visual timeline for content scheduling and campaign coordination",
      icon: <Calendar className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
      status: "Coming Soon"
    },
    {
      title: "Creator Marketplace",
      description: "Direct access to verified creators ready to collaborate with your brand",
      icon: <Users className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      status: "Coming Soon"
    }
  ]

  // Professional pricing
  const pricing = [
    {
      title: "Starter",
      price: "$25",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: ["Up to 5 campaigns per month", "AI creator matching", "Basic analytics dashboard", "Email support", "Secure escrow payments"],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      title: "Professional",
      price: "$49",
      period: "/month",
      description: "For growing businesses and agencies",
      features: ["Unlimited campaigns", "Advanced AI matching", "Detailed analytics & reporting", "Priority support", "Custom payment models", "Team collaboration"],
      popular: true,
      cta: "Start Free Trial"
    }
  ]

  // Professional workflow
  const workflowSteps = [
    {
      step: "01",
      title: "Define Your Campaign",
      description: "Set your goals, budget, and target audience. Our AI will help optimize your campaign parameters.",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "02",
      title: "AI Matches Creators",
      description: "Our advanced AI analyzes thousands of creators to find the perfect matches for your brand and campaign goals.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      step: "03",
      title: "Review & Approve",
      description: "Browse creator profiles, review their content quality, and select the creators that best fit your brand.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      step: "04",
      title: "Track & Optimize",
      description: "Monitor campaign performance in real-time, track ROI, and optimize your strategy based on data insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    }
  ]

  // How it works (alias for workflowSteps)
  const howItWorks = workflowSteps

  // Payment models
  const paymentModels = [
    {
      title: "Fixed Pay",
      description: "Pay creators a predetermined amount for their content",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      details: ["Secure escrow protection", "Set your own rates", "Only 10% platform fee", "Simple and predictable"],
      bestFor: "Brand awareness campaigns"
    },
    {
      title: "Performance-Based",
      description: "Pay only when creators drive measurable results",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      details: ["Commission-based payments", "Track conversions", "Risk-free for brands", "Motivates creators"],
      bestFor: "Sales-driven campaigns"
    },
    {
      title: "Hybrid Model",
      description: "Combine fixed pay with performance bonuses",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      details: ["Base payment + bonuses", "Balanced risk/reward", "Flexible structure", "Escrow security"],
      bestFor: "Balanced campaigns"
    }
  ]

  // Platform comparison
  const comparisonData = [
    {
      feature: "Monthly Platform Fee",
      viralreach: "$25-49",
      upfluence: "$500+",
      impact: "$500+",
      favor: "$200+",
      viralreachHighlight: true
    },
    {
      feature: "Creator Commission",
      viralreach: "10%",
      upfluence: "15-30%",
      impact: "20-35%",
      favor: "10-25%",
      viralreachHighlight: true
    },
    {
      feature: "Setup Time",
      viralreach: "5 minutes",
      upfluence: "2-4 weeks",
      impact: "1-3 weeks",
      favor: "1-2 weeks",
      viralreachHighlight: true
    },
    {
      feature: "Minimum Budget",
      viralreach: "$100",
      upfluence: "$2,000+",
      impact: "$2,000+",
      favor: "$1,000+",
      viralreachHighlight: true
    },
    {
      feature: "AI Creator Matching",
      viralreach: "Advanced AI",
      upfluence: "Basic filters",
      impact: "Manual search",
      favor: "Limited AI",
      viralreachHighlight: true
    },
    {
      feature: "Payment Protection",
      viralreach: "Escrow system",
      upfluence: "Platform managed",
      impact: "Platform managed",
      favor: "Platform managed",
      viralreachHighlight: true
    }
  ]

  // Professional FAQs
  const faqs = [
    {
      question: "How does ViralReach compare to Upfluence?",
      answer: "We offer the same core functionality as Upfluence but at 80% lower cost. We have only 10% creator commissions, faster setup times, and more flexible payment options. While Upfluence targets enterprise clients, we're built for small to medium businesses who need professional results without enterprise pricing."
    },
    {
      question: "What makes your AI creator matching different?",
      answer: "Our AI analyzes audience demographics, engagement quality, content style, and brand affinity to find creators who will deliver real results for your specific campaign goals. We go beyond basic filters to provide intelligent recommendations."
    },
    {
      question: "How do you ensure creator quality?",
      answer: "We use a multi-step verification process including identity verification, audience analysis, content quality assessment, and performance tracking. All creators are vetted before joining our platform."
    },
    {
      question: "What payment methods do you support?",
      answer: "We accept all major credit cards and PayPal for platform fees. Creator payments are handled through our secure escrow system, protecting both brands and creators."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties. We offer a 30-day money-back guarantee if you're not satisfied with our platform."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide comprehensive support including email support for all plans, priority support for Professional plans, and detailed documentation to help you succeed."
    }
  ]

  // Social proof logos (placeholder for now)
  const clientLogos = [
    "Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6"
  ]

  return (
    <>
      <Head>
        <title>For Brands - ViralReach Influencer Marketing Platform</title>
        <meta name="description" content="Professional influencer marketing for brands. Turn creators into revenue with AI-powered matching, campaign management, and performance analytics. 80% cheaper than Upfluence." />
        <link rel="canonical" href="https://viralreach.com/brand" />
        <meta property="og:url" content="https://viralreach.com/brand" />
        <meta property="og:title" content="For Brands - ViralReach Influencer Marketing Platform" />
        <meta property="og:description" content="Professional influencer marketing for brands. Turn creators into revenue with AI-powered matching, campaign management, and performance analytics." />
        <meta name="twitter:url" content="https://viralreach.com/brand" />
        <meta name="twitter:title" content="For Brands - ViralReach Influencer Marketing Platform" />
        <meta name="twitter:description" content="Professional influencer marketing for brands. Turn creators into revenue with AI-powered matching, campaign management, and performance analytics." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="brand" />

      {/* Hero Section - Matching Main Page Style */}
      <main>
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-20 bg-white overflow-hidden">
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                🌟 Professional Results at Startup Prices
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Creators Into
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Revenue
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-gray-700">
                  for Your Brand
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Professional influencer marketing platform that delivers results. 
                <span className="font-bold text-purple-600 text-2xl"> 80% cheaper than Upfluence</span>
                <br />
                <span className="text-lg text-gray-500">Same powerful features, better ROI</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/#waitlist"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <button className="bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </button>
              </div>
              


              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>80% Cost Savings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>5-Minute Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>Secure Payments</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why Choose ViralReach?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Results,
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Startup Prices
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've built a platform that combines the power of enterprise tools with the simplicity and affordability that growing businesses need.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Benefits */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Pay $25-49/month with only 10% commission on creator payments</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5-Minute Setup</h3>
                    <p className="text-gray-600">Start your first campaign immediately, no complex onboarding</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
                    <p className="text-gray-600">Escrow-protected payments with flexible models for any campaign</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
                    <p className="text-gray-600">Connect with creators from 50+ countries, perfect for brands looking to expand their reach</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Visual */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Campaign Dashboard</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      +85%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Active Creators</div>
                          <div className="text-sm text-gray-600">12 creators</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">85%</div>
                        <div className="text-sm text-gray-600">Complete</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Total Reach</div>
                          <div className="text-sm text-gray-600">2.4M views</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-pink-600">2.4M</div>
                        <div className="text-sm text-gray-600">Reach</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Engagement</div>
                          <div className="text-sm text-gray-600">8.7% rate</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">8.7%</div>
                        <div className="text-sm text-gray-600">Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features Section - Matching Main Page Style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Everything You Need to Succeed
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Tools That
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Actually Work
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional tools that deliver real results, without the enterprise complexity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {feature.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                What's Coming Soon
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building Fast to Bring You
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Enterprise Features
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're building fast to bring you enterprise-level features at startup prices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {comingSoonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {feature.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section - Matching Main Page Style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4 mr-2" />
                How It Works
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple 4-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From campaign creation to results - everything you need to succeed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Comparison Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Why Choose ViralReach?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See How We Compare to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Other Platforms
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional results without the enterprise price tag
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <div className="min-w-full bg-white rounded-3xl shadow-xl border border-gray-200">
                <div className="grid grid-cols-5 gap-6 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-3xl">
                  <div className="font-bold text-gray-900 text-lg">Feature</div>
                  <div className="font-bold text-purple-600 text-center text-lg">ViralReach</div>
                  <div className="font-bold text-gray-600 text-center text-lg">Upfluence</div>
                  <div className="font-bold text-gray-600 text-center text-lg">Impact</div>
                  <div className="font-bold text-gray-600 text-center text-lg">Favor</div>
                </div>
                
                {comparisonData.map((row, index) => (
                  <div key={index} className={`grid grid-cols-5 gap-6 p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="font-semibold text-gray-900">{row.feature}</div>
                    <div className={`text-center font-bold ${row.viralreachHighlight ? 'text-purple-600' : 'text-gray-900'}`}>
                      {row.viralreach}
                    </div>
                    <div className="text-center text-gray-600">{row.upfluence}</div>
                    <div className="text-center text-gray-600">{row.impact}</div>
                    <div className="text-center text-gray-600">{row.favor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Models Section - Matching Main Page Style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Flexible Payment Models
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose the Payment Structure
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  That Works for You
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the payment structure that works best for your business goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {paymentModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {model.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.title}</h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <div className="mb-6">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Best for: {model.bestFor}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {model.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-term Partnerships Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4 mr-2" />
                Long-term Partnerships
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Build Lasting
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Brand Relationships
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Move beyond transactional campaigns. Create authentic partnerships that deliver 5x better ROI through sustained trust and authentic content.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Benefits */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5x Better ROI</h3>
                    <p className="text-gray-600">Long-term partnerships deliver significantly better returns through sustained audience trust and authentic content.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Brand Voice</h3>
                    <p className="text-gray-600">Build genuine partnerships with creators who truly understand and represent your brand values.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">Get a dedicated relationship manager to coordinate campaigns and optimize performance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Creator Access</h3>
                    <p className="text-gray-600">Access to premium creators who prefer long-term partnerships over transactional campaigns.</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Visual */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Projected Partnership Success</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      +500%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">Industry Example: Beauty Brand</div>
                          <div className="text-sm text-gray-600">8-month partnership projection</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$45,200</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mike" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">Industry Example: Food Delivery</div>
                          <div className="text-sm text-gray-600">12-month partnership projection</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$32,800</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">Industry Example: Fitness Brand</div>
                          <div className="text-sm text-gray-600">6-month partnership projection</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$28,400</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link 
                href="/partnerships"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Partnerships
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Simple, Transparent Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                No Hidden Fees,
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  No Surprises
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing with only 10% commission, no hidden fees, no surprises
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${
                    plan.popular ? 'border-purple-500 relative' : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-xl">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/#waitlist"
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">30-day money-back guarantee</span> • No long-term contracts • Cancel anytime
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section - Matching Main Page Style */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Know About ViralReach
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Professional answers to your most common questions
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200"
                >
                  <button
                    onClick={() => setIsFAQOpen(isFAQOpen === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                        isFAQOpen === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isFAQOpen === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-purple-500 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join growing brands who've switched from expensive platforms. 
                Start your free trial today with our 30-day money-back guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/#waitlist"
                  className="bg-white text-purple-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg shadow-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-purple-100 text-sm">
                  No credit card required • 30-day guarantee
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
      </div>
    </>
  )
}