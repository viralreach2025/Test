import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { quizData, userType } = body

    // Use OpenAI for intelligent recommendations
    const recommendations = await generateAIRecommendations(quizData, userType)

    return NextResponse.json({ recommendations })

  } catch (error) {
    console.error('AI recommendations error:', error)
    
    try {
      const body = await request.json()
      const { quizData, userType } = body
      
      // Fallback to rule-based system if OpenAI fails
      const fallbackRecommendations = generateFallbackRecommendations(quizData, userType)
      return NextResponse.json({ recommendations: fallbackRecommendations })
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError)
      return NextResponse.json(
        { error: 'Failed to generate recommendations' },
        { status: 500 }
      )
    }
  }
}

async function generateAIRecommendations(quizData: any, userType: string) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured')
  }

  const systemPrompt = userType === 'brand' 
    ? `You are an expert influencer marketing consultant with 10+ years of experience helping brands succeed with influencer marketing campaigns. You specialize in strategic planning, creator selection, budget optimization, and ROI maximization.

Your expertise includes:
- Industry-specific influencer marketing strategies
- Platform optimization (Instagram, TikTok, YouTube, LinkedIn, etc.)
- Creator selection and relationship building
- Budget allocation and ROI optimization
- Content strategy and campaign planning
- Analytics and performance measurement
- Risk management and compliance

Provide comprehensive, actionable recommendations based on the brand's specific situation. Focus on practical, implementable advice that drives real results.`

    : `You are an expert content creator and influencer marketing strategist with deep experience helping creators monetize their content, grow their audience, and build successful partnerships with brands.

Your expertise includes:
- Content strategy and platform optimization
- Monetization strategies and income diversification
- Brand partnership development and negotiation
- Audience growth and engagement tactics
- Personal branding and career development
- Analytics and performance optimization
- Industry trends and best practices

Provide comprehensive, actionable advice that helps creators build sustainable, profitable careers in the digital space.`

  const userPrompt = userType === 'brand'
    ? `Generate comprehensive influencer marketing recommendations for this brand based on their detailed assessment:

BRAND PROFILE:
- Industry: ${quizData.industry || 'Not specified'}
- Company Size: ${quizData.companySize || 'Not specified'}
- Product Type: ${quizData.productType || 'Not specified'}
- Company: ${quizData.company || 'Not specified'}

FINANCIAL INFORMATION:
- Total Marketing Budget: ${quizData.totalMarketingBudget || 'Not specified'}
- Influencer Marketing Budget: ${quizData.influencerBudget || 'Not specified'}
- Current Monthly Marketing Spend: ${quizData.currentMarketingSpend || 'Not specified'}

GOALS & OBJECTIVES:
- Primary Goals: ${Array.isArray(quizData.primaryGoals) ? quizData.primaryGoals.join(', ') : 'Not specified'}
- KPI Goals: ${Array.isArray(quizData.kpiGoals) ? quizData.kpiGoals.join(', ') : 'Not specified'}
- Target ROI: ${quizData.targetROI || 'Not specified'}

TARGET AUDIENCE:
- Primary Audience: ${quizData.targetAudience || 'Not specified'}
- Market Size: ${quizData.targetMarket || 'Not specified'}
- Audience Interests: ${Array.isArray(quizData.audienceInterests) ? quizData.audienceInterests.join(', ') : 'Not specified'}

PLATFORM & CONTENT STRATEGY:
- Platforms: ${Array.isArray(quizData.platforms) ? quizData.platforms.join(', ') : 'Not specified'}
- Content Preferences: ${Array.isArray(quizData.contentPreferences) ? quizData.contentPreferences.join(', ') : 'Not specified'}
- Content Tone: ${quizData.contentTone || 'Not specified'}

CREATOR STRATEGY:
- Creator Criteria: ${Array.isArray(quizData.creatorCriteria) ? quizData.creatorCriteria.join(', ') : 'Not specified'}
- Preferred Creator Size: ${quizData.creatorSize || 'Not specified'}
- Creator Experience Level: ${quizData.creatorExperience || 'Not specified'}

CAMPAIGN DETAILS:
- Campaign Objective: ${quizData.campaignObjective || 'Not specified'}
- Campaign Duration: ${quizData.campaignDuration || 'Not specified'}
- Launch Timeline: ${quizData.launchTimeline || 'Not specified'}

EXPERIENCE & COMPETITION:
- Previous Experience: ${quizData.previousExperience || 'Not specified'}
- Competitive Landscape: ${quizData.competitiveLandscape || 'Not specified'}
- Unique Value Proposition: ${quizData.uniqueValue || 'Not specified'}

Please provide detailed recommendations in the following JSON format:
{
  "strategy": ["3-5 strategic recommendations for overall approach"],
  "platform": ["3-5 platform-specific recommendations"],
  "creator": ["3-5 creator selection and partnership recommendations"],
  "content": ["3-5 content strategy recommendations"],
  "budget": ["3-5 budget allocation and optimization recommendations"],
  "timeline": ["3-5 timeline and campaign planning recommendations"],
  "metrics": ["3-5 KPI and measurement recommendations"],
  "risks": ["2-3 potential risks and mitigation strategies"],
  "opportunities": ["2-3 growth and expansion opportunities"]
}

Make recommendations specific to their industry, budget, goals, and target audience. Focus on actionable, implementable advice.`

    : `Generate comprehensive recommendations for this content creator based on their detailed assessment:

CREATOR PROFILE:
- Primary Platform: ${quizData.platform || 'Not specified'}
- Follower Count: ${quizData.followers || 'Not specified'}
- Engagement Rate: ${quizData.engagementRate || 'Not specified'}
- Niche: ${quizData.niche || 'Not specified'}
- Experience Level: ${quizData.experience || 'Not specified'}

CONTENT STRATEGY:
- Content Types: ${Array.isArray(quizData.contentTypes) ? quizData.contentTypes.join(', ') : 'Not specified'}
- Posting Frequency: ${quizData.postingFrequency || 'Not specified'}
- Content Quality: ${quizData.contentQuality || 'Not specified'}
- Target Demographics: ${quizData.targetDemographics || 'Not specified'}
- Audience Interests: ${Array.isArray(quizData.audienceInterests) ? quizData.audienceInterests.join(', ') : 'Not specified'}

MONETIZATION:
- Current Monthly Income: ${quizData.currentIncome || 'Not specified'}
- Income Sources: ${Array.isArray(quizData.incomeSources) ? quizData.incomeSources.join(', ') : 'Not specified'}
- Pricing Strategy: ${quizData.pricingStrategy || 'Not specified'}
- Brand Partnerships: ${quizData.brandPartnerships || 'Not specified'}

GROWTH & ANALYTICS:
- Monthly Growth Rate: ${quizData.growthRate || 'Not specified'}
- Analytics Tools: ${Array.isArray(quizData.analyticsTools) ? quizData.analyticsTools.join(', ') : 'Not specified'}
- Performance Metrics: ${Array.isArray(quizData.performanceMetrics) ? quizData.performanceMetrics.join(', ') : 'Not specified'}
- Growth Methods: ${quizData.audienceGrowth || 'Not specified'}

BRAND & PARTNERSHIPS:
- Brand Alignment: ${Array.isArray(quizData.brandAlignment) ? quizData.brandAlignment.join(', ') : 'Not specified'}
- Partnership Goals: ${Array.isArray(quizData.partnershipGoals) ? quizData.partnershipGoals.join(', ') : 'Not specified'}
- Collaboration Preferences: ${Array.isArray(quizData.collaborationPreferences) ? quizData.collaborationPreferences.join(', ') : 'Not specified'}
- Exclusivity: ${quizData.exclusivity || 'Not specified'}

TECHNICAL & SKILLS:
- Equipment: ${Array.isArray(quizData.equipment) ? quizData.equipment.join(', ') : 'Not specified'}
- Skills: ${Array.isArray(quizData.skills) ? quizData.skills.join(', ') : 'Not specified'}
- Team Size: ${quizData.teamSize || 'Not specified'}
- Time Investment: ${quizData.timeInvestment || 'Not specified'}

GOALS & ASPIRATIONS:
- Short-term Goals: ${Array.isArray(quizData.shortTermGoals) ? quizData.shortTermGoals.join(', ') : 'Not specified'}
- Long-term Goals: ${Array.isArray(quizData.longTermGoals) ? quizData.longTermGoals.join(', ') : 'Not specified'}
- Target Income: ${quizData.targetIncome || 'Not specified'}
- Career Path: ${quizData.careerPath || 'Not specified'}

COMPETITION & MARKET:
- Competitive Advantage: ${quizData.competitiveAdvantage || 'Not specified'}
- Market Position: ${quizData.marketPosition || 'Not specified'}
- Unique Value: ${quizData.uniqueValue || 'Not specified'}
- Challenges: ${Array.isArray(quizData.challenges) ? quizData.challenges.join(', ') : 'Not specified'}

Please provide detailed recommendations in the following JSON format:
{
  "monetization": ["3-5 monetization strategy recommendations"],
  "content": ["3-5 content optimization recommendations"],
  "platform": ["3-5 platform strategy recommendations"],
  "growth": ["3-5 audience growth recommendations"],
  "partnerships": ["3-5 brand partnership recommendations"],
  "pricing": ["3-5 pricing and negotiation recommendations"],
  "branding": ["3-5 personal branding recommendations"],
  "analytics": ["3-5 analytics and measurement recommendations"],
  "opportunities": ["2-3 career and business opportunities"]
}

Make recommendations specific to their platform, niche, experience level, and goals. Focus on actionable, implementable advice that will help them grow their income and influence.`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    // Parse the JSON response
    try {
      const recommendations = JSON.parse(response)
      return recommendations
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError)
      throw new Error('Invalid response format from OpenAI')
    }

  } catch (error) {
    console.error('OpenAI API error:', error)
    throw error
  }
}

