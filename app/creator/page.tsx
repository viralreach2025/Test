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
  Eye,
  Clock,
  Award,
  Globe,
  ChevronDown,
  Instagram,
  Youtube,
  Video,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  MapPin,
  X
} from 'lucide-react'

export default function CreatorPage() {
  const [isFAQOpen, setIsFAQOpen] = useState<number | null>(null)

  const creatorBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Content + Commission Earnings",
      description: "Get paid for creating content plus earn commission on sales. More ways to earn from your influence.",
      stat: "Earn from content + sales"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Perfect Brand Matches",
      description: "Our AI matches you with brands that align with your values and audience. No more awkward partnerships.",
      stat: "95% brand satisfaction"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Get paid upfront via escrow. No more chasing payments or dealing with late-paying brands.",
      stat: "100% payment guarantee"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track your content performance and earnings in real-time. Know exactly what works for your audience.",
      stat: "Real-time insights"
    }
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Complete Your Profile",
      description: "Showcase your content, audience demographics, and brand values. The more complete, the better matches.",
      icon: <Users className="w-6 h-6" />,
      time: "10 minutes"
    },
    {
      step: "2",
      title: "Browse Opportunities",
      description: "Get matched with relevant brand campaigns. Review requirements and compensation before applying.",
      icon: <Eye className="w-6 h-6" />,
      time: "Daily updates"
    },
    {
      step: "3",
      title: "Create & Get Paid",
      description: "Create authentic content, track performance, and get paid when targets are met.",
      icon: <TrendingUp className="w-6 h-6" />,
      time: "Performance-based"
    }
  ]

  const successStories = [
    {
      name: "Sarah Chen",
      handle: "@sarahbeauty",
      followers: "125K",
      niche: "Skincare & Beauty",
      earnings: "$12,450",
      period: "Last 3 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      quote: "ViralReach helped me earn 3x more than other platforms. The performance-based model rewards quality content.",
      brands: ["Glossier", "The Ordinary", "Drunk Elephant"]
    },
    {
      name: "Maya Johnson",
      handle: "@mayaskincare",
      followers: "156K",
      niche: "Skincare Reviews",
      earnings: "$18,200",
      period: "Last 3 months",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      quote: "I love that I only work with brands I genuinely believe in. The AI matching is spot-on!",
      brands: ["CeraVe", "La Roche-Posay", "Neutrogena"]
    },
    {
      name: "Alex Kim",
      handle: "@alexbeauty",
      followers: "67K",
      niche: "Beauty Tutorials",
      earnings: "$8,900",
      period: "Last 3 months",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "The secure payment system gives me peace of mind. I know I'll get paid for my work.",
      brands: ["Fenty Beauty", "Morphe", "ColourPop"]
    }
  ]

  const faqs = [
    {
      question: "How do content + commission payments work?",
      answer: "You get paid a fixed rate for creating content, plus earn commission on sales generated from your posts (coming soon). This gives you multiple ways to earn from your influence."
    },
    {
      question: "What makes ViralReach different from other platforms?",
      answer: "We focus on beauty/skincare, offer content + commission payments, provide AI-powered brand matching, and guarantee secure payments through escrow. Most platforms only pay flat rates."
    },
    {
      question: "How quickly can I start earning?",
      answer: "You can complete your profile in 10 minutes and start browsing opportunities immediately. Most creators get their first campaign within 48 hours."
    },
    {
      question: "What if my content doesn't meet quality standards?",
      answer: "We work with you to optimize content and provide guidance. If content doesn't meet standards, we help troubleshoot and may adjust expectations based on circumstances."
    },
    {
      question: "Do I need a large following to join?",
      answer: "No! We work with creators from 5K to 500K+ followers. Micro-influencers often have higher engagement rates and are highly valued by brands."
    },
    {
      question: "Can I work with multiple brands at once?",
      answer: "Yes! You can manage multiple campaigns simultaneously. Our dashboard helps you track all your partnerships and earnings in one place."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                ViralReach
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/brand" className="text-gray-600 hover:text-gray-900">For Brands</Link>
              <button 
                disabled
                className="text-gray-400 cursor-not-allowed"
                title="Coming soon"
              >
                Sign In
              </button>
            </div>
            <div className="md:hidden">
              <button 
                disabled
                className="text-gray-400 cursor-not-allowed"
                title="Coming soon"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Netflix Style with Video Thumbnails Background */}
      <section className="relative pt-24 pb-16 bg-black overflow-hidden">
        {/* Diagonal Collage Background of Video Thumbnails */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] flex flex-wrap gap-4" style={{ width: '120vw', height: '60vh' }}>
            {[
              // Influencer Faces - Beauty & Skincare Creators
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face", // Beauty influencer
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", // Skincare creator
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", // Beauty guru
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", // Lifestyle influencer
              "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&h=200&fit=crop&crop=face", // Fashion creator
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", // Male beauty creator
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face", // Beauty influencer
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face", // Skincare expert
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face", // Beauty blogger
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face", // Lifestyle creator
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", // Beauty guru
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", // Lifestyle influencer
              "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&h=200&fit=crop&crop=face", // Fashion creator
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", // Male beauty creator
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face", // Beauty influencer
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face", // Skincare expert
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face", // Beauty blogger
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face" // Lifestyle creator
            ].map((imageSrc, i) => (
              <div
                key={i}
                className="w-32 h-32 rounded-xl shadow-lg border-2 border-white/10 overflow-hidden bg-white/10 backdrop-blur-sm relative"
                style={{ aspectRatio: '1/1', minWidth: 0, minHeight: 0 }}
              >
                <img
                  src={imageSrc}
                  alt={`Creator Content ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                  <Video className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                For Beauty & Skincare Creators
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                Monetize Your{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Influence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow">
                Join the only platform that pays you for 
                <span className="font-medium text-purple-200"> content creation plus commission on sales.</span>
                <br />
                Multiple revenue streams from your influence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link 
                href="/#waitlist"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join as Creator
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <button 
                disabled
                className="bg-gray-400 text-white border-2 border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg cursor-not-allowed transition-all duration-300"
                title="Coming soon"
              >
                View Opportunities
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-200"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Content + Commission Pay</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose ViralReach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Creators Choose ViralReach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another influencer platform. We're the only one that rewards content creation and sales generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {creatorBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-pink-500 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <div className="text-sm font-medium text-purple-600">
                  {benefit.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works for Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes and start earning from your first campaign.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  {step.icon}
                  <span className="ml-1">{step.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why ViralReach Beats Other Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our content + commission model and creator-first approach gives you the edge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* ViralReach Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                ViralReach Advantages
              </h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Content + Commission Payments</h4>
                    <p className="text-gray-600">Earn for creating content plus commission on sales (coming soon). Multiple revenue streams from your influence.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Escrow Protection</h4>
                    <p className="text-gray-600">Get paid upfront and securely. No more chasing payments or dealing with late-paying brands.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Brand Matching</h4>
                    <p className="text-gray-600">Perfect brand partnerships that align with your values and audience. No awkward collaborations.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h4>
                    <p className="text-gray-600">Track your performance and earnings live. Know exactly what works for your audience.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Skincare/Beauty Focus</h4>
                    <p className="text-gray-600">Specialized platform with brands that understand your niche. Better opportunities, higher rates.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Other Platforms Problems */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                Problems with Other Platforms
              </h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Flat-Rate Only Payments</h4>
                    <p className="text-gray-600">Same pay regardless of performance. No opportunity to earn from the sales you drive.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Payment Delays</h4>
                    <p className="text-gray-600">Wait weeks or months for payments. Chase brands for money you've already earned.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Poor Brand Matches</h4>
                    <p className="text-gray-600">Random brand partnerships that don't fit your audience or values. Awkward collaborations.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Limited Analytics</h4>
                    <p className="text-gray-600">Basic reporting or no insights at all. No way to track your performance or optimize earnings.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Generic Marketplaces</h4>
                    <p className="text-gray-600">Overcrowded with all types of brands. Hard to find relevant opportunities in your niche.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Platform Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">ViralReach</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Other Platforms</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Payment Model</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Content + Commission</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Flat Rate Only</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Payment Security</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Escrow Protection</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">No Protection</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Brand Matching</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">AI-Powered</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Manual Search</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">Analytics</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Real-Time</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Basic</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium text-gray-900">Niche Focus</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Skincare/Beauty</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Generic</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Campaigns Preview */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse real brand opportunities with different payment models. Choose campaigns that match your style and earning goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Flat Rate Campaign */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=60&h=60&fit=crop&crop=center" 
                    alt="Glow Serum" 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Glow Serum Launch</h3>
                    <p className="text-sm text-gray-500">@glowbeauty</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Flat Rate
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-medium">Instagram Post</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Followers Required:</span>
                  <span className="font-medium">10K - 50K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Content Type:</span>
                  <span className="font-medium">Product Review</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-medium">7 days</span>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-900 p-4 rounded-xl mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">$150</div>
                  <div className="text-sm text-blue-700">Guaranteed payment per post</div>
                </div>
              </div>

              <Link 
                href="/#waitlist"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Hybrid Campaign */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-xl p-8 border-2 border-pink-200 hover:shadow-2xl transition-shadow relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=60&h=60&fit=crop&crop=center" 
                    alt="Hydra Boost" 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hydra Boost Campaign</h3>
                    <p className="text-sm text-gray-500">@hydraskin</p>
                  </div>
                </div>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Hybrid
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-medium">Instagram + TikTok</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Followers Required:</span>
                  <span className="font-medium">25K - 100K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Content Type:</span>
                  <span className="font-medium">Before/After</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-medium">14 days</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-xl mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Base Rate:</span>
                    <span className="font-semibold">$200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>+ $2/click</span>
                    <span className="font-semibold">+ $15/conversion</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 flex justify-between text-lg">
                    <span>Potential:</span>
                    <span className="font-bold">$600+</span>
                  </div>
                </div>
              </div>

              <Link 
                href="/#waitlist"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Performance Only Campaign */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=60&h=60&fit=crop&crop=center" 
                    alt="Vitamin C Serum" 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Vitamin C Boost</h3>
                    <p className="text-sm text-gray-500">@vitamincare</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Performance
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Platform:</span>
                  <span className="font-medium">YouTube + Instagram</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Followers Required:</span>
                  <span className="font-medium">50K+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Content Type:</span>
                  <span className="font-medium">Tutorial Video</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-medium">21 days</span>
                </div>
              </div>

              <div className="bg-green-50 text-green-900 p-4 rounded-xl mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Per Click:</span>
                    <span className="font-semibold">$1.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Per Conversion:</span>
                    <span className="font-semibold">$25</span>
                  </div>
                  <div className="border-t border-green-200 pt-2 flex justify-between text-lg">
                    <span>Potential:</span>
                    <span className="font-bold text-green-600">$800+</span>
                  </div>
                </div>
              </div>

              <Link 
                href="/#waitlist"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              These are sample campaigns. Join our waitlist to access the full creator marketplace with hundreds of real brand opportunities.
            </p>
            <Link 
              href="/#waitlist"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Creator Marketplace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything creators need to know about ViralReach.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
                <button
                  onClick={() => setIsFAQOpen(isFAQOpen === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      isFAQOpen === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {isFAQOpen === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Earn More?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join hundreds of creators who've already discovered the ViralReach difference.
          </p>
          <Link 
            href="/#waitlist"
            className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Join as Creator
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
                ViralReach
              </div>
              <p className="text-gray-400 mb-4">
                The future of performance-based influencer marketing for beauty and skincare creators.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Video className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/brand" className="hover:text-white">For Brands</Link></li>
                <li><a href="#" className="hover:text-white">Creator Success</a></li>
                <li><a href="#" className="hover:text-white">Earnings Calculator</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Creator Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ViralReach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 