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
  Video
} from 'lucide-react'
import Navbar from '../components/Navbar'


export default function BrandPage() {
  const [isFAQOpen, setIsFAQOpen] = useState<number | null>(null)

  const brandBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Eliminate Campaign Waste",
      description: "Stop paying $500 for posts that generate $0 in sales. Our commission model lets you pay only when customers buy.",
      stat: "Zero upfront costs"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictable ROI",
      description: "Know exactly what you'll pay and what results to expect. Set your own budget and performance targets.",
      stat: "Budget control"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Performance Guarantees",
      description: "If campaigns don't meet your targets, we work to optimize or provide credits. No more wasted marketing spend.",
      stat: "Risk-free campaigns"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real Business Results",
      description: "Track actual sales, conversions, and revenue - not just likes and comments. See the real impact on your business.",
      stat: "Revenue-focused"
    }
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Risk Level",
      description: "Fixed payments for predictable budgets, hybrid for balanced risk, or commission for performance-only. Match your business goals.",
      icon: <Target className="w-6 h-6" />,
      time: "2 minutes"
    },
    {
      step: "2",
      title: "Set Your Budget & Targets",
      description: "Define your campaign budget, sales targets, and ROI goals. Our platform matches you with creators who can deliver.",
      icon: <Eye className="w-6 h-6" />,
      time: "5 minutes"
    },
    {
      step: "3",
      title: "Launch & Track Revenue",
      description: "Monitor actual sales and conversions in real-time. Pay according to your chosen model - only for results that matter.",
      icon: <TrendingUp className="w-6 h-6" />,
      time: "Real-time"
    }
  ]

  const creators = [
    {
      name: "Sarah Chen",
      handle: "@sarahbeauty",
      platform: "Instagram",
      followers: "125K",
      niche: "Skincare & Beauty",
      rate: "$50-5000+",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
      engagement: "4.2%",
      verified: true
    },
    {
      name: "Maya Johnson",
      handle: "@mayaskincare",
      platform: "YouTube",
      followers: "156K",
      niche: "Skincare Reviews",
      rate: "$50-5000+",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
      engagement: "3.8%",
      verified: true
    },
    {
      name: "Alex Kim",
      handle: "@alexbeauty",
      platform: "Instagram",
      followers: "67K",
      niche: "Beauty Tutorials",
      rate: "$50-5000+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 4.7,
      engagement: "4.5%",
      verified: true
    }
  ]

  const faqs = [
    {
      question: "How do I know which payment model is right for my business?",
      answer: "Consider your business stage: New products → Commission model (zero risk). Growing business → Hybrid model (balanced). Established brand → Fixed payments (predictable). Our quiz helps you choose based on your goals and budget."
    },
    {
      question: "What if my campaigns don't generate sales?",
      answer: "With our commission model, you pay nothing if there are no sales. With hybrid, you get guaranteed content plus performance bonuses. We offer performance guarantees and work to optimize underperforming campaigns."
    },
    {
      question: "How do you track actual sales and conversions?",
      answer: "We integrate with your e-commerce platform to track real sales, not just clicks. Our system monitors actual revenue generated from influencer campaigns, giving you true ROI data."
    },
    {
      question: "Can I switch payment models as my business grows?",
      answer: "Absolutely! Start with commission for testing, switch to hybrid for scaling, and use fixed payments for brand awareness. Our platform adapts to your business evolution."
    },
    {
      question: "What's different from other influencer platforms?",
      answer: "Other platforms charge upfront regardless of results. We align costs with outcomes. You choose how to pay - only for results, guaranteed content, or performance bonuses. Real ROI tracking, not vanity metrics."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="brand" />

      {/* Hero Section - Brand-Focused */}
      <section className="relative pt-24 pb-16 bg-black overflow-hidden">
        {/* Background with brand-focused imagery */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] flex flex-wrap gap-4" style={{ width: '120vw', height: '60vh' }}>
            {[
              // Brand-focused images - marketing campaigns, analytics, ROI charts
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center", // Marketing analytics
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center", // Business charts
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop&crop=center", // ROI tracking
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&crop=center", // Marketing strategy
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center", // Business metrics
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center", // Analytics dashboard
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop&crop=center", // Performance tracking
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&crop=center", // Campaign planning
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center", // Business growth
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center", // Marketing ROI
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop&crop=center", // Conversion tracking
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&crop=center", // Brand strategy
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center", // Business metrics
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center", // Marketing analytics
              "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop&crop=center", // Performance data
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop&crop=center", // Campaign results
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center", // Business growth
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center" // Marketing success
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Marketing Analytics ${i + 1}`}
                className="w-32 h-32 object-cover rounded-xl shadow-lg border-2 border-white/10 opacity-90"
                style={{ aspectRatio: '1/1', minWidth: 0, minHeight: 0 }}
              />
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
                <Globe className="w-4 h-4 mr-2" />
                🌍 For Brands - Launching Globally
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                Stop Wasting Money on
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Influencer Campaigns
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow">
                Traditional platforms force you to pay upfront with no guarantees. 
                <span className="font-medium text-purple-200"> Choose how you pay - fixed, hybrid, or commission.</span>
                <br />
                <span className="text-lg text-gray-300">Only pay for results that drive your business.</span>
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
                Start Your Campaign
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                href="/#waitlist"
                className="bg-white text-purple-600 border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                See Payment Models
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-200"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Upfront Costs (Commission Model)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Set Your Own Budget</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Performance Guarantees</span>
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
              Solve Your Biggest Influencer Marketing Problems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional platforms waste your budget on vanity metrics. We focus on what matters - actual business results and ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandBenefits.map((benefit, index) => (
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
              How It Works for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From campaign planning to revenue tracking - everything designed around your business goals and budget.
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

      {/* Choose Your Payment Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Business Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Align your influencer marketing costs with your business goals and risk tolerance
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Whether you're launching a new product or scaling an existing brand - we have a model that fits your strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fixed Payments Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  For Established Brands
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fixed Payments</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for brands with predictable budgets who want guaranteed content delivery and brand awareness.
                </p>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
                  Best for: Brand awareness campaigns
                </div>
              </div>
              <Link 
                href="/#waitlist"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Hybrid Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  For Growing Businesses
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hybrid Model</h3>
                <p className="text-gray-600 mb-4">
                  Balance guaranteed content with performance incentives. Motivate creators to drive sales while reducing risk.
                </p>
                <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg font-semibold text-sm">
                  Best for: Product launches & scaling
                </div>
              </div>
              <Link 
                href="/#waitlist"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Sales Commission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  For Performance-Focused
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sales Commission</h3>
                <p className="text-gray-600 mb-4">
                  Zero upfront costs. Pay only when customers buy. Perfect for new products and ROI-focused campaigns.
                </p>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-semibold text-sm">
                  Best for: New products & testing
                </div>
              </div>
              <Link 
                href="/#waitlist"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Flexibility Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Adapt to Your Business Growth
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Start with one model and switch as your business evolves. Whether you're testing new products or scaling successful campaigns, 
                <span className="font-semibold text-purple-600"> our platform grows with your business strategy.</span>
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">🚀</div>
                  <div className="text-gray-700 font-semibold">Test New Products</div>
                  <div className="text-sm text-gray-500">Commission model for zero risk</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">📈</div>
                  <div className="text-gray-700 font-semibold">Scale Successful Campaigns</div>
                  <div className="text-sm text-gray-500">Hybrid model for growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">🏢</div>
                  <div className="text-gray-700 font-semibold">Build Brand Awareness</div>
                  <div className="text-sm text-gray-500">Fixed payments for consistency</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creator Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global Creator Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a global network of creators ready to promote your brand with flexible payment models.
            </p>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-12 max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join the Global Launch
              </h3>
              <p className="text-gray-600 mb-6">
                We're launching globally and building a network of creators worldwide. 
                Join our waitlist to get early access and help shape the platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#waitlist"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Join Waitlist
                </Link>
                <Link 
                  href="/creator"
                  className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
                >
                  For Creators
                </Link>
              </div>
            </motion.div>
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
              Everything brands need to know about ViralReach.
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
            Stop Wasting Money on Influencer Marketing
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Choose your business model and start campaigns that drive actual revenue, not just likes.
          </p>
          <Link 
            href="/#waitlist"
            className="inline-flex items-center bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Campaign
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
                The future of flexible payment models for influencer marketing. Choose fixed, hybrid, or commission.
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
                <li><Link href="/creator" className="hover:text-white">For Creators</Link></li>
                <li><a href="#" className="hover:text-white">Payment Models</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ViralReach. Empowering flexible influence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 