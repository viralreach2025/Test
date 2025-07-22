-- Fix RLS Policies for Enhanced Quiz Tables
-- Run this in your Supabase SQL Editor

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow insert for all users" ON enhanced_brand_quiz_results;
DROP POLICY IF EXISTS "Allow insert for all users" ON enhanced_creator_quiz_results;
DROP POLICY IF EXISTS "Allow read for all users" ON enhanced_brand_quiz_results;
DROP POLICY IF EXISTS "Allow read for all users" ON enhanced_creator_quiz_results;

-- Create new policies that allow all operations
CREATE POLICY "Allow all operations for enhanced brand quiz" ON enhanced_brand_quiz_results
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations for enhanced creator quiz" ON enhanced_creator_quiz_results
  FOR ALL USING (true) WITH CHECK (true);

-- Alternative: If you want more specific policies, use these instead:
-- CREATE POLICY "Allow insert for all users" ON enhanced_brand_quiz_results
--   FOR INSERT WITH CHECK (true);
-- 
-- CREATE POLICY "Allow read for all users" ON enhanced_brand_quiz_results
--   FOR SELECT USING (true);
-- 
-- CREATE POLICY "Allow insert for all users" ON enhanced_creator_quiz_results
--   FOR INSERT WITH CHECK (true);
-- 
-- CREATE POLICY "Allow read for all users" ON enhanced_creator_quiz_results
--   FOR SELECT USING (true);

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename IN ('enhanced_brand_quiz_results', 'enhanced_creator_quiz_results'); 