"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { 
  TrendingUp, 
  Hash, 
  Music, 
  Calendar,
  Clock,
  Target,
  Zap,
  Star,
  Users,
  BarChart3,
  Instagram,
  Youtube,
  Globe,
  Copy,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Lightbulb,
  CalendarDays
} from 'lucide-react'
import Navbar from '../../components/Navbar'

interface Trend {
  id: string
  name: string
  type: 'hashtag' | 'sound' | 'topic' | 'challenge'
  platform: 'instagram' | 'tiktok' | 'youtube' | 'all'
  growth: 'rising' | 'stable' | 'declining'
  competition: 'low' | 'medium' | 'high'
  description: string
  usage: string
  bestTime: string
  contentIdeas: string[]
}

interface NicheData {
  id: string
  name: string
  icon: JSX.Element
  trends: Trend[]
  bestPostingTimes: string[]
  tips: string[]
}

export default function TrendPredictor() {
  const [selectedNiche, setSelectedNiche] = useState<string>('')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [copiedTrend, setCopiedTrend] = useState<string>('')

  const niches: NicheData[] = [
    {
      id: 'beauty',
      name: 'Beauty & Fashion',
      icon: <Sparkles className="w-5 h-5" />,
      trends: [
        {
          id: '1',
          name: '#CleanGirlAesthetic',
          type: 'hashtag',
          platform: 'instagram',
          growth: 'rising',
          competition: 'medium',
          description: 'Minimalist beauty and lifestyle content',
          usage: 'Use for natural makeup, skincare routines, and lifestyle content',
          bestTime: 'Tuesday-Thursday, 2-4 PM',
          contentIdeas: ['Skincare routines', 'Natural makeup looks', 'Lifestyle content', 'Product reviews']
        },
        {
          id: '2',
          name: 'Viral Skincare Sound',
          type: 'sound',
          platform: 'tiktok',
          growth: 'rising',
          competition: 'low',
          description: 'Popular sound for skincare transformation videos',
          usage: 'Perfect for before/after skincare content',
          bestTime: 'Monday-Wednesday, 7-9 PM',
          contentIdeas: ['Skincare transformations', 'Product reviews', 'Routine reveals', 'Before/after content']
        },
        {
          id: '3',
          name: 'Sustainable Fashion',
          type: 'topic',
          platform: 'all',
          growth: 'stable',
          competition: 'low',
          description: 'Eco-friendly fashion and lifestyle content',
          usage: 'Great for thrift hauls, sustainable brands, and eco-conscious content',
          bestTime: 'Wednesday-Friday, 1-3 PM',
          contentIdeas: ['Thrift store hauls', 'Sustainable brand reviews', 'Eco-friendly lifestyle', 'Fashion tips']
        }
      ],
      bestPostingTimes: ['Tuesday-Thursday, 2-4 PM', 'Monday-Wednesday, 7-9 PM', 'Weekends, 10 AM-12 PM'],
      tips: ['Focus on natural lighting', 'Use trending sounds', 'Include product links', 'Engage with comments quickly']
    },
    {
      id: 'fitness',
      name: 'Fitness & Health',
      icon: <Target className="w-5 h-5" />,
      trends: [
        {
          id: '4',
          name: '#MorningWorkout',
          type: 'hashtag',
          platform: 'instagram',
          growth: 'rising',
          competition: 'medium',
          description: 'Early morning fitness motivation content',
          usage: 'Perfect for workout routines, motivation, and morning routines',
          bestTime: 'Monday-Friday, 6-8 AM',
          contentIdeas: ['Morning workouts', 'Fitness motivation', 'Routine reveals', 'Progress updates']
        },
        {
          id: '5',
          name: 'Workout Motivation Sound',
          type: 'sound',
          platform: 'tiktok',
          growth: 'stable',
          competition: 'high',
          description: 'High-energy sound for workout content',
          usage: 'Great for workout videos, transformations, and fitness challenges',
          bestTime: 'Tuesday-Thursday, 5-7 PM',
          contentIdeas: ['Workout routines', 'Fitness challenges', 'Transformation videos', 'Motivation content']
        },
        {
          id: '6',
          name: 'Mental Health Awareness',
          type: 'topic',
          platform: 'all',
          growth: 'rising',
          competition: 'low',
          description: 'Mental health and wellness content',
          usage: 'Share wellness tips, mental health resources, and self-care content',
          bestTime: 'Wednesday-Friday, 8-10 PM',
          contentIdeas: ['Wellness tips', 'Mental health resources', 'Self-care routines', 'Mindfulness content']
        }
      ],
      bestPostingTimes: ['Monday-Friday, 6-8 AM', 'Tuesday-Thursday, 5-7 PM', 'Weekends, 9-11 AM'],
      tips: ['Show real progress', 'Use motivational music', 'Include workout tips', 'Engage with fitness community']
    },
    {
      id: 'tech',
      name: 'Technology',
      icon: <Zap className="w-5 h-5" />,
      trends: [
        {
          id: '7',
          name: '#TechReview',
          type: 'hashtag',
          platform: 'youtube',
          growth: 'stable',
          competition: 'medium',
          description: 'Product reviews and tech analysis',
          usage: 'Perfect for gadget reviews, tech news, and product comparisons',
          bestTime: 'Tuesday-Thursday, 3-5 PM',
          contentIdeas: ['Product reviews', 'Tech news', 'Gadget comparisons', 'Tutorial videos']
        },
        {
          id: '8',
          name: 'AI Technology',
          type: 'topic',
          platform: 'all',
          growth: 'rising',
          competition: 'low',
          description: 'Artificial intelligence and emerging tech',
          usage: 'Share AI tools, tech insights, and future technology content',
          bestTime: 'Monday-Wednesday, 2-4 PM',
          contentIdeas: ['AI tool reviews', 'Tech insights', 'Future predictions', 'Tutorial content']
        },
        {
          id: '9',
          name: 'Gaming Content',
          type: 'topic',
          platform: 'youtube',
          growth: 'stable',
          competition: 'high',
          description: 'Gaming streams, reviews, and tutorials',
          usage: 'Perfect for game reviews, streaming content, and gaming tips',
          bestTime: 'Friday-Sunday, 7-10 PM',
          contentIdeas: ['Game reviews', 'Streaming content', 'Gaming tips', 'Community content']
        }
      ],
      bestPostingTimes: ['Tuesday-Thursday, 3-5 PM', 'Monday-Wednesday, 2-4 PM', 'Friday-Sunday, 7-10 PM'],
      tips: ['Stay updated with latest tech', 'Use high-quality visuals', 'Include technical details', 'Engage with tech community']
    },
    {
      id: 'food',
      name: 'Food & Cooking',
      icon: <Star className="w-5 h-5" />,
      trends: [
        {
          id: '10',
          name: '#EasyRecipes',
          type: 'hashtag',
          platform: 'instagram',
          growth: 'rising',
          competition: 'medium',
          description: 'Simple and quick recipe content',
          usage: 'Perfect for quick meals, cooking tips, and recipe sharing',
          bestTime: 'Monday-Friday, 5-7 PM',
          contentIdeas: ['Quick recipes', 'Cooking tips', 'Meal prep', 'Food photography']
        },
        {
          id: '11',
          name: 'Cooking ASMR Sound',
          type: 'sound',
          platform: 'tiktok',
          growth: 'stable',
          competition: 'low',
          description: 'Satisfying cooking sounds for food content',
          usage: 'Great for cooking videos, food preparation, and recipe content',
          bestTime: 'Tuesday-Thursday, 6-8 PM',
          contentIdeas: ['Cooking videos', 'Food preparation', 'Recipe content', 'Kitchen tips']
        },
        {
          id: '12',
          name: 'Healthy Eating',
          type: 'topic',
          platform: 'all',
          growth: 'stable',
          competition: 'medium',
          description: 'Nutrition and healthy lifestyle content',
          usage: 'Share healthy recipes, nutrition tips, and wellness content',
          bestTime: 'Monday-Wednesday, 12-2 PM',
          contentIdeas: ['Healthy recipes', 'Nutrition tips', 'Meal planning', 'Wellness content']
        }
      ],
      bestPostingTimes: ['Monday-Friday, 5-7 PM', 'Tuesday-Thursday, 6-8 PM', 'Weekends, 11 AM-1 PM'],
      tips: ['Use good lighting', 'Show cooking process', 'Include recipe details', 'Engage with food community']
    }
  ]

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: <Globe className="w-4 h-4" /> },
    { id: 'instagram', name: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
    { id: 'tiktok', name: 'TikTok', icon: <Music className="w-4 h-4" /> },
    { id: 'youtube', name: 'YouTube', icon: <Youtube className="w-4 h-4" /> }
  ]

  const selectedNicheData = niches.find(niche => niche.id === selectedNiche)

  const filteredTrends = selectedNicheData?.trends.filter(trend => 
    selectedPlatform === 'all' || trend.platform === selectedPlatform
  ) || []

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedTrend(text)
      setTimeout(() => setCopiedTrend(''), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'rising': return 'text-green-600 bg-green-50'
      case 'stable': return 'text-blue-600 bg-blue-50'
      case 'declining': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'low': return 'text-green-600 bg-green-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'high': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getGrowthIcon = (growth: string) => {
    switch (growth) {
      case 'rising': return <TrendingUp className="w-4 h-4" />
      case 'stable': return <BarChart3 className="w-4 h-4" />
      case 'declining': return <AlertTriangle className="w-4 h-4" />
      default: return <BarChart3 className="w-4 h-4" />
    }
  }

  return (
    <>
      <Head>
        <title>Trend Predictor - ViralReach</title>
        <meta name="description" content="Discover trending topics, hashtags, and content ideas for your niche. Stay ahead of the curve with our free trend predictor tool." />
        <meta name="keywords" content="trend predictor, trending hashtags, content ideas, social media trends, viral content" />
        <meta property="og:title" content="Trend Predictor - ViralReach" />
        <meta property="og:description" content="Discover trending topics, hashtags, and content ideas for your niche." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viralreach.com/tools/trend-predictor" />
        <link rel="canonical" href="https://viralreach.com/tools/trend-predictor" />
      </Head>

      <Navbar currentPage="tools" />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Trend Predictor
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Discover trending topics, hashtags, and content ideas for your niche. 
                  Stay ahead of the curve and create viral content with our free trend analysis tool.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Selection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Niche & Platform</h2>
            
            {/* Niche Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Your Niche</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {niches.map((niche) => (
                  <button
                    key={niche.id}
                    onClick={() => setSelectedNiche(niche.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedNiche === niche.id
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        selectedNiche === niche.id ? 'bg-purple-100' : 'bg-gray-100'
                      }`}>
                        {niche.icon}
                      </div>
                      <span className="font-medium text-sm">{niche.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Platform</h3>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                      selectedPlatform === platform.id
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    {platform.icon}
                    <span className="font-medium">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          {selectedNicheData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Trending Topics</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Updated daily</span>
                  </div>
                </div>

                <div className="grid gap-6">
                  {filteredTrends.map((trend) => (
                    <div key={trend.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            {trend.type === 'hashtag' && <Hash className="w-5 h-5 text-purple-600" />}
                            {trend.type === 'sound' && <Music className="w-5 h-5 text-purple-600" />}
                            {trend.type === 'topic' && <Lightbulb className="w-5 h-5 text-purple-600" />}
                            {trend.type === 'challenge' && <Zap className="w-5 h-5 text-purple-600" />}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{trend.name}</h3>
                            <p className="text-sm text-gray-600">{trend.description}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(trend.name)}
                          className="flex items-center space-x-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          {copiedTrend === trend.name ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-600" />
                          )}
                          <span className="text-sm text-gray-600">
                            {copiedTrend === trend.name ? 'Copied!' : 'Copy'}
                          </span>
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGrowthColor(trend.growth)}`}>
                            {getGrowthIcon(trend.growth)}
                            <span className="ml-1 capitalize">{trend.growth}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompetitionColor(trend.competition)}`}>
                            <Users className="w-3 h-3" />
                            <span className="ml-1 capitalize">{trend.competition} competition</span>
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">How to Use:</h4>
                          <p className="text-sm text-gray-600">{trend.usage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Best Time to Post:</h4>
                          <p className="text-sm text-gray-600">{trend.bestTime}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Content Ideas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {trend.contentIdeas.map((idea, index) => (
                              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                                {idea}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Posting Times */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Posting Times</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedNicheData.bestPostingTimes.map((time, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                      <CalendarDays className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips & Tricks */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips & Tricks</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedNicheData.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span className="text-gray-900">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          {!selectedNicheData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-12"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Discover Trends?</h3>
                <p className="text-gray-600 mb-6">Select your niche and platform above to see trending topics and content ideas.</p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free to use</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Updated daily</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No signup required</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
} 