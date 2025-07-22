"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Target,
  Zap,
  Star,
  Brain,
  BarChart3,
  Clock,
  Rocket,
  Trophy,
  Mail,
  Share2,
  Instagram,
  Youtube,
  Lightbulb,
  Shield,
  Globe,
  Smartphone,
  Camera,
  Video,
  Hash,
  Heart,
  Eye,
  ShoppingCart,
  User,
  TrendingUp as TrendingUpIcon,
  Palette,
  Mic,
  Play,
  BookOpen,
  Coffee,
  Dumbbell,
  Car,
  Home,
  Plane,
  Gamepad2,
  Activity,
  Building,
  AlertTriangle
} from 'lucide-react'
import Navbar from '../../components/Navbar'

interface ComprehensiveCreatorData {
  // Creator Profile
  platform: string
  followers: string
  niche: string
  
  // Content & Engagement
  contentType: string[]
  engagement: string
  postingFrequency: string
  
  // Monetization & Income
  currentIncome: string
  incomeSources: string[]
  targetIncome: string
  
  // Growth & Goals
  growthRate: string
  shortTermGoals: string[]
  challenges: string[]
  
  // Contact Information
  name: string
  email: string
}

export default function ComprehensiveCreatorQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizData, setQuizData] = useState<ComprehensiveCreatorData>({
    platform: '',
    followers: '',
    niche: '',
    contentType: [],
    engagement: '',
    postingFrequency: '',
    currentIncome: '',
    incomeSources: [],
    targetIncome: '',
    growthRate: '',
    shortTermGoals: [],
    challenges: [],
    name: '',
    email: ''
  })
  
  const [isComplete, setIsComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [reportData, setReportData] = useState<any>(null)

  const questionSections = [
    {
      title: "Creator Profile",
      icon: <User className="w-6 h-6" />,
      questions: [
        {
          id: 'platform',
          question: "What's your primary platform?",
          type: 'select',
          options: [
            { value: 'instagram', label: 'Instagram', icon: '📸' },
            { value: 'tiktok', label: 'TikTok', icon: '🎵' },
            { value: 'youtube', label: 'YouTube', icon: '📺' },
            { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
            { value: 'twitter', label: 'Twitter', icon: '🐦' },
            { value: 'facebook', label: 'Facebook', icon: '📘' }
          ]
        },
        {
          id: 'followers',
          question: "How many followers do you have?",
          type: 'select',
          options: [
            { value: 'under-1k', label: 'Under 1,000', icon: '🌱' },
            { value: '1k-5k', label: '1,000 - 5,000', icon: '📈' },
            { value: '5k-10k', label: '5,000 - 10,000', icon: '🚀' },
            { value: '10k-50k', label: '10,000 - 50,000', icon: '💎' },
            { value: '50k-100k', label: '50,000 - 100,000', icon: '🏆' },
            { value: '100k+', label: '100,000+', icon: '⭐' }
          ]
        },
        {
          id: 'niche',
          question: "What's your content niche?",
          type: 'select',
          options: [
            { value: 'fashion', label: 'Fashion & Style', icon: '👗' },
            { value: 'beauty', label: 'Beauty & Skincare', icon: '💄' },
            { value: 'fitness', label: 'Fitness & Health', icon: '💪' },
            { value: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
            { value: 'food', label: 'Food & Cooking', icon: '🍔' },
            { value: 'travel', label: 'Travel', icon: '✈️' },
            { value: 'tech', label: 'Technology', icon: '📱' },
            { value: 'business', label: 'Business & Finance', icon: '💼' },
            { value: 'education', label: 'Education', icon: '📚' },
            { value: 'entertainment', label: 'Entertainment', icon: '🎬' },
            { value: 'gaming', label: 'Gaming', icon: '🎮' },
            { value: 'other', label: 'Other', icon: '🎯' }
          ]
        }
      ]
    },
    {
      title: "Content & Engagement",
      icon: <Camera className="w-6 h-6" />,
      questions: [
        {
          id: 'contentType',
          question: "What types of content do you create? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'photos', label: 'Photos', icon: '📸' },
            { value: 'videos', label: 'Videos', icon: '🎥' },
            { value: 'stories', label: 'Stories/Reels', icon: '📱' },
            { value: 'live', label: 'Live Streams', icon: '🔴' },
            { value: 'tutorials', label: 'Tutorials', icon: '📚' },
            { value: 'reviews', label: 'Reviews', icon: '⭐' }
          ]
        },
        {
          id: 'engagement',
          question: "What's your average engagement rate?",
          type: 'select',
          options: [
            { value: 'under-1', label: 'Under 1%', icon: '📉' },
            { value: '1-2', label: '1-2%', icon: '📊' },
            { value: '2-5', label: '2-5%', icon: '📈' },
            { value: '5-10', label: '5-10%', icon: '🚀' },
            { value: '10+', label: '10%+', icon: '💎' }
          ]
        },
        {
          id: 'postingFrequency',
          question: "How often do you post?",
          type: 'select',
          options: [
            { value: 'daily', label: 'Daily', icon: '📅' },
            { value: '2-3-times-week', label: '2-3 times per week', icon: '📊' },
            { value: 'weekly', label: 'Weekly', icon: '📈' },
            { value: 'bi-weekly', label: 'Bi-weekly', icon: '📋' },
            { value: 'monthly', label: 'Monthly', icon: '🗓️' }
          ]
        }
      ]
    },
    {
      title: "Monetization & Income",
      icon: <DollarSign className="w-6 h-6" />,
      questions: [
        {
          id: 'currentIncome',
          question: "What's your current monthly income from content creation?",
          type: 'select',
          options: [
            { value: 'under-100', label: 'Under $100', icon: '💰' },
            { value: '100-500', label: '$100 - $500', icon: '💵' },
            { value: '500-1000', label: '$500 - $1,000', icon: '💎' },
            { value: '1000-5000', label: '$1,000 - $5,000', icon: '🏆' },
            { value: '5000+', label: '$5,000+', icon: '🚀' }
          ]
        },
        {
          id: 'incomeSources',
          question: "What are your current income sources? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'sponsored-posts', label: 'Sponsored Posts', icon: '📢' },
            { value: 'affiliate-marketing', label: 'Affiliate Marketing', icon: '🔗' },
            { value: 'adsense', label: 'AdSense/Platform Ads', icon: '📺' },
            { value: 'merchandise', label: 'Merchandise', icon: '👕' },
            { value: 'courses', label: 'Courses/Education', icon: '📚' },
            { value: 'none', label: 'No income yet', icon: '🆕' }
          ]
        },
        {
          id: 'targetIncome',
          question: "What's your target monthly income?",
          type: 'select',
          options: [
            { value: '1000-5000', label: '$1,000 - $5,000', icon: '💰' },
            { value: '5000-10000', label: '$5,000 - $10,000', icon: '💵' },
            { value: '10000-25000', label: '$10,000 - $25,000', icon: '💎' },
            { value: '25000+', label: '$25,000+', icon: '🏆' }
          ]
        }
      ]
    },
    {
      title: "Growth & Goals",
      icon: <TrendingUp className="w-6 h-6" />,
      questions: [
        {
          id: 'growthRate',
          question: "What's your monthly follower growth rate?",
          type: 'select',
          options: [
            { value: 'under-100', label: 'Under 100', icon: '📈' },
            { value: '100-500', label: '100-500', icon: '📊' },
            { value: '500-1000', label: '500-1,000', icon: '🚀' },
            { value: '1000+', label: '1,000+', icon: '💎' }
          ]
        },
        {
          id: 'shortTermGoals',
          question: "What are your short-term goals (next 6 months)? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'increase-followers', label: 'Increase Followers', icon: '📈' },
            { value: 'improve-engagement', label: 'Improve Engagement', icon: '💬' },
            { value: 'more-partnerships', label: 'More Brand Partnerships', icon: '🤝' },
            { value: 'increase-income', label: 'Increase Income', icon: '💰' },
            { value: 'better-content', label: 'Improve Content Quality', icon: '📸' },
            { value: 'new-platforms', label: 'Expand to New Platforms', icon: '🔄' }
          ]
        },
        {
          id: 'challenges',
          question: "What are your biggest challenges? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'consistency', label: 'Maintaining Consistency', icon: '📅' },
            { value: 'algorithm', label: 'Algorithm Changes', icon: '📊' },
            { value: 'competition', label: 'High Competition', icon: '🔥' },
            { value: 'monetization', label: 'Monetization', icon: '💰' },
            { value: 'brand-deals', label: 'Finding Brand Deals', icon: '🤝' },
            { value: 'content-ideas', label: 'Content Ideas', icon: '💡' }
          ]
        }
      ]
    },
    {
      title: "Contact Information",
      icon: <Mail className="w-6 h-6" />,
      questions: [
        {
          id: 'name',
          question: "What's your name?",
          type: 'text',
          placeholder: 'Enter your full name...'
        },
        {
          id: 'email',
          question: "What's your email address?",
          type: 'text',
          placeholder: 'your.email@example.com'
        }
      ]
    }
  ]

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setQuizData(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleNext = () => {
    if (currentStep < questionSections.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    const currentSection = questionSections[currentStep]
    return currentSection.questions.every(q => {
      const answer = quizData[q.id as keyof ComprehensiveCreatorData]
      if (q.type === 'multi-select') {
        return Array.isArray(answer) && answer.length > 0
      }
      return answer && answer !== ''
    })
  }

  // Enhanced personalization functions
  const generatePersonalizedInsights = (quizData: any, userType: 'brand' | 'creator') => {
    if (userType === 'creator') {
      return generateCreatorPersonalization(quizData)
    }
    return null
  }

  const generateCreatorPersonalization = (data: any) => {
    // Platform + Income + Experience combinations
    const personalizationMatrix = {
      // TikTok + Low Income + Beginner
      'tiktok-under-1k-beginner': {
        strategy: 'Focus on trending content and viral potential',
        focus: 'Daily posting and trend participation',
        timeline: '3-6 months to build audience',
        risks: 'Algorithm changes and content saturation',
        opportunities: 'Early adopter advantage in new features'
      },
      // Instagram + High Income + Experienced
      'instagram-50k+-experienced': {
        strategy: 'Premium content and exclusive partnerships',
        focus: 'High-quality visuals and brand collaborations',
        timeline: '6-12 months for income scaling',
        risks: 'Platform algorithm changes',
        opportunities: 'Exclusive brand deals and ambassador programs'
      },
      // YouTube + Medium Income + Intermediate
      'youtube-5k-10k-intermediate': {
        strategy: 'Educational content and community building',
        focus: 'Long-form videos and audience engagement',
        timeline: '12-18 months for sustainable income',
        risks: 'High production costs and time investment',
        opportunities: 'Course creation and membership programs'
      }
    }

    const key = `${data.platform}-${data.currentIncome}-${data.experience}`
    const personalization = personalizationMatrix[key as keyof typeof personalizationMatrix] || {
      strategy: 'Standard creator growth approach',
      focus: 'Authentic content and audience building',
      timeline: '6-12 months for results',
      risks: 'General platform risks',
      opportunities: 'Standard monetization opportunities'
    }

    // Content type insights
    const contentInsights = data.contentType.map((type: string) => {
      const insights = {
        'product-reviews': 'Focus on authenticity and detailed analysis',
        'tutorials': 'Educational value and step-by-step guidance',
        'behind-scenes': 'Authentic glimpses into your process',
        'user-generated': 'Community engagement and collaboration',
        'stories-reels': 'Quick, engaging content for daily posting',
        'testimonials': 'Social proof and credibility building'
      }
      return insights[type as keyof typeof insights] || 'Standard content strategy'
    })

    return {
      personalization,
      contentInsights,
      uniqueFactors: generateUniqueCreatorFactors(data)
    }
  }

  const generateUniqueCreatorFactors = (data: any) => {
    const factors = []
    
    // Platform-specific factors
    if (data.platform === 'tiktok') {
      factors.push('Viral potential high', 'Trend participation crucial', 'Young audience focus')
    } else if (data.platform === 'instagram') {
      factors.push('Visual quality important', 'Stories engagement key', 'Brand partnerships valuable')
    } else if (data.platform === 'youtube') {
      factors.push('Long-form content focus', 'SEO optimization important', 'Monetization opportunities high')
    }

    // Income-specific factors
    if (data.currentIncome === 'under-1k') {
      factors.push('Growth phase focus', 'Diversification needed', 'Skill development important')
    } else if (data.currentIncome === '50k+') {
      factors.push('Business scaling focus', 'Team building opportunities', 'Product creation potential')
    }

    return factors
  }

  const saveQuizResult = async (quizData: any, reportData: any, userType: 'brand' | 'creator') => {
    try {
      const response = await fetch('/api/save-quiz-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizData,
          reportData,
          userType
        })
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('Error saving quiz result:', result.error)
        return { success: false, message: result.error }
      }

      console.log('Quiz result saved successfully to Supabase:', result)
      return { success: true, message: 'Data saved to Supabase', data: result.data }
    } catch (error) {
      console.error('Error saving quiz result:', error)
      return { success: false, message: 'Failed to save data' }
    }
  }

  const generateReport = async () => {
    setIsLoading(true)
    try {
      // Generate comprehensive report data with enhanced personalization
      const report = generateComprehensiveReport(quizData)
      
      // Add personalized insights
      const personalizedInsights = generatePersonalizedInsights(quizData, 'creator')
      ;(report as any).personalizedInsights = personalizedInsights
      
      setReportData(report)
      
      // Save to Supabase
      await saveQuizResult(quizData, report, 'creator')
    } catch (error) {
      console.error('Error generating report:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const generateComprehensiveReport = (data: ComprehensiveCreatorData) => {
    // Platform insights with 10x growth potential
    const platformInsights = {
      instagram: { avgEngagement: '3.2%', avgRate: '$200-500', growth: 'High', growthMultiplier: '8x', viralPotential: 'High', timeTo10x: '12-18 months' },
      tiktok: { avgEngagement: '5.8%', avgRate: '$150-400', growth: 'Very High', growthMultiplier: '15x', viralPotential: 'Very High', timeTo10x: '6-12 months' },
      youtube: { avgEngagement: '2.1%', avgRate: '$500-2000', growth: 'Medium', growthMultiplier: '10x', viralPotential: 'Medium', timeTo10x: '9-15 months' },
      linkedin: { avgEngagement: '1.8%', avgRate: '$300-800', growth: 'Medium', growthMultiplier: '6x', viralPotential: 'Low', timeTo10x: '18-24 months' },
      twitter: { avgEngagement: '1.5%', avgRate: '$100-300', growth: 'Low', growthMultiplier: '4x', viralPotential: 'Medium', timeTo10x: '24-30 months' },
      facebook: { avgEngagement: '1.2%', avgRate: '$80-250', growth: 'Low', growthMultiplier: '3x', viralPotential: 'Low', timeTo10x: '30-36 months' }
    }

    const platform = platformInsights[data.platform as keyof typeof platformInsights] || platformInsights.instagram

    // Income analysis with 10x potential
    const incomeAnalysis = {
      'under-1k': { potential: '$2k-5k', timeline: '3-6 months', strategy: 'Micro-influencer focus', growthMultiplier: '10x', targetIncome: '$20k-50k' },
      '1k-5k': { potential: '$5k-15k', timeline: '6-12 months', strategy: 'Brand partnerships', growthMultiplier: '12x', targetIncome: '$60k-180k' },
      '5k-10k': { potential: '$15k-30k', timeline: '12-18 months', strategy: 'Diversified income', growthMultiplier: '15x', targetIncome: '$225k-450k' },
      '10k-25k': { potential: '$30k-75k', timeline: '18-24 months', strategy: 'Agency partnerships', growthMultiplier: '18x', targetIncome: '$540k-1.35M' },
      '25k-50k': { potential: '$75k-150k', timeline: '24-36 months', strategy: 'Product launches', growthMultiplier: '20x', targetIncome: '$1.5M-3M' },
      '50k+': { potential: '$150k+', timeline: '36+ months', strategy: 'Business empire', growthMultiplier: '25x', targetIncome: '$3.75M+' }
    }

    const income = incomeAnalysis[data.currentIncome as keyof typeof incomeAnalysis] || incomeAnalysis['1k-5k']

    return {
      summary: {
        platform: data.platform,
        followers: data.followers,
        engagement: data.engagement,
        niche: data.niche,
        currentIncome: data.currentIncome
      },
      recommendations: {
        strategy: [
          `🚀 10X Strategy: Focus on ${data.platform} optimization with ${data.contentType.join(', ')} content for ${platform.growthMultiplier} growth`,
          '💥 Viral Content: Build authentic relationships with your audience for maximum reach',
          '🔥 Brand Building: Develop a consistent brand voice and visual identity for recognition',
          '📅 Content Mastery: Create a viral content calendar and posting schedule'
        ],
        platform: [
          `🎯 ${data.platform.charAt(0).toUpperCase() + data.platform.slice(1)}: ${platform.avgEngagement} engagement with ${platform.growthMultiplier} growth potential`,
          '🚀 Cross-promote viral content across multiple platforms for maximum reach',
          '⚡ Optimize content for each platform\'s unique viral features',
          '💬 Engage with your audience through comments and stories for community building'
        ],
        content: data.contentType.map(c => `🔥 ${c.replace('-', ' ')} content for viral potential and maximum engagement`),
        monetization: [
          `💰 Target ${income.potential} monthly income within ${income.timeline} for ${income.growthMultiplier} growth`,
          '🚀 Diversify income streams beyond brand partnerships for exponential growth',
          '⚡ Set competitive pricing based on your engagement rate and viral potential',
          '🤝 Focus on long-term partnerships over one-off campaigns for sustainable growth'
        ],
        growth: [
          `📈 Aim for ${platform.growth} growth rate on ${data.platform} with ${platform.timeTo10x} to 10X`,
          '🔥 Collaborate with other viral creators in your niche for cross-promotion',
          '⚡ Stay updated with platform trends and algorithm changes for maximum reach',
          '📊 Use analytics tools to optimize performance and identify viral opportunities'
        ],
        partnerships: [
          '🤝 Focus on brands that align with your values for authentic partnerships',
          '📋 Develop professional pitch decks and media kits for high-value deals',
          '💼 Build relationships with brand managers and agencies for exclusive opportunities',
          '💎 Consider exclusive partnerships for higher rates and long-term security'
        ],
        timeline: [
          `🎯 Income goal: ${data.targetIncome} within ${income.timeline} for ${income.growthMultiplier} growth`,
          '🔥 Phase 1: Content optimization and viral audience growth',
          '🚀 Phase 2: Brand partnership development and scaling',
          '💎 Phase 3: Income diversification and exponential scaling'
        ],
        metrics: [
          '📈 Track engagement rates and viral content performance',
          '💰 Monitor brand partnership performance and ROI growth',
          '📊 Analyze content performance and viral trends',
          '🎯 Measure income growth and diversification success'
        ],
        risks: [
          '⚠️ Platform algorithm changes affecting viral reach potential',
          '📉 Over-reliance on single income source for sustainability',
          '🛡️ Brand partnership conflicts and cancellations',
          '🔥 Audience fatigue from promotional content'
        ],
        opportunities: [
          '🚀 Launch your own products or services for exponential income',
          '💥 Explore affiliate marketing opportunities for passive income',
          '📧 Build an email list for direct communication and sales',
          '🎓 Create online courses or digital products for scalable income'
        ]
      },
      insights: {
        avgEngagement: platform.avgEngagement,
        avgRate: platform.avgRate,
        growth: platform.growth,
        timeline: income.timeline,
        growthMultiplier: platform.growthMultiplier,
        timeTo10x: platform.timeTo10x,
        targetIncome: income.targetIncome,
        successFactors: [
          '🚀 Viral content creation and distribution',
          '💥 Authentic audience relationships',
          '🔥 Consistent brand voice and visual identity',
          '📅 Strategic content calendar and posting',
          '🤝 Professional brand partnerships',
          '⚡ Continuous learning and platform adaptation'
        ]
      },
      nextSteps: [
        '🚀 Optimize your viral content strategy and posting schedule',
        '📋 Create a professional media kit and pitch deck for high-value deals',
        '🤝 Research and reach out to potential brand partners for exponential growth',
        '📊 Set up analytics and viral tracking tools for optimization',
        '🔥 Develop your personal brand and unique voice for maximum recognition'
      ]
    }
  }



  const handleShareReport = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My 10X Creator Growth Strategy Report',
        text: 'Check out my personalized creator growth strategy!',
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Report link copied to clipboard!')
    }
  }

  const getTrustIndicators = (step: number) => {
    // Customize based on current step for creators (5 sections)
    const stepCustomizations = [
      {
        indicators: [
          {
            icon: <User className="w-4 h-4 text-green-500" />,
            text: "Creator Profile",
            description: "Understand your audience"
          },
          {
            icon: <Globe className="w-4 h-4 text-blue-500" />,
            text: "Platform Insights",
            description: "Based on your platform"
          },
          {
            icon: <Zap className="w-4 h-4 text-yellow-500" />,
            text: "Quick Setup",
            description: "Takes only 2 minutes"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <Camera className="w-4 h-4 text-green-500" />,
            text: "Content Strategy",
            description: "Optimize your content"
          },
          {
            icon: <Video className="w-4 h-4 text-blue-500" />,
            text: "Engagement Focus",
            description: "Boost interaction"
          },
          {
            icon: <Lightbulb className="w-4 h-4 text-yellow-500" />,
            text: "Creative Ideas",
            description: "Viral content tips"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <DollarSign className="w-4 h-4 text-green-500" />,
            text: "Monetization Focus",
            description: "Maximize your income"
          },
          {
            icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
            text: "Revenue Growth",
            description: "Scale your earnings"
          },
          {
            icon: <Target className="w-4 h-4 text-yellow-500" />,
            text: "Income Goals",
            description: "Set clear targets"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <BarChart3 className="w-4 h-4 text-green-500" />,
            text: "Growth Analytics",
            description: "Track your progress"
          },
          {
            icon: <Activity className="w-4 h-4 text-blue-500" />,
            text: "Goal Setting",
            description: "Define your path"
          },
          {
            icon: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
            text: "Challenge Solutions",
            description: "Overcome obstacles"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <Mail className="w-4 h-4 text-green-500" />,
            text: "Instant Delivery",
            description: "Get your report now"
          },
          {
            icon: <Share2 className="w-4 h-4 text-blue-500" />,
            text: "Share Ready",
            description: "Easy to share online"
          },
          {
            icon: <Share2 className="w-4 h-4 text-yellow-500" />,
            text: "Share Report",
            description: "Share with your team"
          }
        ]
      }
    ]

    return stepCustomizations[step]?.indicators || [
      {
        icon: <CheckCircle className="w-4 h-4 text-green-500" />,
        text: "Quick & Easy",
        description: "Takes only 2 minutes"
      },
      {
        icon: <Shield className="w-4 h-4 text-blue-500" />,
        text: "100% Secure",
        description: "Your data is protected"
      },
      {
        icon: <Zap className="w-4 h-4 text-yellow-500" />,
        text: "Instant Results",
        description: "Get your strategy immediately"
      }
    ]
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Navbar currentPage="quiz" />
        
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Your 10X Creator Growth Strategy is Ready!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your responses, we've created a personalized strategy to 10X your income and audience growth.
            </p>
          </motion.div>

          {reportData && (
            <div className="space-y-8">
              {/* Monetization Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-green-500" />
                  Monetization Strategy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {reportData.recommendations.monetization?.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Personalized Insights */}
              {(reportData as any).personalizedInsights && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-blue-500" />
                    Your Personalized Strategy
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 Custom Approach</h3>
                      <p className="text-gray-700 mb-2">{(reportData as any).personalizedInsights.personalization.strategy}</p>
                      <p className="text-gray-700 mb-2"><strong>Focus:</strong> {(reportData as any).personalizedInsights.personalization.focus}</p>
                      <p className="text-gray-700"><strong>Timeline:</strong> {(reportData as any).personalizedInsights.personalization.timeline}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Unique Factors</h3>
                      <div className="space-y-2">
                        {(reportData as any).personalizedInsights.uniqueFactors.map((factor: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{factor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Content & Growth Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Camera className="w-6 h-6 mr-3 text-blue-500" />
                  Content & Growth Strategy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Content Strategy</h3>
                    {reportData.recommendations.content?.map((rec: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Growth Strategy</h3>
                    {reportData.recommendations.growth?.map((rec: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Partnerships & Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-purple-500" />
                  Partnerships & Opportunities
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Partnership Strategy</h3>
                    {reportData.recommendations.partnerships?.map((rec: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Opportunities</h3>
                    {reportData.recommendations.opportunities?.map((rec: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Lead Capture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Your Creator Strategy is Ready!</h3>
                <p className="text-purple-100 mb-6">
                  Your personalized report is complete and saved. View it online or share it with your team.
                </p>

                <div className="max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={quizData.name}
                    onChange={(e) => setQuizData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={quizData.email}
                    onChange={(e) => setQuizData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <div className="flex justify-center">
                    <button
                      onClick={handleShareReport}
                      className="bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-5 h-5" />
                      Share Report
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar currentPage="quiz" />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💰 Comprehensive Creator Income Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get AI-powered recommendations for your creator monetization strategy
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questionSections.length) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-500">
            Step {currentStep + 1} of {questionSections.length}
          </p>
        </div>

        {/* Question Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-100 rounded-xl mr-4">
                {questionSections[currentStep].icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  {questionSections[currentStep].title}
                </h2>
                <p className="text-gray-600">
                  Let's understand your creator profile better
                </p>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center space-x-6 mb-8">
              {getTrustIndicators(currentStep).map((indicator, index) => (
                <div key={index} className="flex flex-col items-center space-y-1 text-center">
                  {indicator.icon}
                  <span className="text-sm font-medium text-gray-700">{indicator.text}</span>
                  <span className="text-xs text-gray-500">{indicator.description}</span>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {questionSections[currentStep].questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {question.question}
                  </h3>
                  
                  {question.type === 'select' && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {question.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(question.id, option.value)}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                            quizData[question.id as keyof ComprehensiveCreatorData] === option.value
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{option.icon}</span>
                            <span className="font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {question.type === 'multi-select' && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {question.options.map((option) => {
                        const currentAnswers = quizData[question.id as keyof ComprehensiveCreatorData] as string[] || []
                        const isSelected = currentAnswers.includes(option.value)
                        
                        return (
                          <button
                            key={option.value}
                            onClick={() => {
                              const newAnswers = isSelected
                                ? currentAnswers.filter(a => a !== option.value)
                                : [...currentAnswers, option.value]
                              handleAnswer(question.id, newAnswers)
                            }}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                              isSelected
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{option.icon}</span>
                              <span className="font-medium">{option.label}</span>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  )}
                  
                  {question.type === 'text' && (
                    <input
                      type="text"
                      placeholder={question.placeholder}
                      value={quizData[question.id as keyof ComprehensiveCreatorData] as string || ''}
                      onChange={(e) => handleAnswer(question.id, e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-12">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="flex items-center px-6 py-3 rounded-xl font-semibold border-2 border-gray-300 text-gray-600 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              
              {currentStep === questionSections.length - 1 ? (
                <button
                                  onClick={() => {
                  setIsComplete(true)
                  generateReport()
                }}
                  disabled={!canProceed() || isLoading}
                  className="flex items-center px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate Strategy
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
} 