// Fallback rule-based system
function generateFallbackRecommendations(quizData: any, userType: string) {
  if (userType === 'brand') {
    return generateBrandRecommendations(quizData)
  } else {
    return generateCreatorRecommendations(quizData)
  }
}

function generateBrandRecommendations(quizData: any) {
  const recommendations = {
    strategy: [],
    platform: [],
    creator: [],
    content: [],
    budget: [],
    timeline: [],
    metrics: [],
    risks: [],
    opportunities: []
  }

  // Industry-specific recommendations
  switch (quizData.industry) {
    case 'beauty':
      recommendations.strategy.push('Focus on authentic product reviews and tutorials')
      recommendations.platform.push('Instagram and TikTok are most effective for beauty brands')
      recommendations.creator.push('Partner with micro-influencers (10K-100K) for higher engagement')
      break
    case 'fashion':
      recommendations.strategy.push('Use lifestyle content and outfit inspiration posts')
      recommendations.platform.push('Instagram and Pinterest are key for fashion brands')
      recommendations.creator.push('Mix of fashion bloggers and lifestyle creators')
      break
    case 'fitness':
      recommendations.strategy.push('Focus on transformation stories and workout content')
      recommendations.platform.push('YouTube and Instagram for fitness content')
      recommendations.creator.push('Certified trainers and fitness enthusiasts')
      break
    case 'tech':
      recommendations.strategy.push('Educational content and product demonstrations')
      recommendations.platform.push('YouTube and LinkedIn for tech content')
      recommendations.creator.push('Tech reviewers and industry experts')
      break
  }

  // Budget-based recommendations
  const influencerBudget = quizData.influencerBudget || quizData.budget
  if (influencerBudget === 'under-1k' || influencerBudget === 'under-500') {
    recommendations.budget.push('Start with nano-influencers (1K-10K followers)')
    recommendations.budget.push('Focus on one platform initially')
    recommendations.budget.push('Offer product exchanges instead of cash payments')
  } else if (influencerBudget === '1k-5k' || influencerBudget === '1000-5000') {
    recommendations.budget.push('Mix of micro and nano-influencers')
    recommendations.budget.push('Allocate 70% to creators, 30% to tools/analytics')
    recommendations.budget.push('Consider performance-based compensation')
  } else if (influencerBudget === '10000+' || influencerBudget === '100k+') {
    recommendations.budget.push('Multi-platform campaign with macro-influencers')
    recommendations.budget.push('Invest in influencer management tools')
    recommendations.budget.push('Consider celebrity partnerships for major launches')
  }

  // Goals-based recommendations
  const primaryGoals = quizData.primaryGoals || quizData.goals || []
  if (primaryGoals.includes('brand-awareness')) {
    recommendations.strategy.push('Focus on reach and impressions over direct sales')
    recommendations.metrics.push('Track brand mentions and social media growth')
  }
  if (primaryGoals.includes('sales-conversion') || primaryGoals.includes('sales')) {
    recommendations.strategy.push('Use affiliate links and discount codes')
    recommendations.metrics.push('Track conversion rates and ROI')
    recommendations.content.push('Product demonstrations and reviews')
  }
  if (primaryGoals.includes('customer-engagement') || primaryGoals.includes('engagement')) {
    recommendations.strategy.push('Interactive content like polls and Q&As')
    recommendations.metrics.push('Monitor engagement rates and comments')
  }

  // Platform-specific recommendations
  const platforms = quizData.platforms || [quizData.platform]
  if (platforms.includes('instagram')) {
    recommendations.content.push('High-quality photos and Instagram Stories')
    recommendations.content.push('Use Instagram Reels for trending content')
    recommendations.metrics.push('Track Instagram Insights for detailed analytics')
  }
  if (platforms.includes('tiktok')) {
    recommendations.content.push('Short, engaging videos with trending sounds')
    recommendations.content.push('Participate in viral challenges')
    recommendations.metrics.push('Focus on views and shares over followers')
  }
  if (platforms.includes('youtube')) {
    recommendations.content.push('Long-form educational content')
    recommendations.content.push('Product reviews and tutorials')
    recommendations.metrics.push('Track watch time and subscriber growth')
  }
  if (platforms.includes('linkedin')) {
    recommendations.content.push('Professional thought leadership content')
    recommendations.content.push('Industry insights and B2B focused content')
    recommendations.metrics.push('Track engagement and professional network growth')
  }

  // Experience-based recommendations
  const previousExperience = quizData.previousExperience || quizData.experience
  if (previousExperience === 'none') {
    recommendations.strategy.push('Start with a pilot program of 3-5 creators')
    recommendations.risks.push('Begin with smaller budgets to test effectiveness')
    recommendations.timeline.push('Allow 2-3 months for learning and optimization')
  } else if (previousExperience === 'advanced' || previousExperience === '10+') {
    recommendations.strategy.push('Implement advanced attribution tracking')
    recommendations.opportunities.push('Consider influencer ambassador programs')
    recommendations.metrics.push('Advanced analytics and predictive modeling')
  }

  // Target audience recommendations
  const targetAudience = quizData.targetAudience
  switch (targetAudience) {
    case 'gen-z':
      recommendations.platform.push('TikTok and Instagram are essential')
      recommendations.content.push('Authentic, unfiltered content')
      recommendations.content.push('Use trending formats and sounds')
      break
    case 'millennials':
      recommendations.platform.push('Instagram and YouTube are most effective')
      recommendations.content.push('Value-driven content with storytelling')
      break
    case 'gen-x':
      recommendations.platform.push('Facebook and LinkedIn for professional content')
      recommendations.content.push('Educational and informative content')
      break
  }

  // Company size recommendations
  const companySize = quizData.companySize
  if (companySize === 'solo' || companySize === '2-10') {
    recommendations.strategy.push('Focus on micro and nano-influencers for cost-effectiveness')
    recommendations.budget.push('Start with smaller campaigns and scale based on results')
    recommendations.timeline.push('Allow 3-6 months to build relationships and see results')
  } else if (companySize === '51-200' || companySize === '201-1000') {
    recommendations.strategy.push('Build a diverse creator portfolio across different tiers')
    recommendations.opportunities.push('Consider long-term ambassador partnerships')
    recommendations.metrics.push('Implement comprehensive attribution tracking')
  }

  // Content preferences recommendations
  const contentPreferences = quizData.contentPreferences || []
  if (contentPreferences.includes('product-reviews')) {
    recommendations.content.push('Develop detailed product review guidelines')
    recommendations.content.push('Provide creators with product samples and specifications')
  }
  if (contentPreferences.includes('tutorials')) {
    recommendations.content.push('Create step-by-step tutorial templates')
    recommendations.content.push('Focus on educational value and problem-solving')
  }
  if (contentPreferences.includes('behind-scenes')) {
    recommendations.content.push('Share authentic behind-the-scenes content')
    recommendations.content.push('Build trust through transparency and authenticity')
  }

  // Creator criteria recommendations
  const creatorCriteria = quizData.creatorCriteria || []
  if (creatorCriteria.includes('engagement-rate')) {
    recommendations.creator.push('Prioritize engagement rate over follower count')
    recommendations.metrics.push('Track engagement rates and authentic interactions')
  }
  if (creatorCriteria.includes('brand-alignment')) {
    recommendations.creator.push('Focus on creators whose values align with your brand')
    recommendations.strategy.push('Develop brand guidelines for creator partnerships')
  }
  if (creatorCriteria.includes('authenticity')) {
    recommendations.creator.push('Partner with creators who maintain authentic voices')
    recommendations.content.push('Allow creators creative freedom within brand guidelines')
  }

  // Add default recommendations if none generated
  if (recommendations.strategy.length === 0) {
    recommendations.strategy.push('Start with a pilot program of 3-5 creators')
    recommendations.strategy.push('Focus on authentic partnerships over transactional relationships')
  }
  if (recommendations.platform.length === 0) {
    recommendations.platform.push('Instagram and TikTok are most effective for most brands')
  }
  if (recommendations.content.length === 0) {
    recommendations.content.push('Mix of product showcases and lifestyle content')
    recommendations.content.push('Encourage user-generated content and testimonials')
  }
  if (recommendations.budget.length === 0) {
    recommendations.budget.push('Allocate 70% to creator fees, 30% to tools and analytics')
  }
  if (recommendations.timeline.length === 0) {
    recommendations.timeline.push('Allow 2-3 months for campaign development and optimization')
  }

  return recommendations
}

