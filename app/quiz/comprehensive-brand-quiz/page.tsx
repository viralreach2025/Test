"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Building, 
  DollarSign, 
  Target, 
  Users, 
  Globe, 
  Star, 
  Rocket, 
  BarChart3, 
  Trophy, 
  Mail,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Calendar,
  PieChart,
  BarChart,
  Activity,
  Award,
  Zap,
  Clock,
  DollarSign as DollarIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  Globe as GlobeIcon,
  Share2,
  Shield,
  Heart
} from 'lucide-react'
import Navbar from '../../components/Navbar'
// import { supabase } from '../../lib/supabase'
// import { generatePersonalizedInsights, saveQuizResult } from '../../lib/quiz-utils-simple'

interface ComprehensiveQuizData {
  // Basic Business Info
  industry: string
  companySize: string
  influencerBudget: string
  
  // Goals & Strategy
  primaryGoals: string[]
  targetAudience: string
  platforms: string[]
  
  // Creator Strategy
  creatorSize: string
  creatorCriteria: string[]
  previousExperience: string
  
  // Campaign Details
  campaignObjective: string
  campaignDuration: string
  contentPreferences: string[]
  
  // Contact Information
  name: string
  email: string
  company: string
}

interface ReportData {
  summary: {
    industry: string
    budget: string
    audience: string
    platforms: string[]
    goals: string[]
  }
  recommendations: {
    strategy: string[]
    platform: string[]
    creator: string[]
    content: string[]
    budget: string[]
    timeline: string[]
    metrics: string[]
    risks: string[]
    opportunities: string[]
  }
  insights: {
    marketSize: string
    competition: string
    roi: string
    timeline: string
    successFactors: string[]
    growthPotential?: string
    timeTo10x?: string
    revenuePotential?: string
  }
  nextSteps: string[]
  personalizedInsights?: {
    personalization: {
      strategy: string
      focus: string
      timeline: string
      risks: string
      opportunities: string
    }
    platformInsights: string[]
    goalInsights: string[]
    uniqueFactors: string[]
  }
}

