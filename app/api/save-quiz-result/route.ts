import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { quizData, reportData, userType } = await request.json()

    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase client not initialized' },
        { status: 500 }
      )
    }

    const tableName = userType === 'brand' ? 'enhanced_brand_quiz_results' : 'enhanced_creator_quiz_results'
    
    let resultData: any

    if (userType === 'brand') {
      resultData = {
        user_type: userType,
        // Basic Business Info
        industry: quizData.industry,
        company_size: quizData.companySize,
        influencer_budget: quizData.influencerBudget,
        
        // Goals & Strategy
        primary_goals: quizData.primaryGoals,
        target_audience: quizData.targetAudience,
        platforms: quizData.platforms,
        
        // Creator Strategy
        creator_size: quizData.creatorSize,
        creator_criteria: quizData.creatorCriteria,
        previous_experience: quizData.previousExperience,
        
        // Campaign Details
        campaign_objective: quizData.campaignObjective,
        campaign_duration: quizData.campaignDuration,
        content_preferences: quizData.contentPreferences,
        
        // Contact Information
        name: quizData.name,
        email: quizData.email,
        company: quizData.company,
        
        // Generated Insights
        growth_potential: reportData.insights.growthPotential,
        time_to_10x: reportData.insights.timeTo10x,
        revenue_potential: reportData.insights.revenuePotential,
        expected_roi: reportData.insights.roi,
        
        // Report Data (JSON)
        report_data: reportData,
        
        created_at: new Date().toISOString()
      }
    } else {
      resultData = {
        user_type: userType,
        // Basic Profile
        platform: quizData.platform,
        followers: quizData.followers,
        engagement: quizData.engagement,
        niche: quizData.niche,
        experience: quizData.experience,
        
        // Content Strategy
        content_type: quizData.contentType,
        posting_frequency: quizData.postingFrequency,
        content_quality: quizData.contentQuality,
        
        // Monetization
        current_income: quizData.currentIncome,
        income_sources: quizData.incomeSources,
        pricing_strategy: quizData.pricingStrategy,
        
        // Growth & Analytics
        growth_rate: quizData.growthRate,
        analytics_tools: quizData.analyticsTools,
        
        // Brand & Partnerships
        brand_alignment: quizData.brandAlignment,
        partnership_goals: quizData.partnershipGoals,
        
        // Goals & Aspirations
        short_term_goals: quizData.shortTermGoals,
        target_income: quizData.targetIncome,
        
        // Contact Information
        name: quizData.name,
        email: quizData.email,
        
        // Generated Insights
        growth_multiplier: reportData.insights.growthMultiplier,
        time_to_10x: reportData.insights.timeTo10x,
        target_income_potential: reportData.insights.targetIncomePotential,
        avg_engagement: reportData.insights.avgEngagement,
        
        // Report Data (JSON)
        report_data: reportData,
        
        created_at: new Date().toISOString()
      }
    }

    const { data, error } = await supabase
      .from(tableName)
      .insert([resultData])
      .select()

    if (error) {
      console.error('Error saving quiz result:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    console.log('Quiz result saved successfully to Supabase:', data)
    return NextResponse.json({ 
      success: true, 
      message: 'Data saved to Supabase',
      data 
    })

  } catch (error) {
    console.error('Error in save-quiz-result API:', error)
    return NextResponse.json(
      { error: 'Failed to save quiz result' },
      { status: 500 }
    )
  }
} 