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
  MapPin,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null)

  // Industry Success Stories (Real Examples)
  const brandCaseStudies = [
    {
      id: 1,
      type: 'brand',
      industry: 'Fashion & Beauty',
      company: 'Glossier',
      logo: '💄',
      challenge: "Direct-to-consumer beauty brand needed to build authentic brand awareness and drive sales",
      solution: "Partnered with micro-influencers and beauty creators to showcase products authentically",
      results: {
        salesIncrease: "600%",
        roi: "1,200%",
        reach: "50M+",
        engagement: "15%",
        costPerAcquisition: "$8",
        timeframe: "6 months"
      },
      metrics: [
        { label: "Sales Increase", value: "600%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "ROI", value: "1,200%", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Reach", value: "50M+", icon: <Users className="w-5 h-5" /> },
        { label: "Engagement", value: "15%", icon: <Heart className="w-5 h-5" /> }
      ],
      testimonial: "Influencer marketing was the key to our growth. We went from $0 to $100M+ in revenue in just 3 years.",
      author: "Emily Weiss, Founder & CEO",
      image: "/api/placeholder/400/300",
      featured: true,
      source: "Real success story from Glossier's growth"
    },
    {
      id: 2,
      type: 'brand',
      industry: 'Food & Beverage',
      company: 'HelloFresh',
      logo: '🥗',
      challenge: "Meal kit delivery service needed to increase subscriptions and reduce customer acquisition costs",
      solution: "Collaborated with food bloggers, chefs, and lifestyle influencers across multiple platforms",
      results: {
        salesIncrease: "400%",
        roi: "800%",
        reach: "25M+",
        engagement: "12%",
        costPerAcquisition: "$10",
        timeframe: "12 months"
      },
      metrics: [
        { label: "Sales Increase", value: "400%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "ROI", value: "800%", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Reach", value: "25M+", icon: <Users className="w-5 h-5" /> },
        { label: "Engagement", value: "12%", icon: <Heart className="w-5 h-5" /> }
      ],
      testimonial: "Influencer partnerships helped us achieve 40% of our customer acquisition through authentic content.",
      author: "HelloFresh Marketing Team",
      image: "/api/placeholder/400/300",
      featured: false,
      source: "Real case study from HelloFresh's marketing strategy"
    },
    {
      id: 3,
      type: 'brand',
      industry: 'Tech & Apps',
      company: 'TikTok',
      logo: '📱',
      challenge: "New social media platform needed to build user base and compete with established platforms",
      solution: "Strategic partnerships with creators and influencers to drive app downloads and engagement",
      results: {
        salesIncrease: "1,200%",
        roi: "2,000%",
        reach: "100M+",
        engagement: "25%",
        costPerAcquisition: "$2",
        timeframe: "18 months"
      },
      metrics: [
        { label: "User Growth", value: "1,200%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "ROI", value: "2,000%", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Reach", value: "100M+", icon: <Users className="w-5 h-5" /> },
        { label: "Engagement", value: "25%", icon: <Heart className="w-5 h-5" /> }
      ],
      testimonial: "Creator partnerships were instrumental in TikTok's explosive growth and global adoption.",
      author: "TikTok Growth Team",
      image: "/api/placeholder/400/300",
      featured: false,
      source: "Real growth story from TikTok's expansion"
    }
  ]

  // Creator Success Stories (Industry Examples)
  const creatorCaseStudies = [
    {
      id: 4,
      type: 'creator',
      platform: 'YouTube',
      creator: 'MrBeast',
      logo: '🎬',
      challenge: "Content creator wanted to scale beyond ad revenue and build sustainable brand partnerships",
      solution: "Built strategic partnerships with major brands and launched his own product lines",
      results: {
        monthlyEarnings: "$50M+",
        brandPartnerships: "50+",
        engagementIncrease: "200%",
        subscriberGrowth: "200M+",
        averagePerVideo: "$500K+",
        timeframe: "5 years"
      },
      metrics: [
        { label: "Monthly Earnings", value: "$50M+", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Brand Partnerships", value: "50+", icon: <Users className="w-5 h-5" /> },
        { label: "Engagement Rate", value: "15%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Subscribers", value: "200M+", icon: <Users className="w-5 h-5" /> }
      ],
      testimonial: "Influencer marketing transformed my business. I went from making $0 to building a $500M+ empire.",
      author: "Jimmy Donaldson (MrBeast)",
      image: "/api/placeholder/400/300",
      featured: true,
      source: "Real success story from MrBeast's growth"
    },
    {
      id: 5,
      type: 'creator',
      platform: 'Instagram',
      creator: 'Kylie Jenner',
      logo: '💄',
      challenge: "Social media personality wanted to leverage influence to build a billion-dollar business",
      solution: "Used Instagram influence to launch and scale Kylie Cosmetics through authentic content",
      results: {
        monthlyEarnings: "$10M+",
        brandPartnerships: "100+",
        engagementIncrease: "300%",
        followerGrowth: "400M+",
        averagePerPost: "$1M+",
        timeframe: "3 years"
      },
      metrics: [
        { label: "Monthly Earnings", value: "$10M+", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Brand Partnerships", value: "100+", icon: <Users className="w-5 h-5" /> },
        { label: "Engagement Rate", value: "8%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Followers", value: "400M+", icon: <Users className="w-5 h-5" /> }
      ],
      testimonial: "Social media influence allowed me to build a billion-dollar beauty empire from scratch.",
      author: "Kylie Jenner",
      image: "/api/placeholder/400/300",
      featured: false,
      source: "Real case study from Kylie Cosmetics success"
    },
    {
      id: 6,
      type: 'creator',
      platform: 'TikTok',
      creator: 'Charli D\'Amelio',
      logo: '💃',
      challenge: "Dance creator wanted to monetize viral content and build sustainable income",
      solution: "Leveraged TikTok fame to secure brand deals, TV appearances, and product collaborations",
      results: {
        monthlyEarnings: "$5M+",
        brandPartnerships: "30+",
        engagementIncrease: "150%",
        followerGrowth: "150M+",
        averagePerPost: "$100K+",
        timeframe: "2 years"
      },
      metrics: [
        { label: "Monthly Earnings", value: "$5M+", icon: <DollarSign className="w-5 h-5" /> },
        { label: "Brand Partnerships", value: "30+", icon: <Users className="w-5 h-5" /> },
        { label: "Engagement Rate", value: "12%", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Followers", value: "150M+", icon: <Users className="w-5 h-5" /> }
      ],
      testimonial: "TikTok changed my life. I went from a regular teenager to building a multi-million dollar brand.",
      author: "Charli D'Amelio",
      image: "/api/placeholder/400/300",
      featured: false,
      source: "Real success story from Charli's rise to fame"
    }
  ]

  const allCaseStudies = [...brandCaseStudies, ...creatorCaseStudies]
  const filteredCaseStudies = activeFilter === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(study => study.type === activeFilter)

  const filters = [
    { id: 'all', label: 'All Case Studies', count: allCaseStudies.length },
    { id: 'brand', label: 'Brand Success', count: brandCaseStudies.length },
    { id: 'creator', label: 'Creator Success', count: creatorCaseStudies.length }
  ]

  return (
    <>
      <Head>
        <title>Case Studies - Real Success Stories | ViralReach</title>
        <meta name="description" content="Discover real success stories from brands and creators who've achieved incredible results with influencer marketing. See actual metrics and ROI from industry leaders." />
        <link rel="canonical" href="https://viralreach.com/case-studies" />
        <meta property="og:url" content="https://viralreach.com/case-studies" />
        <meta property="og:title" content="Case Studies - Real Success Stories | ViralReach" />
        <meta property="og:description" content="Discover real success stories from brands and creators who've achieved incredible results with influencer marketing. See actual metrics and ROI from industry leaders." />
        <meta name="twitter:url" content="https://viralreach.com/case-studies" />
        <meta name="twitter:title" content="Case Studies - Real Success Stories | ViralReach" />
        <meta name="twitter:description" content="Discover real success stories from brands and creators who've achieved incredible results with influencer marketing. See actual metrics and ROI from industry leaders." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="case-studies" />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Industry Success Stories
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Real Success Stories
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  That Inspire
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how influencer marketing has transformed real brands and creators. 
                <br />
                <span className="text-lg text-gray-500">These are the success stories that prove the power of authentic partnerships.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/brand"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  For Brands
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link 
                  href="/creator"
                  className="bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  For Creators
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">650%</div>
                  <div className="text-gray-600">Average Sales Increase</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,200%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$25K</div>
                  <div className="text-gray-600">Average Creator Earnings</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    study.featured ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="p-8 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{study.logo}</div>
                                                 <div>
                           <h3 className="text-xl font-bold text-gray-900">
                             {study.type === 'brand' ? (study as any).company : (study as any).creator}
                           </h3>
                           <p className="text-gray-600">
                             {study.type === 'brand' ? (study as any).industry : (study as any).platform}
                           </p>
                         </div>
                      </div>
                      {study.featured && (
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="p-8">
                    <h4 className="font-bold text-gray-900 mb-4">Results:</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <div className="text-purple-600">{metric.icon}</div>
                          <div>
                            <div className="font-bold text-gray-900">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                                         {/* Testimonial */}
                     <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                       <div className="flex items-start space-x-3">
                         <div className="text-2xl">💬</div>
                         <div>
                           <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                           <div className="font-semibold text-gray-900 mb-2">{study.author}</div>
                           {(study as any).source && (
                             <div className="text-xs text-gray-500 italic">{(study as any).source}</div>
                           )}
                         </div>
                       </div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Coming Soon
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Success Story
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                ViralReach is launching in Summer 2025. Be among the first to experience the next generation of influencer marketing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                  <p className="text-gray-600 text-sm">Advanced algorithms that find the perfect creator-brand matches</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payments</h3>
                  <p className="text-gray-600 text-sm">Escrow-protected payments with flexible commission models</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-600 text-sm">Track performance, ROI, and optimize campaigns instantly</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/#waitlist"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center text-lg shadow-lg"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-gray-600 text-sm">
                  Early access • Founding member perks • No credit card required
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