export default function ComprehensiveBrandQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizData, setQuizData] = useState<ComprehensiveQuizData>({
    industry: '',
    companySize: '',
    influencerBudget: '',
    primaryGoals: [],
    targetAudience: '',
    platforms: [],
    creatorSize: '',
    creatorCriteria: [],
    previousExperience: '',
    campaignObjective: '',
    campaignDuration: '',
    contentPreferences: [],
    name: '',
    email: '',
    company: ''
  })
  
  const [isComplete, setIsComplete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [reportData, setReportData] = useState<ReportData | null>(null)

  const questionSections = [
    {
      title: "Business Overview",
      icon: <Building className="w-6 h-6" />,
      questions: [
        {
          id: 'industry',
          question: "What industry is your business in?",
          type: 'select',
          options: [
            { value: 'beauty', label: 'Beauty & Skincare', icon: '💄' },
            { value: 'fashion', label: 'Fashion & Apparel', icon: '👗' },
            { value: 'fitness', label: 'Fitness & Wellness', icon: '💪' },
            { value: 'food', label: 'Food & Beverage', icon: '🍔' },
            { value: 'tech', label: 'Technology', icon: '📱' },
            { value: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
            { value: 'education', label: 'Education', icon: '📚' },
            { value: 'finance', label: 'Finance', icon: '💰' },
            { value: 'travel', label: 'Travel', icon: '✈️' },
            { value: 'automotive', label: 'Automotive', icon: '🚗' },
            { value: 'real-estate', label: 'Real Estate', icon: '🏠' },
            { value: 'other', label: 'Other', icon: '🏢' }
          ]
        },
        {
          id: 'companySize',
          question: "What's your company size?",
          type: 'select',
          options: [
            { value: 'solo', label: 'Solo Entrepreneur', icon: '👤' },
            { value: '2-10', label: '2-10 employees', icon: '👥' },
            { value: '11-50', label: '11-50 employees', icon: '🏢' },
            { value: '51-200', label: '51-200 employees', icon: '🏭' },
            { value: '201-1000', label: '201-1000 employees', icon: '🏢' },
            { value: '1000+', label: '1000+ employees', icon: '🏢' }
          ]
        },
        {
          id: 'influencerBudget',
          question: "What's your influencer marketing budget?",
          type: 'select',
          options: [
            { value: 'under-1k', label: 'Under $1,000', icon: '💰' },
            { value: '1k-5k', label: '$1,000 - $5,000', icon: '💵' },
            { value: '5k-10k', label: '$5,000 - $10,000', icon: '💎' },
            { value: '10k-25k', label: '$10,000 - $25,000', icon: '🏆' },
            { value: '25k-50k', label: '$25,000 - $50,000', icon: '🚀' },
            { value: '50k+', label: '$50,000+', icon: '💎' }
          ]
        }
      ]
    },
    {
      title: "Goals & Strategy",
      icon: <Target className="w-6 h-6" />,
      questions: [
        {
          id: 'primaryGoals',
          question: "What are your primary campaign goals? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'brand-awareness', label: 'Brand Awareness', icon: '👁️' },
            { value: 'lead-generation', label: 'Lead Generation', icon: '📞' },
            { value: 'sales-conversion', label: 'Sales Conversion', icon: '💰' },
            { value: 'product-launch', label: 'Product Launch', icon: '🚀' },
            { value: 'customer-engagement', label: 'Customer Engagement', icon: '💬' },
            { value: 'social-proof', label: 'Social Proof', icon: '👍' }
          ]
        },
        {
          id: 'targetAudience',
          question: "Who is your primary target audience?",
          type: 'select',
          options: [
            { value: 'gen-z', label: 'Gen Z (16-24)', icon: '🎮' },
            { value: 'millennials', label: 'Millennials (25-40)', icon: '📱' },
            { value: 'gen-x', label: 'Gen X (41-56)', icon: '💼' },
            { value: 'boomers', label: 'Boomers (57+)', icon: '👴' },
            { value: 'all-ages', label: 'All Ages', icon: '🌍' }
          ]
        },
        {
          id: 'platforms',
          question: "Which platforms do you want to focus on? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'instagram', label: 'Instagram', icon: '📸' },
            { value: 'tiktok', label: 'TikTok', icon: '🎵' },
            { value: 'youtube', label: 'YouTube', icon: '📺' },
            { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
            { value: 'twitter', label: 'Twitter', icon: '🐦' },
            { value: 'facebook', label: 'Facebook', icon: '📘' }
          ]
        }
      ]
    },
    {
      title: "Creator Strategy",
      icon: <Star className="w-6 h-6" />,
      questions: [
        {
          id: 'creatorSize',
          question: "What's your preferred creator size?",
          type: 'select',
          options: [
            { value: 'nano', label: 'Nano (1K-10K)', icon: '🌱' },
            { value: 'micro', label: 'Micro (10K-100K)', icon: '📈' },
            { value: 'macro', label: 'Macro (100K-1M)', icon: '🚀' },
            { value: 'mega', label: 'Mega (1M+)', icon: '⭐' },
            { value: 'mix', label: 'Mix of all sizes', icon: '🔄' },
            { value: 'celebrities', label: 'Celebrities', icon: '🌟' }
          ]
        },
        {
          id: 'creatorCriteria',
          question: "What creator criteria are most important? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'follower-count', label: 'Follower Count', icon: '👥' },
            { value: 'engagement-rate', label: 'Engagement Rate', icon: '💬' },
            { value: 'brand-alignment', label: 'Brand Alignment', icon: '🎯' },
            { value: 'authenticity', label: 'Authenticity', icon: '🤝' },
            { value: 'content-quality', label: 'Content Quality', icon: '📸' },
            { value: 'audience-demographics', label: 'Audience Demographics', icon: '📊' }
          ]
        },
        {
          id: 'previousExperience',
          question: "Do you have previous influencer marketing experience?",
          type: 'select',
          options: [
            { value: 'none', label: 'None', icon: '🆕' },
            { value: '1-2-campaigns', label: '1-2 campaigns', icon: '📚' },
            { value: '3-5-campaigns', label: '3-5 campaigns', icon: '📊' },
            { value: '6-10-campaigns', label: '6-10 campaigns', icon: '🎯' },
            { value: '10+', label: '10+ campaigns', icon: '🏆' },
            { value: 'ongoing', label: 'Ongoing program', icon: '🔄' }
          ]
        }
      ]
    },
    {
      title: "Campaign Details",
      icon: <Rocket className="w-6 h-6" />,
      questions: [
        {
          id: 'campaignObjective',
          question: "What's your main campaign objective?",
          type: 'select',
          options: [
            { value: 'awareness', label: 'Brand Awareness', icon: '👁️' },
            { value: 'consideration', label: 'Brand Consideration', icon: '🤔' },
            { value: 'conversion', label: 'Direct Conversion', icon: '💰' },
            { value: 'engagement', label: 'Community Engagement', icon: '💬' },
            { value: 'launch', label: 'Product Launch', icon: '🚀' },
            { value: 'retention', label: 'Customer Retention', icon: '🔄' }
          ]
        },
        {
          id: 'campaignDuration',
          question: "How long will your campaign run?",
          type: 'select',
          options: [
            { value: '1-2-weeks', label: '1-2 weeks', icon: '⚡' },
            { value: '1-month', label: '1 month', icon: '📅' },
            { value: '3-months', label: '3 months', icon: '🗓️' },
            { value: '6-months', label: '6 months', icon: '📊' },
            { value: 'ongoing', label: 'Ongoing program', icon: '🔄' }
          ]
        },
        {
          id: 'contentPreferences',
          question: "What type of content do you prefer? (Select all that apply)",
          type: 'multi-select',
          options: [
            { value: 'product-reviews', label: 'Product Reviews', icon: '⭐' },
            { value: 'tutorials', label: 'Tutorials/How-to', icon: '📚' },
            { value: 'behind-scenes', label: 'Behind-the-scenes', icon: '🎬' },
            { value: 'user-generated', label: 'User-generated Content', icon: '📱' },
            { value: 'stories-reels', label: 'Stories/Reels', icon: '📱' },
            { value: 'testimonials', label: 'Testimonials', icon: '💬' }
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
          placeholder: 'your.email@company.com'
        },
        {
          id: 'company',
          question: "What's your company name?",
          type: 'text',
          placeholder: 'Enter your company name...'
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
    return currentSection.questions.every(question => {
      const answer = quizData[question.id as keyof ComprehensiveQuizData]
      if (question.type === 'multi-select') {
        return Array.isArray(answer) && answer.length > 0
      }
      return answer && answer.toString().trim() !== ''
    })
  }

  // Enhanced personalization functions
  const generatePersonalizedInsights = (quizData: any, userType: 'brand' | 'creator') => {
    if (userType === 'brand') {
      return generateBrandPersonalization(quizData)
    }
    return null
  }

  const generateBrandPersonalization = (data: any) => {
    // Industry + Budget + Experience combinations
    const personalizationMatrix = {
      // Beauty + Low Budget + No Experience
      'beauty-under-1k-none': {
        strategy: 'Start with micro-influencers in beauty niche',
        focus: 'Product reviews and tutorials',
        timeline: '3-6 months to see results',
        risks: 'High competition, need authentic partnerships',
        opportunities: 'User-generated content campaigns'
      },
      // Tech + High Budget + Experienced
      'tech-50k+-10+': {
        strategy: 'Multi-platform campaign with macro influencers',
        focus: 'Thought leadership and product demos',
        timeline: '6-12 months for full ROI',
        risks: 'Technical content complexity',
        opportunities: 'Exclusive partnerships and co-creation'
      },
      // Fashion + Medium Budget + Some Experience
      'fashion-10k-25k-3-5-campaigns': {
        strategy: 'Mix of micro and macro influencers',
        focus: 'Lifestyle content and brand storytelling',
        timeline: '4-8 months for optimal results',
        risks: 'Seasonal trends and fast-changing styles',
        opportunities: 'Seasonal campaigns and trend partnerships'
      }
    }

    // Generate unique key based on user inputs
    const key = `${data.industry}-${data.influencerBudget}-${data.previousExperience}`
    const personalization = personalizationMatrix[key as keyof typeof personalizationMatrix] || {
      strategy: 'Standard influencer marketing approach',
      focus: 'Authentic content and partnerships',
      timeline: '6-12 months for results',
      risks: 'General market risks',
      opportunities: 'Standard growth opportunities'
    }

    // Platform-specific insights
    const platformInsights = data.platforms.map((platform: string) => {
      const insights = {
        instagram: 'Focus on visual storytelling and Stories',
        tiktok: 'Embrace trends and viral challenges',
        youtube: 'Long-form educational content',
        linkedin: 'Professional thought leadership',
        twitter: 'Real-time engagement and conversations',
        facebook: 'Community building and groups'
      }
      return insights[platform as keyof typeof insights] || 'Standard platform strategy'
    })

    // Goal-specific recommendations
    const goalInsights = data.primaryGoals.map((goal: string) => {
      const insights = {
        'brand-awareness': 'Focus on reach and impressions',
        'lead-generation': 'Include clear CTAs and lead magnets',
        'sales-conversion': 'Product-focused content with direct links',
        'product-launch': 'Exclusive previews and early access',
        'customer-engagement': 'Interactive content and community building',
        'social-proof': 'Testimonials and user-generated content'
      }
      return insights[goal as keyof typeof insights] || 'Standard goal strategy'
    })

    return {
      personalization,
      platformInsights,
      goalInsights,
      uniqueFactors: generateUniqueFactors(data)
    }
  }

  const generateUniqueFactors = (data: any) => {
    const factors = []
    
    // Industry-specific factors
    if (data.industry === 'beauty') {
      factors.push('High visual content demand', 'Seasonal trend sensitivity', 'Authenticity crucial')
    } else if (data.industry === 'tech') {
      factors.push('Educational content focus', 'Technical expertise required', 'Long sales cycles')
    } else if (data.industry === 'fitness') {
      factors.push('Transformation stories powerful', 'Community building important', 'Consistency key')
    }

    // Budget-specific factors
    if (data.influencerBudget === 'under-1k') {
      factors.push('Micro-influencer focus', 'Organic growth emphasis', 'Cost-effective strategies')
    } else if (data.influencerBudget === '50k+') {
      factors.push('Premium creator partnerships', 'Multi-platform campaigns', 'Exclusive content opportunities')
    }

    // Experience-specific factors
    if (data.previousExperience === 'none') {
      factors.push('Educational approach needed', 'Start with pilot programs', 'Learning curve expected')
    } else if (data.previousExperience === '10+') {
      factors.push('Advanced strategies possible', 'Optimization focus', 'Scaling opportunities')
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
      const personalizedInsights = generatePersonalizedInsights(quizData, 'brand')
      report.personalizedInsights = personalizedInsights
      
      setReportData(report)
      
      // Save to Supabase
      await saveQuizResult(quizData, report, 'brand')
    } catch (error) {
      console.error('Error generating report:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const generateComprehensiveReport = (data: ComprehensiveQuizData): ReportData => {
    // Industry insights with 10x growth potential
    const industryInsights = {
      beauty: { marketSize: '$532B', competition: 'High', avgROI: '450%', growthPotential: '10x', timeTo10x: '12-18 months' },
      fashion: { marketSize: '$1.5T', competition: 'Very High', avgROI: '380%', growthPotential: '8x', timeTo10x: '18-24 months' },
      fitness: { marketSize: '$96B', competition: 'Medium', avgROI: '520%', growthPotential: '12x', timeTo10x: '9-15 months' },
      food: { marketSize: '$8.7T', competition: 'High', avgROI: '410%', growthPotential: '10x', timeTo10x: '12-18 months' },
      tech: { marketSize: '$3.2T', competition: 'Medium', avgROI: '480%', growthPotential: '15x', timeTo10x: '6-12 months' },
      lifestyle: { marketSize: '$1.2T', competition: 'High', avgROI: '390%', growthPotential: '9x', timeTo10x: '15-21 months' }
    }

    const industry = industryInsights[data.industry as keyof typeof industryInsights] || industryInsights.tech

    // Budget analysis with 10x ROI focus
    const budgetAnalysis = {
      'under-1k': { creatorCount: '3-5', avgRate: '$50-200', timeline: '2-3 months', potentialROI: '8x', revenuePotential: '$8k-40k' },
      '1k-5k': { creatorCount: '5-10', avgRate: '$200-500', timeline: '3-4 months', potentialROI: '10x', revenuePotential: '$50k-150k' },
      '5k-10k': { creatorCount: '10-15', avgRate: '$500-1000', timeline: '4-6 months', potentialROI: '12x', revenuePotential: '$150k-360k' },
      '10k-25k': { creatorCount: '15-25', avgRate: '$1000-2500', timeline: '6-8 months', potentialROI: '15x', revenuePotential: '$360k-900k' },
      '25k-50k': { creatorCount: '25-40', avgRate: '$2500-5000', timeline: '8-12 months', potentialROI: '18x', revenuePotential: '$900k-2.7M' },
      '50k+': { creatorCount: '40+', avgRate: '$5000+', timeline: '12+ months', potentialROI: '20x', revenuePotential: '$2.7M+' }
    }

    const budget = budgetAnalysis[data.influencerBudget as keyof typeof budgetAnalysis] || budgetAnalysis['1k-5k']

    // Platform effectiveness with 10x growth metrics
    const platformEffectiveness = {
      instagram: { reach: 'High', engagement: 'High', cost: 'Medium', growthMultiplier: '8x', viralPotential: 'High' },
      tiktok: { reach: 'Very High', engagement: 'Very High', cost: 'Low', growthMultiplier: '15x', viralPotential: 'Very High' },
      youtube: { reach: 'High', engagement: 'Medium', cost: 'High', growthMultiplier: '10x', viralPotential: 'Medium' },
      linkedin: { reach: 'Medium', engagement: 'Medium', cost: 'High', growthMultiplier: '6x', viralPotential: 'Low' },
      twitter: { reach: 'Medium', engagement: 'Low', cost: 'Low', growthMultiplier: '4x', viralPotential: 'Medium' },
      facebook: { reach: 'Medium', engagement: 'Low', cost: 'Low', growthMultiplier: '3x', viralPotential: 'Low' }
    }

    return {
      summary: {
        industry: data.industry,
        budget: data.influencerBudget,
        audience: data.targetAudience,
        platforms: data.platforms,
        goals: data.primaryGoals
      },
      recommendations: {
        strategy: [
          `🚀 10X Strategy: Focus on ${data.industry} industry with ${data.creatorSize} creators for ${industry.growthPotential} growth potential`,
          '💥 Viral Content: Implement authentic storytelling and user-generated content for maximum reach',
          '🔥 Long-term Partnerships: Build relationships with creators for exponential ROI growth',
          '📊 Data-Driven Scaling: Use analytics to optimize and scale successful campaigns'
        ],
        platform: data.platforms.map(p => {
          const platform = platformEffectiveness[p as keyof typeof platformEffectiveness]
          return `${p.charAt(0).toUpperCase() + p.slice(1)}: ${platform?.growthMultiplier} growth multiplier with ${platform?.viralPotential} viral potential`
        }),
        creator: [
          `🎯 Target ${data.creatorSize} creators with ${data.creatorCriteria.join(', ')} for maximum impact`,
          '⚡ Prioritize engagement rate over follower count for better conversion',
          '🤝 Focus on creators with authentic brand alignment for trust building',
          '💎 Consider micro-influencers for higher engagement and ROI rates'
        ],
        content: data.contentPreferences.map(c => `🔥 ${c.replace('-', ' ')} content for viral potential and maximum engagement`),
        budget: [
          `💰 Allocate ${budget.creatorCount} creators with ${budget.avgRate} rates for ${budget.potentialROI} ROI potential`,
          '📈 70% to creator fees, 20% to tools, 10% to analytics for optimal scaling',
          '🎯 Consider performance-based compensation for maximum motivation',
          '🚀 Start small and scale based on proven results'
        ],
        timeline: [
          `⏰ Campaign duration: ${data.campaignDuration}`,
          `🎯 10X Timeline: ${budget.timeline} to reach ${industry.growthPotential} growth`,
          '🔥 Phase 1: Creator selection and viral content strategy',
          '🚀 Phase 2: Content creation and campaign launch with viral hooks',
          '📊 Phase 3: Performance monitoring and exponential scaling'
        ],
        metrics: [
          '📈 Track engagement rates and viral content performance',
          '🔥 Monitor brand mentions and social media growth velocity',
          '💰 Measure conversion rates and exponential ROI growth',
          '🎯 Analyze audience demographics and viral reach potential'
        ],
        risks: [
          '⚠️ Creator authenticity and brand alignment for trust',
          '📉 Algorithm changes affecting viral reach potential',
          '💰 Budget overruns and poor ROI scaling',
          '🛡️ Reputation risks from inappropriate viral content'
        ],
        opportunities: [
          '🚀 Long-term ambassador partnerships for exponential growth',
          '💥 Co-creation opportunities with viral creators',
          '🔥 User-generated content campaigns for organic growth',
          '📈 Cross-platform content amplification for maximum reach'
        ]
      },
      insights: {
        marketSize: industry.marketSize,
        competition: industry.competition,
        roi: industry.avgROI,
        timeline: budget.timeline,
        growthPotential: industry.growthPotential,
        timeTo10x: industry.timeTo10x,
        revenuePotential: budget.revenuePotential,
        successFactors: [
          '🚀 Viral content creation and distribution',
          '💥 Authentic creator partnerships',
          '🔥 High-quality, shareable content',
          '📊 Consistent brand messaging across platforms',
          '🎯 Data-driven optimization and scaling',
          '🤝 Community engagement and user-generated content'
        ]
      },
      nextSteps: [
        '🚀 Create viral campaign brief with growth hooks',
        '🎯 Research and shortlist high-engagement creators',
        '📅 Develop viral content calendar and posting schedule',
        '📊 Set up analytics and viral tracking tools',
        '🔥 Plan launch strategy with viral potential timeline'
      ]
    }
  }



  const handleShareReport = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My 10X Growth Strategy Report',
        text: 'Check out my personalized influencer marketing strategy!',
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Report link copied to clipboard!')
    }
  }

  const getTrustIndicators = (step: number) => {
    // Customize based on current step
    const stepCustomizations = [
      {
        indicators: [
          {
            icon: <CheckCircle className="w-4 h-4 text-green-500" />,
            text: "Industry Insights",
            description: "Based on your industry"
          },
          {
            icon: <Shield className="w-4 h-4 text-blue-500" />,
            text: "Market Analysis",
            description: "Competitive insights"
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
            icon: <Target className="w-4 h-4 text-green-500" />,
            text: "Goal-Oriented",
            description: "Tailored to your objectives"
          },
          {
            icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
            text: "Growth Focused",
            description: "Scalable strategies"
          },
          {
            icon: <Lightbulb className="w-4 h-4 text-yellow-500" />,
            text: "Smart Insights",
            description: "AI-powered recommendations"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <Users className="w-4 h-4 text-green-500" />,
            text: "Creator Matching",
            description: "Find perfect creators"
          },
          {
            icon: <Star className="w-4 h-4 text-blue-500" />,
            text: "Quality Filter",
            description: "Vetted influencers"
          },
          {
            icon: <Award className="w-4 h-4 text-yellow-500" />,
            text: "Performance Based",
            description: "Proven track records"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <Rocket className="w-4 h-4 text-green-500" />,
            text: "Campaign Ready",
            description: "Ready to launch"
          },
          {
            icon: <Calendar className="w-4 h-4 text-blue-500" />,
            text: "Timeline Optimized",
            description: "Perfect timing"
          },
          {
            icon: <BarChart3 className="w-4 h-4 text-yellow-500" />,
            text: "ROI Focused",
            description: "Measurable results"
          }
        ]
      },
      {
        indicators: [
          {
            icon: <Heart className="w-4 h-4 text-green-500" />,
            text: "Personal Touch",
            description: "Customized for you"
          },
          {
            icon: <Mail className="w-4 h-4 text-blue-500" />,
            text: "Instant Delivery",
            description: "Get your report now"
          },
          {
            icon: <Share2 className="w-4 h-4 text-yellow-500" />,
            text: "Share Ready",
            description: "Easy to share online"
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
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Your 10X Growth Strategy is Ready!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your responses, we've created a personalized strategy to 10X your sales and growth through influencer marketing.
            </p>
          </motion.div>

          {reportData && (
            <div className="space-y-8">
              {/* Executive Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-purple-500" />
                  Executive Summary
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <DollarIcon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm text-gray-600">Revenue Potential</p>
                    <p className="text-2xl font-bold text-purple-600">{reportData.insights.revenuePotential}</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <TargetIcon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm text-gray-600">Growth Potential</p>
                    <p className="text-2xl font-bold text-blue-600">{reportData.insights.growthPotential}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <UsersIcon className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <p className="text-sm text-gray-600">Time to 10X</p>
                    <p className="text-2xl font-bold text-green-600">{reportData.insights.timeTo10x}</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm text-gray-600">Expected ROI</p>
                    <p className="text-2xl font-bold text-orange-600">{reportData.insights.roi}</p>
                  </div>
                </div>
              </motion.div>

              {/* Strategy Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
                  Strategic Recommendations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {reportData.recommendations.strategy.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Personalized Insights */}
              {reportData.personalizedInsights && (
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
                      <p className="text-gray-700 mb-2">{reportData.personalizedInsights.personalization.strategy}</p>
                      <p className="text-gray-700 mb-2"><strong>Focus:</strong> {reportData.personalizedInsights.personalization.focus}</p>
                      <p className="text-gray-700"><strong>Timeline:</strong> {reportData.personalizedInsights.personalization.timeline}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Unique Factors</h3>
                      <div className="space-y-2">
                        {reportData.personalizedInsights.uniqueFactors.map((factor, index) => (
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

              {/* Platform & Budget Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <GlobeIcon className="w-5 h-5 mr-2 text-blue-500" />
                    Platform Strategy
                  </h3>
                  <div className="space-y-4">
                    {reportData.recommendations.platform.map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-700">{platform}</span>
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <DollarIcon className="w-5 h-5 mr-2 text-green-500" />
                    Budget Allocation
                  </h3>
                  <div className="space-y-4">
                    {reportData.recommendations.budget.map((budget, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-gray-700">{budget}</span>
                        <Zap className="w-4 h-4 text-green-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Timeline & Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-500" />
                    Campaign Timeline
                  </h3>
                  <div className="space-y-3">
                    {reportData.recommendations.timeline.map((timeline, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{timeline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-orange-500" />
                    Next Steps
                  </h3>
                  <div className="space-y-3">
                    {reportData.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Success Factors & Risks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-500" />
                    Success Factors
                  </h3>
                  <div className="space-y-3">
                    {reportData.insights.successFactors.map((factor, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                    Risk Mitigation
                  </h3>
                  <div className="space-y-3">
                    {reportData.recommendations.risks.map((risk, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Your 10X Strategy is Ready!</h3>
                <p className="text-lg mb-6 opacity-90">
                  Your personalized report is complete and saved. View it online or share it with your team.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={handleShareReport}
                    className="bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share Report
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Ensure currentStep is within bounds
  const safeCurrentStep = Math.max(0, Math.min(currentStep, questionSections.length - 1))
  const currentSection = questionSections[safeCurrentStep]
  const progress = ((safeCurrentStep + 1) / questionSections.length) * 100
  
  // Debug logging
  console.log('Current Step:', currentStep)
  console.log('Safe Current Step:', safeCurrentStep)
  console.log('Current Section Title:', currentSection.title)
  console.log('All Section Titles:', questionSections.map(s => s.title))
  console.log('Current Section Questions:', currentSection.questions.length)
  console.log('Quiz Data Keys:', Object.keys(quizData))

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar currentPage="quiz" />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Enhanced Progress Bar */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Progress</span>
                <div className="text-lg font-bold text-gray-900">
                  Step {safeCurrentStep + 1} of {questionSections.length}: {currentSection.title}
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-gray-500">Completion</span>
              <div className="text-lg font-bold text-purple-600">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </motion.div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {questionSections.map((section, index) => (
              <span key={index} className={`${index === safeCurrentStep ? 'text-purple-600 font-medium' : ''} ${index <= safeCurrentStep ? 'opacity-100' : 'opacity-50'}`}>
                {section.title}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Section Header */}
        <motion.div
          key={`section-${safeCurrentStep}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 bg-white rounded-2xl p-8 shadow-lg"
        >
          {/* Debug Info - Remove this later */}
          <div className="mb-4 p-2 bg-yellow-100 text-yellow-800 text-xs rounded">
            DEBUG: Step {currentStep} → Safe Step {safeCurrentStep} - {currentSection.title}
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mr-6">
              <div className="text-3xl">{currentSection.icon}</div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentSection.title}</h1>
              <p className="text-lg text-gray-600">
                Let's understand your {currentSection.title.toLowerCase()} to create the perfect strategy.
              </p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            {getTrustIndicators(safeCurrentStep).map((indicator, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 text-center">
                {indicator.icon}
                <span className="text-sm font-medium text-gray-700">{indicator.text}</span>
                <span className="text-xs text-gray-500">{indicator.description}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Questions */}
        <motion.div
          key={`questions-${safeCurrentStep}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {currentSection.questions.map((question, index) => (
            <div key={question.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                    {question.question}
                  </h3>
                  <p className="text-gray-500 mt-2">Select the option that best describes your situation</p>
                </div>
              </div>

              <div className="space-y-4">
                {question.type === 'select' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {question.options.map((option) => {
                      const currentAnswer = quizData[question.id as keyof ComprehensiveQuizData] as string
                      const isSelected = currentAnswer === option.value
                      
                      return (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(question.id, option.value)}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                            isSelected
                              ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700 shadow-lg shadow-purple-100'
                              : 'border-gray-200 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg transition-colors ${
                              isSelected 
                                ? 'bg-purple-100 text-purple-600' 
                                : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                            }`}>
                              <span className="text-2xl">{option.icon}</span>
                            </div>
                            <div className="flex-1">
                              <span className="font-semibold text-lg block">{option.label}</span>
                              {option.description && (
                                <span className="text-sm text-gray-500 mt-1 block">{option.description}</span>
                              )}
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}

                {question.type === 'multi-select' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {question.options.map((option) => {
                      const currentAnswers = quizData[question.id as keyof ComprehensiveQuizData] as string[] || []
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
                    value={quizData[question.id as keyof ComprehensiveQuizData] as string || ''}
                    onChange={(e) => handleAnswer(question.id, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {currentStep === questionSections.length - 1 ? (
            <button
              onClick={() => {
                setIsComplete(true)
                generateReport()
              }}
              disabled={!canProceed() || isLoading}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Generating Report...' : 'Generate Report'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 