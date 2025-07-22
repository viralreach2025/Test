-- Enhanced Quiz Results Tables for 10X Growth Personalization

-- Brand Quiz Results Table (NEW)
CREATE TABLE IF NOT EXISTS enhanced_brand_quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_type TEXT NOT NULL DEFAULT 'brand',
  
  -- Basic Business Info
  industry TEXT NOT NULL,
  company_size TEXT NOT NULL,
  influencer_budget TEXT NOT NULL,
  
  -- Goals & Strategy
  primary_goals TEXT[] NOT NULL,
  target_audience TEXT NOT NULL,
  platforms TEXT[] NOT NULL,
  
  -- Creator Strategy
  creator_size TEXT NOT NULL,
  creator_criteria TEXT[] NOT NULL,
  previous_experience TEXT NOT NULL,
  
  -- Campaign Details
  campaign_objective TEXT NOT NULL,
  campaign_duration TEXT NOT NULL,
  content_preferences TEXT[] NOT NULL,
  
  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  
  -- Generated Insights
  growth_potential TEXT,
  time_to_10x TEXT,
  revenue_potential TEXT,
  expected_roi TEXT,
  
  -- Report Data (JSON)
  report_data JSONB,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Creator Quiz Results Table (NEW)
CREATE TABLE IF NOT EXISTS enhanced_creator_quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_type TEXT NOT NULL DEFAULT 'creator',
  
  -- Basic Profile
  platform TEXT NOT NULL,
  followers TEXT NOT NULL,
  engagement TEXT NOT NULL,
  niche TEXT NOT NULL,
  experience TEXT NOT NULL,
  
  -- Content Strategy
  content_type TEXT[] NOT NULL,
  posting_frequency TEXT NOT NULL,
  content_quality TEXT NOT NULL,
  
  -- Monetization
  current_income TEXT NOT NULL,
  income_sources TEXT[] NOT NULL,
  pricing_strategy TEXT NOT NULL,
  
  -- Growth & Analytics
  growth_rate TEXT NOT NULL,
  analytics_tools TEXT[] NOT NULL,
  
  -- Brand & Partnerships
  brand_alignment TEXT[] NOT NULL,
  partnership_goals TEXT[] NOT NULL,
  
  -- Goals & Aspirations
  short_term_goals TEXT[] NOT NULL,
  target_income TEXT NOT NULL,
  
  -- Contact Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Generated Insights
  growth_multiplier TEXT,
  time_to_10x TEXT,
  target_income_potential TEXT,
  avg_engagement TEXT,
  
  -- Report Data (JSON)
  report_data JSONB,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_enhanced_brand_quiz_industry ON enhanced_brand_quiz_results(industry);
CREATE INDEX IF NOT EXISTS idx_enhanced_brand_quiz_budget ON enhanced_brand_quiz_results(influencer_budget);
CREATE INDEX IF NOT EXISTS idx_enhanced_brand_quiz_email ON enhanced_brand_quiz_results(email);
CREATE INDEX IF NOT EXISTS idx_enhanced_brand_quiz_created_at ON enhanced_brand_quiz_results(created_at);

CREATE INDEX IF NOT EXISTS idx_enhanced_creator_quiz_platform ON enhanced_creator_quiz_results(platform);
CREATE INDEX IF NOT EXISTS idx_enhanced_creator_quiz_income ON enhanced_creator_quiz_results(current_income);
CREATE INDEX IF NOT EXISTS idx_enhanced_creator_quiz_email ON enhanced_creator_quiz_results(email);
CREATE INDEX IF NOT EXISTS idx_enhanced_creator_quiz_created_at ON enhanced_creator_quiz_results(created_at);

-- Row Level Security (RLS) policies
ALTER TABLE enhanced_brand_quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE enhanced_creator_quiz_results ENABLE ROW LEVEL SECURITY;

-- Allow insert for all users (for quiz submissions)
CREATE POLICY "Allow insert for all users" ON enhanced_brand_quiz_results
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert for all users" ON enhanced_creator_quiz_results
  FOR INSERT WITH CHECK (true);

-- Allow read for all users (for viewing reports)
CREATE POLICY "Allow read for all users" ON enhanced_brand_quiz_results
  FOR SELECT USING (true);

CREATE POLICY "Allow read for all users" ON enhanced_creator_quiz_results
  FOR SELECT USING (true);

-- Allow read for authenticated users (for analytics)
CREATE POLICY "Allow read for authenticated users" ON enhanced_brand_quiz_results
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow read for authenticated users" ON enhanced_creator_quiz_results
  FOR SELECT USING (auth.role() = 'authenticated');

-- Functions for analytics
CREATE OR REPLACE FUNCTION get_enhanced_quiz_analytics()
RETURNS TABLE (
  total_brand_submissions BIGINT,
  total_creator_submissions BIGINT,
  total_submissions BIGINT,
  avg_brand_roi NUMERIC,
  avg_creator_growth NUMERIC
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (SELECT COUNT(*) FROM enhanced_brand_quiz_results) as total_brand_submissions,
    (SELECT COUNT(*) FROM enhanced_creator_quiz_results) as total_creator_submissions,
    (SELECT COUNT(*) FROM enhanced_brand_quiz_results) + (SELECT COUNT(*) FROM enhanced_creator_quiz_results) as total_submissions,
    (SELECT AVG(CAST(REPLACE(expected_roi, '%', '') AS NUMERIC)) FROM enhanced_brand_quiz_results WHERE expected_roi IS NOT NULL) as avg_brand_roi,
    (SELECT AVG(CAST(REPLACE(growth_multiplier, 'x', '') AS NUMERIC)) FROM enhanced_creator_quiz_results WHERE growth_multiplier IS NOT NULL) as avg_creator_growth;
END;
$$ LANGUAGE plpgsql;

-- Function to get industry insights
CREATE OR REPLACE FUNCTION get_enhanced_industry_insights()
RETURNS TABLE (
  industry TEXT,
  submission_count BIGINT,
  avg_budget TEXT,
  top_platforms TEXT[]
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    br.industry,
    COUNT(*) as submission_count,
    MODE() WITHIN GROUP (ORDER BY br.influencer_budget) as avg_budget,
    ARRAY_AGG(DISTINCT unnest(br.platforms)) as top_platforms
  FROM enhanced_brand_quiz_results br
  GROUP BY br.industry
  ORDER BY submission_count DESC;
END;
$$ LANGUAGE plpgsql;

-- Function to get platform insights
CREATE OR REPLACE FUNCTION get_enhanced_platform_insights()
RETURNS TABLE (
  platform TEXT,
  submission_count BIGINT,
  avg_engagement TEXT,
  avg_income TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    cr.platform,
    COUNT(*) as submission_count,
    MODE() WITHIN GROUP (ORDER BY cr.engagement) as avg_engagement,
    MODE() WITHIN GROUP (ORDER BY cr.current_income) as avg_income
  FROM enhanced_creator_quiz_results cr
  GROUP BY cr.platform
  ORDER BY submission_count DESC;
END;
$$ LANGUAGE plpgsql; 