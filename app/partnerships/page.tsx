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
  ArrowUpRight,
  Repeat,
  CalendarDays,
  TrendingDown,
  Users2,
  Briefcase,
  Building2,
  UserCheck,
  UserPlus
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function PartnershipsPage() {
  const [activeTab, setActiveTab] = useState('brands')
  const [selectedPartnership, setSelectedPartnership] = useState<number | null>(null)

  // Partnership benefits for brands
  const brandPartnershipBenefits = [
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Consistent Brand Voice",
      description: "Build authentic relationships with creators who truly understand and represent your brand values",
      stat: "3x more authentic content"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictable ROI",
      description: "Long-term partnerships deliver 5x better ROI than one-off campaigns through sustained audience trust",
      stat: "5x better ROI"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Get a dedicated relationship manager to coordinate campaigns and optimize performance",
      stat: "Personal relationship manager"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Exclusive Access",
      description: "Access to premium creators who prefer long-term partnerships over transactional campaigns",
      stat: "Premium creator access"
    }
  ]

  // Partnership benefits for creators
  const creatorPartnershipBenefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Stable Monthly Income",
      description: "Guaranteed monthly payments plus performance bonuses for consistent, reliable earnings",
      stat: "Guaranteed monthly income"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Equity",
      description: "Build lasting relationships with brands and become their authentic voice in your community",
      stat: "Brand ambassador status"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Access to exclusive opportunities, higher rates, and professional development support",
      stat: "Career advancement"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Creative Freedom",
      description: "More creative control and flexibility when brands trust you as a long-term partner",
      stat: "Enhanced creative control"
    }
  ]

  // Partnership types
  const partnershipTypes = [
    {
      title: "Brand Ambassador Program",
      duration: "6-12 months",
      description: "Exclusive partnership where creators become authentic brand representatives",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: [
        "Exclusive brand access",
        "Higher monthly retainers",
        "Performance bonuses",
        "Brand equity participation",
        "Dedicated support team"
      ],
      bestFor: "Established creators with strong brand alignment"
    },
    {
      title: "Strategic Partnership",
      duration: "3-6 months",
      description: "Focused collaboration on specific campaigns or product launches",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      features: [
        "Campaign-focused collaboration",
        "Performance-based bonuses",
        "Creative input on campaigns",
        "Priority brand access",
        "Relationship manager support"
      ],
      bestFor: "Creators who drive measurable results"
    },
    {
      title: "Content Creator Partnership",
      duration: "1-3 months",
      description: "Regular content creation with consistent brand messaging",
      icon: <Camera className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Regular content creation",
        "Consistent monthly payments",
        "Brand guidelines support",
        "Performance tracking",
        "Flexible content schedule"
      ],
      bestFor: "Creators who produce consistent quality content"
    }
  ]

  // Industry examples and projected results
  const industryExamples = [
    {
      brand: "Industry Example: Glossier",
      creator: "Beauty Influencer Partnership",
      duration: "8 months",
      results: {
        salesIncrease: "400%",
        engagement: "25%",
        roi: "800%",
        brandLoyalty: "3x"
      },
      quote: "Long-term partnerships in beauty typically drive 3-5x better ROI than one-off campaigns through sustained audience trust.",
      source: "Industry research data"
    },
    {
      brand: "Industry Example: HelloFresh",
      creator: "Lifestyle Creator Partnership",
      duration: "12 months",
      results: {
        salesIncrease: "600%",
        engagement: "18%",
        roi: "1200%",
        brandLoyalty: "4x"
      },
      quote: "Food delivery brands see 4-6x better customer lifetime value from long-term creator partnerships.",
      source: "Industry research data"
    },
    {
      brand: "Industry Example: Peloton",
      creator: "Fitness Influencer Partnership",
      duration: "6 months",
      results: {
        salesIncrease: "300%",
        engagement: "22%",
        roi: "600%",
        brandLoyalty: "2.5x"
      },
      quote: "Fitness brands achieve 2-4x better conversion rates through authentic, long-term creator relationships.",
      source: "Industry research data"
    }
  ]

  // How partnerships work
  const partnershipSteps = [
    {
      step: "01",
      title: "Match & Connect",
      description: "Our AI matches you with creators/brands based on long-term compatibility and shared values",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      time: "1-2 weeks"
    },
    {
      step: "02",
      title: "Partnership Planning",
      description: "Work with your dedicated relationship manager to define partnership terms and goals",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      time: "1 week"
    },
    {
      step: "03",
      title: "Launch & Execute",
      description: "Begin your partnership with ongoing support, performance tracking, and optimization",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      time: "Ongoing"
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description: "Continuously optimize performance and expand partnership opportunities",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      time: "Monthly reviews"
    }
  ]

  // Pricing comparison
  const pricingComparison = [
    {
      feature: "Monthly Platform Fee",
      oneOff: "$25-49",
      partnership: "$49-99",
      partnershipHighlight: true
    },
    {
      feature: "Creator Commission",
      oneOff: "10%",
      partnership: "5%",
      partnershipHighlight: true
    },
    {
      feature: "Relationship Manager",
      oneOff: "No",
      partnership: "Yes",
      partnershipHighlight: true
    },
    {
      feature: "Performance Tracking",
      oneOff: "Basic",
      partnership: "Advanced",
      partnershipHighlight: true
    },
    {
      feature: "Creator Access",
      oneOff: "Standard",
      partnership: "Premium",
      partnershipHighlight: true
    },
    {
      feature: "Contract Flexibility",
      oneOff: "Fixed terms",
      partnership: "Custom terms",
      partnershipHighlight: true
    }
  ]

  return (
    <>
      <Head>
        <title>Long-term Partnerships - ViralReach</title>
        <meta name="description" content="Build lasting relationships with creators and brands. Long-term partnerships deliver 5x better ROI through authentic, sustained collaborations." />
        <link rel="canonical" href="https://viralreach.com/partnerships" />
        <meta property="og:url" content="https://viralreach.com/partnerships" />
        <meta property="og:title" content="Long-term Partnerships - ViralReach" />
        <meta property="og:description" content="Build lasting relationships with creators and brands. Long-term partnerships deliver 5x better ROI through authentic, sustained collaborations." />
        <meta name="twitter:url" content="https://viralreach.com/partnerships" />
        <meta name="twitter:title" content="Long-term Partnerships - ViralReach" />
        <meta name="twitter:description" content="Build lasting relationships with creators and brands. Long-term partnerships deliver 5x better ROI through authentic, sustained collaborations." />
      </Head>
      
      <div className="min-h-screen bg-white">
        <Navbar currentPage="partnerships" />

        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4 mr-2" />
                Long-term Partnerships
              </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Build Lasting
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Relationships
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl lg:text-6xl text-gray-700">
                    Not Just Campaigns
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                  Move beyond transactional campaigns. Build authentic partnerships that deliver 
                  <span className="font-bold text-purple-600"> 5x better ROI </span>
                  through sustained trust and authentic content.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button 
                    onClick={() => setActiveTab('brands')}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      activeTab === 'brands' 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                        : 'bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    For Brands
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('creators')}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      activeTab === 'creators' 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                        : 'bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    For Creators
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>5x Better ROI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>Authentic Relationships</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>Dedicated Support</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why Long-term Partnerships?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {activeTab === 'brands' ? 'Brand Benefits' : 'Creator Benefits'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {activeTab === 'brands' 
                  ? 'Build authentic relationships that drive sustainable growth and brand loyalty'
                  : 'Create stable income streams while building meaningful brand relationships'
                }
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(activeTab === 'brands' ? brandPartnershipBenefits : creatorPartnershipBenefits).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {benefit.stat}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4 mr-2" />
                Partnership Types
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Partnership
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Structure
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible partnership options designed to match your goals and timeline
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-2 rounded-full mb-6">
                    {type.duration}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                    <div className="text-sm text-purple-800 font-medium">
                      <span className="font-bold">Best for:</span> {type.bestFor}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
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
                How Partnerships Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple 4-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial matching to ongoing optimization, we make long-term partnerships effortless
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-sm text-blue-800 font-medium">✓ {step.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4 mr-2" />
                Industry Examples & Projections
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Potential Results from
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Long-term Partnerships
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on industry research, long-term partnerships typically deliver 3-5x better ROI than one-off campaigns
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryExamples.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.brand}</h3>
                      <p className="text-gray-600">with {story.creator}</p>
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {story.duration}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">{story.results.salesIncrease}</div>
                      <div className="text-sm text-gray-600">Sales Increase</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">{story.results.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">{story.results.engagement}</div>
                      <div className="text-sm text-gray-600">Engagement</div>
                    </div>
                    <div className="text-center p-4 bg-pink-50 rounded-xl">
                      <div className="text-2xl font-bold text-pink-600">{story.results.brandLoyalty}</div>
                      <div className="text-sm text-gray-600">Brand Loyalty</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-4">
                    "{story.quote}"
                  </blockquote>
                  <div className="text-sm text-gray-600 font-medium">
                    — {story.source}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Value Comparison
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Partnerships
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Deliver More Value
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how long-term partnerships provide better value than one-off campaigns
              </p>
            </motion.div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-6 border-b border-gray-200">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Feature</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">One-off Campaigns</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-purple-600">Partnerships</h3>
                </div>
              </div>
              
              {pricingComparison.map((item, index) => (
                <div key={index} className={`grid grid-cols-3 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="flex items-center">
                    <span className="text-gray-900 font-medium">{item.feature}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-gray-600">{item.oneOff}</span>
                  </div>
                  <div className="text-center">
                    <span className={`font-semibold ${item.partnershipHighlight ? 'text-purple-600' : 'text-gray-900'}`}>
                      {item.partnership}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4 mr-2" />
                Ready to Build Lasting Partnerships?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Your Partnership
                <br />
                <span className="text-yellow-300">Journey Today</span>
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join our waitlist to get early access to our partnership platform and exclusive founding member benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#waitlist"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Exclusive Founding Member Perks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Early Access to Partnership Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Dedicated Relationship Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
} 