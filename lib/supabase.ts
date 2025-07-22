import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Add validation and logging
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are missing:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey
  })
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Type definitions for your existing data
export interface WaitlistEntry {
  id?: string
  email: string
  user_type: 'brand' | 'creator'
  primary_goal?: string
  biggest_challenge?: string
  current_solution?: string
  budget_range?: string
  timeline?: string
  most_important?: string
  primary_platform?: string
  follower_count?: string
  content_niche?: string
  collaboration_experience?: string
  creator_challenge?: string
  creator_important?: string
  created_at?: string
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  company?: string
  subject: string
  message: string
  created_at?: string
}

// New types for profile and portfolio
export interface Profile {
  id: string
  username: string
  name: string
  role: string
  location: string
  bio: string
  avatar: string
  headline: string
  social: {
    instagram: string
    tiktok: string
    youtube: string
  }
  gallery: string[]
  created_at: string
  updated_at: string
}

export interface PortfolioItem {
  id: string
  profile_id: string
  title: string
  type: 'image' | 'video'
  file_url: string
  thumbnail_url?: string
  file_size: number
  duration?: number
  order_index: number
  created_at: string
  updated_at: string
}

// Enhanced Quiz Results Types (NEW TABLES)
export interface EnhancedBrandQuizResult {
  id?: string
  user_type: 'brand'
  // Basic Business Info
  industry: string
  company_size: string
  influencer_budget: string
  
  // Goals & Strategy
  primary_goals: string[]
  target_audience: string
  platforms: string[]
  
  // Creator Strategy
  creator_size: string
  creator_criteria: string[]
  previous_experience: string
  
  // Campaign Details
  campaign_objective: string
  campaign_duration: string
  content_preferences: string[]
  
  // Contact Information
  name: string
  email: string
  company: string
  
  // Generated Insights
  growth_potential: string
  time_to_10x: string
  revenue_potential: string
  expected_roi: string
  
  // Report Data
  report_data: any
  
  created_at?: string
}

export interface EnhancedCreatorQuizResult {
  id?: string
  user_type: 'creator'
  // Basic Profile
  platform: string
  followers: string
  engagement: string
  niche: string
  experience: string
  
  // Content Strategy
  content_type: string[]
  posting_frequency: string
  content_quality: string
  
  // Monetization
  current_income: string
  income_sources: string[]
  pricing_strategy: string
  
  // Growth & Analytics
  growth_rate: string
  analytics_tools: string[]
  
  // Brand & Partnerships
  brand_alignment: string[]
  partnership_goals: string[]
  
  // Goals & Aspirations
  short_term_goals: string[]
  target_income: string
  
  // Contact Information
  name: string
  email: string
  
  // Generated Insights
  growth_multiplier: string
  time_to_10x: string
  target_income_potential: string
  avg_engagement: string
  
  // Report Data
  report_data: any
  
  created_at?: string
} 