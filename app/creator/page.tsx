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
  Trophy,
  Award,
  Youtube,
  MessageCircle,
  Share2,
  MapPin
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function CreatorPage() {
  const [isFAQOpen, setIsFAQOpen] = useState<number | null>(null)

  // Creator benefits inspired by Upfluence but better
  const creatorBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Earn 2-3x More Than Other Platforms",
      description: "Performance-based payments mean you get paid based on your results, not just your follower count. Better content = higher earnings.",
      stat: "Performance-based pay"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Apply for Premium Brand Opportunities",
      description: "Browse campaigns from real brands and apply for ones that match your content and audience. No more waiting for brands to find you.",
      stat: "Quality brand partnerships"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Get Paid Securely & On Time",
      description: "No more chasing payments or waiting months. Secure escrow ensures you get paid within 7 days of content approval.",
      stat: "Guaranteed payments"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track Your Earnings in Real-Time",
      description: "See exactly how much you earn from each campaign and which content performs best. Optimize your strategy for maximum income.",
      stat: "Real earnings insights"
    }
  ]

  // How it works for creators
  const howItWorks = [
    {
      step: "01",
      title: "Complete Your Profile",
      description: "Showcase your content, audience demographics, and brand values. The better your profile, the more opportunities you get.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      time: "10 minutes"
    },
    {
      step: "02",
      title: "Browse & Apply",
      description: "Find brand campaigns that match your content and audience. Apply with your rates and content ideas.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      time: "Daily opportunities"
    },
    {
      step: "03",
      title: "Create & Earn",
      description: "Get approved by brands, create content, and earn based on your performance. Track your earnings in real-time.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      time: "Start earning immediately"
    }
  ]

  // Success stories with real earnings
  const successStories = [
    {
      name: "Sarah Chen",
      handle: "@sarahbeauty",
      followers: "125K",
      niche: "Skincare & Beauty",
      earnings: "$2,450",
      period: "Last 3 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      quote: "ViralReach helped me earn 3x more than other platforms. I get paid based on my results, not just my follower count.",
      brands: ["Glossier", "The Ordinary", "Drunk Elephant"],
      improvement: "+247%"
    },
    {
      name: "Maya Johnson",
      handle: "@mayaskincare",
      followers: "156K",
      niche: "Skincare Reviews",
      earnings: "$3,200",
      period: "Last 3 months",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      quote: "I love applying for campaigns that match my content. The secure payment system gives me peace of mind.",
      brands: ["CeraVe", "La Roche-Posay", "Neutrogena"],
      improvement: "+189%"
    },
    {
      name: "Alex Kim",
      handle: "@alexbeauty",
      followers: "67K",
      niche: "Beauty Tutorials",
      earnings: "$1,900",
      period: "Last 3 months",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "The platform makes it easy to find brand opportunities that fit my audience. I get paid securely and on time.",
      brands: ["Fenty Beauty", "Morphe", "ColourPop"],
      improvement: "+156%"
    }
  ]

  // Payment models for creators
  const paymentModels = [
    {
      title: "Fixed Pay",
      description: "Get paid a guaranteed amount for your content creation",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      details: ["Guaranteed payment", "Set your own rates", "No platform fees", "Simple and predictable"],
      bestFor: "Creators who want reliable income"
    },
    {
      title: "Performance-Based",
      description: "Earn more when your content drives results",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      details: ["Commission on sales", "Track your performance", "Unlimited earning potential", "Rewards great content"],
      bestFor: "Creators who drive real results"
    },
    {
      title: "Hybrid Model",
      description: "Get base pay plus performance bonuses",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      details: ["Base payment + bonuses", "Best of both worlds", "Flexible structure", "Secure payments"],
      bestFor: "Creators who want security + upside"
    }
  ]

  // Platform comparison for creators
  const comparisonData = [
    {
      feature: "Average Earnings per Post",
      viralreach: "$200-800",
      upfluence: "$50-200",
      impact: "$75-300",
      favor: "$100-400",
      viralreachHighlight: true
    },
    {
      feature: "Platform Commission",
      viralreach: "0%",
      upfluence: "15-30%",
      impact: "20-35%",
      favor: "10-25%",
      viralreachHighlight: true
    },
    {
      feature: "Payment Time",
      viralreach: "7 days",
      upfluence: "30-60 days",
      impact: "45-90 days",
      favor: "21-45 days",
      viralreachHighlight: true
    },
    {
      feature: "Application Process",
      viralreach: "Apply directly",
      upfluence: "Wait for brands",
      impact: "Wait for brands",
      favor: "Wait for brands",
      viralreachHighlight: true
    },
    {
      feature: "Earning Potential",
      viralreach: "Unlimited",
      upfluence: "Capped rates",
      impact: "Capped rates",
      favor: "Capped rates",
      viralreachHighlight: true
    },
    {
      feature: "Payment Protection",
      viralreach: "Escrow system",
      upfluence: "No protection",
      impact: "No protection",
      favor: "No protection",
      viralreachHighlight: true
    }
  ]

  // Creator FAQs
  const faqs = [
    {
      question: "How do I apply for brand opportunities?",
      answer: "Complete your profile, browse available campaigns, and apply with your rates and content ideas. Brands review applications and choose the best fit for their campaigns."
    },
    {
      question: "What if my content doesn't perform well?",
      answer: "With fixed payments, you get paid regardless. With hybrid, you get a base pay plus bonuses. With commission, you only earn when you drive sales - but the potential is unlimited."
    },
    {
      question: "How do you track my performance and earnings?",
      answer: "We integrate with your content platforms to track engagement, clicks, and sales. Our dashboard shows you exactly how much you earn from each campaign in real-time."
    },
    {
      question: "Can I apply for multiple campaigns at once?",
      answer: "Yes! Apply for as many campaigns as you want. Each application is reviewed independently by brands, so you can work with multiple brands simultaneously."
    },
    {
      question: "What's different from other creator platforms?",
      answer: "Other platforms pay you fixed rates regardless of performance. We let you get paid based on results and offer flexible payment models that reward your content quality."
    },
    {
      question: "How quickly can I start earning?",
      answer: "Complete your profile in 10 minutes and start applying for opportunities immediately. Most creators get their first campaign within 48 hours and start earning right away."
    }
  ]

  return (
    <>
      <Head>
        <title>For Creators - ViralReach Influencer Marketing Platform</title>
        <meta name="description" content="Get paid what you're worth as a creator. Earn 2-3x more with performance-based payments, secure escrow, and premium brand opportunities. Join the new generation of influencer marketing." />
        <link rel="canonical" href="https://viralreach.com/creator" />
        <meta property="og:url" content="https://viralreach.com/creator" />
        <meta property="og:title" content="For Creators - ViralReach Influencer Marketing Platform" />
        <meta property="og:description" content="Get paid what you're worth as a creator. Earn 2-3x more with performance-based payments, secure escrow, and premium brand opportunities." />
        <meta name="twitter:url" content="https://viralreach.com/creator" />
        <meta name="twitter:title" content="For Creators - ViralReach Influencer Marketing Platform" />
        <meta name="twitter:description" content="Get paid what you're worth as a creator. Earn 2-3x more with performance-based payments, secure escrow, and premium brand opportunities." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="creator" />

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
                🌟 New Platform Launch - Limited Time Offer
                <span className="ml-3 inline-flex items-center bg-white/20 px-2 py-1 rounded-full text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  0% Fees
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Get Paid What You're
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Actually Worth
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-gray-700">
                  Based on Your Results
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join our <span className="font-bold text-purple-600 text-2xl">new platform</span> and be among the first creators to earn 2-3x more
                <br />
                <span className="text-lg text-gray-500">
                  <span className="font-bold text-green-600">0% platform fees for early adopters</span> • Performance-based payments • Secure escrow
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/#waitlist"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Start Earning More
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <button className="bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Watch Creator Demo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>0% Platform Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Early Adopter Benefits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Start Earning in 48h</span>
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
                Why Join Our New Platform?
                <span className="ml-3 inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  Limited Time
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                New Platform Built for
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creator Success
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're launching a new platform that puts creators first. Join early and get exclusive benefits that won't be available later.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">0% Platform Fees Forever</h3>
                    <p className="text-gray-600">Early adopters get 0% platform fees for life. Later users will pay 15-30% like other platforms</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Priority Brand Matching</h3>
                    <p className="text-gray-600">Early adopters get first access to premium brand opportunities and exclusive campaigns</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Founder Rates</h3>
                    <p className="text-gray-600">Set higher rates as an early adopter. Later users will compete with more creators</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Platform Support</h3>
                    <p className="text-gray-600">Get personal support from our team. Later users will use automated systems</p>
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
                    <h3 className="text-xl font-bold text-gray-900">Creator Dashboard</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      +247%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">This Month</div>
                          <div className="text-sm text-gray-600">3 campaigns</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">$2,450</div>
                        <div className="text-sm text-gray-600">Earnings</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Performance</div>
                          <div className="text-sm text-gray-600">8.7% engagement</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-pink-600">+189%</div>
                        <div className="text-sm text-gray-600">vs last month</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Next Payment</div>
                          <div className="text-sm text-gray-600">$850 pending</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">3 days</div>
                        <div className="text-sm text-gray-600">Until payout</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Creator Benefits Section - Matching Main Page Style */}
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
                Creator Tools That
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Actually Work
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional tools that help you earn more and grow your creator business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {creatorBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {benefit.stat}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
                Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From profile creation to earning - everything you need to succeed
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
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
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{step.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section - Matching Main Page Style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Real Creator Success Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Be Among the First Creators to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Earn More
                </span>
                <span className="inline-flex items-center ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <Clock className="w-4 h-4 mr-2" />
                  Limited Time
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our new platform and be among the first creators to earn 2-3x more than other platforms. 
                <span className="font-bold text-green-600">0% platform fees for early adopters!</span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Early Adopter Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Early Adopter Perks</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">0% platform fees forever</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Priority brand matching</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Exclusive founder rates</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Direct platform support</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sign Up Now CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Start Earning Today</h3>
                  <p className="text-gray-600 mb-6">
                    Join now and be among the first creators to experience our platform. 
                    Set up your profile in 10 minutes and start applying for opportunities immediately.
                  </p>
                  <Link 
                    href="/#waitlist"
                    className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <p className="text-sm text-gray-500 mt-3">
                    No credit card required • Start earning in 48 hours
                  </p>
                </div>
              </motion.div>

              {/* Limited Time Offer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Limited Time Offer</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Free platform access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">No monthly fees</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Premium features included</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Lifetime benefits</span>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-orange-100 rounded-xl">
                    <p className="text-sm font-semibold text-orange-800">
                      ⏰ This offer won't last long!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Website Section - New Feature */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Your Professional Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Your Own Professional
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Portfolio Website
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stand out from the crowd with a beautiful, professional portfolio that showcases your best work and attracts premium brand opportunities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Features */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Portfolio Website</h3>
                    <p className="text-gray-600">Get a beautiful, customizable website that showcases your content, stats, and brand collaborations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Creator Badge</h3>
                    <p className="text-gray-600">Build trust with brands using our verified badge system that proves your authenticity and quality</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Live Performance Stats</h3>
                    <p className="text-gray-600">Display your real-time engagement rates, follower growth, and campaign performance to attract better opportunities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Brand Contact</h3>
                    <p className="text-gray-600">Let brands reach out to you directly through your portfolio with built-in contact forms and booking systems</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-gray-900 mb-3">Portfolio Features Include:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Custom domain</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Content galleries</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Brand testimonials</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Analytics dashboard</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Booking calendar</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>SEO optimized</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Portfolio Preview */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Mock Demo Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </div>
                </div>

                {/* Portfolio Website Preview */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-3 py-1 text-sm text-gray-600 text-center">
                      sarahchen.viralreach.com
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end space-x-4">
                        <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">SC</span>
                        </div>
                        <div className="flex-1 text-white">
                          <h2 className="text-2xl font-bold">Sarah Chen</h2>
                          <p className="text-purple-100">Beauty & Lifestyle Creator</p>
                          <div className="flex items-center mt-2">
                            <span className="text-sm text-purple-100">@sarahbeauty</span>
                            <span className="ml-3 inline-flex items-center bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified Creator
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">125K</div>
                        <div className="text-sm text-gray-600">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600">8.7%</div>
                        <div className="text-sm text-gray-600">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">$2,450</div>
                        <div className="text-sm text-gray-600">Avg. Rate</div>
                      </div>
                    </div>

                    {/* Featured Work */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Collaborations</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">G</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Glossier</div>
                              <div className="text-sm text-gray-600">2.1M views</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">T</span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">The Ordinary</div>
                              <div className="text-sm text-gray-600">1.8M views</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">Ready to collaborate?</h4>
                          <p className="text-sm text-gray-600">Get in touch for brand partnerships</p>
                        </div>
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Indicator */}
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500 italic">
                    ✨ This is a preview of your professional portfolio website
                  </p>
                </div>
              </motion.div>
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
                Creator-first platform that actually pays you fairly
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
                How You Get Paid
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose How You Want to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Earn Money
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pick the earning model that matches your content style and income goals
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

        {/* FAQ Section - Matching Main Page Style */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
                  Know About Earning
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
                Don't Miss This Opportunity!
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join our new platform now and get exclusive early adopter benefits. 
                <span className="font-bold">0% platform fees won't last forever!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/#waitlist"
                  className="bg-white text-purple-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg shadow-lg"
                >
                  Start Earning More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-purple-100 text-sm">
                  No credit card required • Start earning in 48 hours
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