function generateCreatorRecommendations(quizData: any) {
  const recommendations = {
    monetization: [],
    content: [],
    platform: [],
    growth: [],
    partnerships: [],
    pricing: [],
    branding: [],
    analytics: [],
    opportunities: []
  }

  // Platform-specific recommendations
  switch (quizData.platform) {
    case 'instagram':
      recommendations.content.push('Focus on high-quality photos and Stories')
      recommendations.content.push('Use Instagram Reels for algorithm favor')
      recommendations.monetization.push('Sponsored posts and affiliate marketing')
      recommendations.growth.push('Post consistently 1-2 times daily')
      break
    case 'tiktok':
      recommendations.content.push('Create trending content with popular sounds')
      recommendations.content.push('Post 2-3 times daily for maximum reach')
      recommendations.monetization.push('TikTok Creator Fund and brand partnerships')
      recommendations.growth.push('Engage with trending hashtags and challenges')
      break
    case 'youtube':
      recommendations.content.push('Long-form educational content')
      recommendations.content.push('Consistent upload schedule (weekly)')
      recommendations.monetization.push('AdSense, sponsorships, and merchandise')
      recommendations.growth.push('SEO optimization and thumbnail design')
      break
  }

  // Experience-based recommendations
  if (quizData.experience === 'beginner') {
    recommendations.monetization.push('Start with product collaborations and affiliate marketing')
    recommendations.growth.push('Focus on building authentic audience relationships')
    recommendations.pricing.push('Begin with lower rates to build portfolio')
  } else if (quizData.experience === 'advanced') {
    recommendations.monetization.push('Diversify into courses, consulting, and speaking')
    recommendations.opportunities.push('Consider launching your own products')
    recommendations.pricing.push('Premium pricing for exclusive partnerships')
  }

  // Income-based recommendations
  const currentIncome = quizData.currentIncome
  if (currentIncome === 'under-100') {
    recommendations.monetization.push('Focus on building audience and content quality')
    recommendations.pricing.push('Start with product exchanges and small collaborations')
  } else if (currentIncome === '1000-5000') {
    recommendations.monetization.push('Diversify income streams beyond sponsored posts')
    recommendations.pricing.push('Increase rates based on proven results')
  }

  // Add default recommendations
  if (recommendations.monetization.length === 0) {
    recommendations.monetization.push('Diversify your income streams beyond sponsored posts')
    recommendations.monetization.push('Consider affiliate marketing and product collaborations')
  }
  if (recommendations.content.length === 0) {
    recommendations.content.push('Focus on high-quality, authentic content')
    recommendations.content.push('Post consistently and engage with your audience')
  }
  if (recommendations.growth.length === 0) {
    recommendations.growth.push('Engage authentically with your audience')
    recommendations.growth.push('Collaborate with other creators in your niche')
  }

  return recommendations
} 