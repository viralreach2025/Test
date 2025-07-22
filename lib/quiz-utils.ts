import { supabase, EnhancedBrandQuizResult, EnhancedCreatorQuizResult } from './supabase'

// Enhanced personalization based on multiple factors
export const generatePersonalizedInsights = (quizData: any, userType: 'brand' | 'creator') => {
  if (userType === 'brand') {
    return generateBrandPersonalization(quizData)
  } else {
    return generateCreatorPersonalization(quizData)
  }
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

// Save quiz results to Supabase
export const saveQuizResult = async (quizData: any, reportData: any, userType: 'brand' | 'creator') => {
  if (!supabase) {
    console.error('Supabase client not initialized')
    return null
  }

  try {
    const tableName = userType === 'brand' ? 'enhanced_brand_quiz_results' : 'enhanced_creator_quiz_results'
    
    const resultData = {
      user_type: userType,
      ...quizData,
      report_data: reportData,
      created_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .from(tableName)
      .insert([resultData])
      .select()

    if (error) {
      console.error('Error saving quiz result:', error)
      return null
    }

    console.log('Quiz result saved successfully:', data)
    return data[0]
  } catch (error) {
    console.error('Error saving quiz result:', error)
    return null
  }
}

// Get quiz analytics
export const getQuizAnalytics = async () => {
  if (!supabase) {
    console.error('Supabase client not initialized')
    return null
  }

  try {
    // Get brand quiz analytics
    const { data: brandResults, error: brandError } = await supabase
      .from('enhanced_brand_quiz_results')
      .select('*')

    // Get creator quiz analytics
    const { data: creatorResults, error: creatorError } = await supabase
      .from('enhanced_creator_quiz_results')
      .select('*')

    if (brandError || creatorError) {
      console.error('Error fetching quiz analytics:', { brandError, creatorError })
      return null
    }

    return {
      brandResults: brandResults || [],
      creatorResults: creatorResults || [],
      totalSubmissions: (brandResults?.length || 0) + (creatorResults?.length || 0)
    }
  } catch (error) {
    console.error('Error getting quiz analytics:', error)
    return null
  }
} 