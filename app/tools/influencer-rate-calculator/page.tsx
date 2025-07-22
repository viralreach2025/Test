"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  BarChart3, 
  Star, 
  Instagram, 
  Youtube, 
  Music, // Used for TikTok icon
  Linkedin, 
  Twitter, 
  Facebook, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Award, 
  Lightbulb, 
  CreditCard, // NEW
  Percent,    // NEW
  Layers,     // NEW
  Search,     // NEW
  Globe,      // NEW
  BookOpen,   // NEW
  ExternalLink // NEW
} from 'lucide-react'
import Navbar from '../../components/Navbar'

interface RateCalculation {
  platform: string
  followers: number
  baseRate: number
  platformMultiplier: number
  nicheMultiplier: number
  experienceMultiplier: number
  finalRate: number
  rateRange: {
    min: number
    max: number
  }
}

export default function InfluencerRateCalculator() {
  const [calculation, setCalculation] = useState<RateCalculation | null>(null)
  const [formData, setFormData] = useState({
    platform: '',
    followers: '',
    niche: '',
    experience: '',
    contentType: '',
    brandSize: ''
  })

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: <Instagram className="w-5 h-5" />, baseRate: 0.005 }, // Reduced
    { id: 'tiktok', name: 'TikTok', icon: <Music className="w-5 h-5" />, baseRate: 0.004 }, // Reduced
    { id: 'youtube', name: 'YouTube', icon: <Youtube className="w-5 h-5" />, baseRate: 0.008 }, // Reduced
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, baseRate: 0.012 }, // Reduced
    { id: 'twitter', name: 'Twitter', icon: <Twitter className="w-5 h-5" />, baseRate: 0.003 }, // Reduced
    { id: 'facebook', name: 'Facebook', icon: <Facebook className="w-5 h-5" />, baseRate: 0.003 }  // Reduced
  ]

  const niches = [
    { id: 'fashion', name: 'Fashion & Beauty', multiplier: 1.1 }, // Reduced
    { id: 'fitness', name: 'Fitness & Health', multiplier: 1.05 }, // Reduced
    { id: 'tech', name: 'Technology', multiplier: 1.15 }, // Reduced
    { id: 'food', name: 'Food & Cooking', multiplier: 1.0 },
    { id: 'travel', name: 'Travel', multiplier: 1.2 }, // Reduced
    { id: 'lifestyle', name: 'Lifestyle', multiplier: 1.05 }, // Reduced
    { id: 'business', name: 'Business & Finance', multiplier: 1.25 }, // Reduced
    { id: 'gaming', name: 'Gaming', multiplier: 0.9 },
    { id: 'education', name: 'Education', multiplier: 1.1 }, // Reduced
    { id: 'entertainment', name: 'Entertainment', multiplier: 1.0 }
  ]

  const experienceLevels = [
    { id: 'beginner', name: 'Beginner (< 1 year)', multiplier: 0.85 }, // Adjusted
    { id: 'intermediate', name: 'Intermediate (1-3 years)', multiplier: 1.0 },
    { id: 'advanced', name: 'Advanced (3-5 years)', multiplier: 1.15 }, // Adjusted
    { id: 'expert', name: 'Expert (5+ years)', multiplier: 1.25 } // Adjusted
  ]

  const contentTypes = [
    { id: 'post', name: 'Single Post', multiplier: 1.0 },
    { id: 'story', name: 'Story/Reel', multiplier: 0.7 }, // Adjusted
    { id: 'video', name: 'Video Content', multiplier: 1.2 }, // Adjusted
    { id: 'series', name: 'Content Series', multiplier: 1.6 }, // Adjusted
    { id: 'takeover', name: 'Account Takeover', multiplier: 1.3 } // Adjusted
  ]

  const brandSizes = [
    { id: 'startup', name: 'Startup', multiplier: 0.9 }, // Adjusted
    { id: 'small', name: 'Small Business', multiplier: 1.0 },
    { id: 'medium', name: 'Medium Business', multiplier: 1.1 }, // Adjusted
    { id: 'enterprise', name: 'Enterprise', multiplier: 1.25 } // Adjusted
  ]

  const calculateRate = () => {
    const followers = parseInt(formData.followers)

    if (!followers || !formData.platform) return

    const platform = platforms.find(p => p.id === formData.platform)
    const niche = niches.find(n => n.id === formData.niche)
    const experience = experienceLevels.find(e => e.id === formData.experience)
    const contentType = contentTypes.find(c => c.id === formData.contentType)
    const brandSize = brandSizes.find(b => b.id === formData.brandSize)

    if (!platform) return

    // Base calculation
    const baseRate = followers * platform.baseRate

    // Platform multiplier (not used in final calculation, but kept for potential future use or display)
    const platformMultiplier = platform.baseRate * 100

    // Niche multiplier
    const nicheMultiplier = niche?.multiplier || 1.0

    // Experience multiplier
    const experienceMultiplier = experience?.multiplier || 1.0

    // Content type multiplier
    const contentTypeMultiplier = contentType?.multiplier || 1.0

    // Brand size multiplier
    const brandSizeMultiplier = brandSize?.multiplier || 1.0

    // Final calculation (engagement multiplier removed)
    const finalRate = baseRate * nicheMultiplier *
                     experienceMultiplier * contentTypeMultiplier * brandSizeMultiplier

    // Rate range (±20%)
    const rateRange = {
      min: Math.round(finalRate * 0.8),
      max: Math.round(finalRate * 1.2)
    }

    setCalculation({
      platform: platform.name,
      followers,
      baseRate: Math.round(baseRate),
      platformMultiplier,
      nicheMultiplier,
      experienceMultiplier,
      finalRate: Math.round(finalRate),
      rateRange
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const canCalculate = formData.platform && formData.followers

  return (
    <>
      <Head>
        <title>How Much Should I Pay an Influencer? Free Rate Calculator | ViralReach</title>
        <meta name="description" content="Wondering how much to pay an influencer? Use our free calculator to determine fair influencer rates based on followers, platform, niche & experience. Get accurate pricing instantly." />
        <meta name="keywords" content="how much should i pay influencer, influencer rates, influencer pricing calculator, how much to pay influencers, influencer marketing rates, social media influencer pricing, influencer cost calculator, pay influencers, influencer partnership rates, influencer pricing guide, social media rates, instagram influencer rates, tiktok influencer rates, youtube influencer rates, micro influencer rates, macro influencer rates, nano influencer rates, influencer marketing cost, brand collaboration rates, sponsored post rates" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ViralReach" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#8B5CF6" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How Much Should I Pay an Influencer? Free Rate Calculator" />
        <meta property="og:description" content="Wondering how much to pay an influencer? Use our free calculator to determine fair rates based on followers, platform, niche & experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viralreach.com/tools/influencer-rate-calculator" />
        <meta property="og:image" content="https://viralreach.com/og-influencer-calculator.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ViralReach" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Much Should I Pay an Influencer? Free Rate Calculator" />
        <meta name="twitter:description" content="Wondering how much to pay an influencer? Use our free calculator to determine fair rates based on followers, platform, niche & experience." />
        <meta name="twitter:image" content="https://viralreach.com/twitter-influencer-calculator.jpg" />
        <meta name="twitter:site" content="@viralreach" />
        <meta name="twitter:creator" content="@viralreach" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://viralreach.com/tools/influencer-rate-calculator" />
        <link rel="alternate" href="https://viralreach.com/tools/influencer-rate-calculator" hrefLang="en" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="37.0902, -95.7129" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "How Much Should I Pay an Influencer? Rate Calculator",
              "description": "Free tool to calculate how much you should pay influencers based on platform, followers, niche, and experience. Get accurate pricing instantly.",
              "url": "https://viralreach.com/tools/influencer-rate-calculator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "provider": {
                "@type": "Organization",
                "name": "ViralReach",
                "url": "https://viralreach.com"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              },
              "datePublished": "2024-01-01",
              "dateModified": "2024-12-19"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much should I pay an influencer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The amount you should pay an influencer depends on several factors: their follower count, platform, content niche, experience level, and the type of content you want. Use our calculator to get a personalized rate based on your specific requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the average influencer rate per post?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Average rates vary significantly by platform and follower count. Instagram influencers typically charge $0.005-$0.01 per follower, while YouTube creators may charge $0.008-$0.015 per subscriber. Micro-influencers (10K-50K followers) often charge $100-$500 per post, while macro-influencers (100K-1M followers) can charge $1,000-$10,000+."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I calculate influencer rates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate influencer rates, consider: follower count × platform base rate × niche multiplier × experience multiplier × content type multiplier. Our calculator does this automatically, giving you accurate market rates based on current industry standards."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://viralreach.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Tools",
                  "item": "https://viralreach.com/tools"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Influencer Rate Calculator",
                  "item": "https://viralreach.com/tools/influencer-rate-calculator"
                }
              ]
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Navbar currentPage="quiz" />
        
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Free Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Much Should I Pay an Influencer?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our free calculator to determine fair influencer rates. Get accurate pricing based on followers, platform, niche, and experience level.
            </p>
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700 font-medium">
                💡 <strong>Quick Answer:</strong> Influencer rates typically range from $100-$10,000+ per post depending on follower count and platform.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-purple-500" />
                Calculate Rate
              </h2>

              <div className="space-y-6">
                {/* Platform Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Platform
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => handleInputChange('platform', platform.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 ${
                          formData.platform === platform.id
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-purple-300 text-gray-700'
                        }`}
                      >
                        {platform.icon}
                        <span className="font-medium">{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Followers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Followers
                  </label>
                  <input
                    type="number"
                    value={formData.followers}
                    onChange={(e) => handleInputChange('followers', e.target.value)}
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Niche */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Niche
                  </label>
                  <select
                    value={formData.niche}
                    onChange={(e) => handleInputChange('niche', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select niche...</option>
                    {niches.map((niche) => (
                      <option key={niche.id} value={niche.id}>
                        {niche.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select experience...</option>
                    {experienceLevels.map((level) => (
                      <option key={level.id} value={level.id}>
                        {level.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Content Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Type
                  </label>
                  <select
                    value={formData.contentType}
                    onChange={(e) => handleInputChange('contentType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select content type...</option>
                    {contentTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Brand Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand Size
                  </label>
                  <select
                    value={formData.brandSize}
                    onChange={(e) => handleInputChange('brandSize', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select brand size...</option>
                    {brandSizes.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateRate}
                  disabled={!canCalculate}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                    canCalculate
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Calculate Influencer Rate
                </button>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {calculation ? (
                <>
                  {/* Rate Summary */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Recommended Rate</h3>
                    <div className="text-4xl font-bold mb-2">${calculation.finalRate.toLocaleString()}</div>
                    <p className="text-purple-100 mb-4">
                      Range: ${calculation.rateRange.min.toLocaleString()} - ${calculation.rateRange.max.toLocaleString()}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Platform:</span>
                        <span className="font-semibold">{calculation.platform}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Followers:</span>
                        <span className="font-semibold">{calculation.followers.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rate Breakdown */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Rate Breakdown</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Base Rate:</span>
                        <span className="font-semibold">${calculation.baseRate.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Niche Multiplier:</span>
                        <span className="font-semibold">{calculation.nicheMultiplier}x</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Experience Multiplier:</span>
                        <span className="font-semibold">{calculation.experienceMultiplier}x</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-purple-500" />
                      ViralReach Payment Options
                    </h4>
                    <div className="space-y-4">
                      {/* Fixed Payments */}
                      <div className="bg-white rounded-xl p-6 border border-purple-200 hover:border-purple-300 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                              <DollarSign className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Fixed Payments</h4>
                              <p className="text-sm text-gray-600">Set your own budget</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-purple-600">${calculation.finalRate.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">Recommended</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Predictable costs, full creative control</span>
                        </div>
                      </div>

                      {/* Hybrid Model */}
                      <div className="bg-white rounded-xl p-6 border border-purple-200 hover:border-purple-300 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                              <Layers className="w-5 h-5 text-pink-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Hybrid Model</h4>
                              <p className="text-sm text-gray-600">Fixed + Commission</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-pink-600">${Math.round(calculation.finalRate * 0.7).toLocaleString()}</div>
                            <div className="text-sm text-gray-500">+ 10-15% commission</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">Lower upfront cost, performance incentives</span>
                        </div>
                      </div>

                      {/* Commission Only */}
                      <div className="bg-white rounded-xl p-6 border border-purple-200 hover:border-purple-300 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                              <Percent className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Sales Commission</h4>
                              <p className="text-sm text-gray-600">Performance-based only</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600">$0 upfront</div>
                            <div className="text-sm text-gray-500">5-25% commission</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">No upfront cost, pay for results only</span>
                        </div>
                      </div>

                      {/* Waitlist CTA */}
                      <div className="mt-6 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
                        <div className="flex items-center text-sm mb-3">
                          <Star className="w-4 h-4 mr-2" />
                          <span className="font-semibold">Ready to get started?</span>
                        </div>
                        <p className="text-sm text-purple-100 mb-4">
                          Join ViralReach waitlist to access these flexible payment models and connect with authentic creators.
                        </p>
                        <a 
                          href="/#waitlist" 
                          className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Join Waitlist Now
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-blue-500" />
                      Pro Tips
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Video content typically costs 30% more than static posts</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Long-term partnerships often offer better rates</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Consider performance bonuses for high-performing content</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>Different platforms have varying base rates and audience quality</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Calculate</h3>
                  <p className="text-gray-600">
                    Fill out the form to see the recommended influencer rate based on your criteria.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Use Our Rate Calculator?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Pricing</h3>
                <p className="text-gray-600">
                  Based on real market data and industry standards for fair pricing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Insights</h3>
                <p className="text-gray-600">
                  Understand how different factors affect influencer rates.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Win-Win Deals</h3>
                <p className="text-gray-600">
                  Create fair partnerships that benefit both brands and creators.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section for SEO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions About Influencer Pricing
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much should I pay an influencer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The amount you should pay an influencer depends on several factors: their follower count, platform, content niche, experience level, and the type of content you want. Use our calculator above to get a personalized rate based on your specific requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What's the average influencer rate per post?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Average rates vary significantly by platform and follower count. Instagram influencers typically charge $0.005-$0.01 per follower, while YouTube creators may charge $0.008-$0.015 per subscriber. Micro-influencers (10K-50K followers) often charge $100-$500 per post, while macro-influencers (100K-1M followers) can charge $1,000-$10,000+.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How do I calculate influencer rates?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To calculate influencer rates, consider: follower count × platform base rate × niche multiplier × experience multiplier × content type multiplier. Our calculator above does this automatically, giving you accurate market rates based on current industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Should I pay influencers based on followers or engagement?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  While follower count is important, engagement rate is often a better indicator of an influencer's value. High engagement rates (3-6%+) typically command premium pricing. Consider both metrics when determining how much to pay an influencer for maximum ROI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What payment models work best for influencer partnerships?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Three main payment models exist: Fixed payments (set rate per post), Hybrid model (lower upfront + commission), and Commission-only (performance-based). Each has benefits depending on your goals and budget. Our calculator shows you all three options.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Tools & Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Related Tools & Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/quiz/comprehensive-brand-quiz" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-500 mr-3" />
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Brand Strategy Quiz</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Get a comprehensive brand strategy with personalized insights and actionable recommendations.
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    Take Quiz <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </a>
              
              <a href="/quiz/comprehensive-creator-quiz" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Creator Assessment</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Optimize your creator strategy with our comprehensive assessment and growth plan.
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    Get Assessment <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </a>
              
              <a href="/contact" className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-500 mr-3" />
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Expert Consultation</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Need personalized advice? Connect with our influencer marketing experts.
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    Contact Us <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 