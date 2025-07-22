"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ChevronDown, Menu, X, ArrowRight, Search, Shield, TrendingUp, Users, DollarSign, BarChart3, MessageSquare, Star, Clock, Camera, Target, Eye, Zap, Crown, TestTube, Lightbulb, Globe, Heart, Send, Instagram, Video, Play, User, Loader2, Trophy, Settings, Calculator } from 'lucide-react'
import HeroDemo from './components/HeroDemo'
import { DashboardPreview } from './components/DashboardPreview'
import { saveWaitlistEntry } from '../lib/database'
import WaitlistQuiz from './components/WaitlistQuiz'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import { getAnimationProps, shouldDisableAnimations } from '../lib/utils'

// Add gtag type declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Typewriter component
function TypewriterText({ text, speed = 100, deleteSpeed = 50, delay = 2000 }: { 
  text: string; 
  speed?: number; 
  deleteSpeed?: number; 
  delay?: number; 
}) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delay)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(text.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentIndex(0)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text, speed, deleteSpeed, delay])

  return (
    <span className="inline-block">
      {displayText}
      <span className="inline-block w-0.5 h-6 bg-purple-500 ml-1 animate-pulse"></span>
    </span>
  )
}

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isAlreadyOnList, setIsAlreadyOnList] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [error, setError] = useState('')

  // Handle hash navigation when page loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash === '#waitlist') {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          const waitlistElement = document.getElementById('waitlist')
          if (waitlistElement) {
            waitlistElement.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [])

  const handleQuizComplete = async (quizData: any) => {
    console.log('🚀 Quiz completion started with data:', quizData)
    setIsLoading(true)
    setError('')

    // Track quiz completion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_complete', {
        user_type: quizData.userType,
        primary_goal: quizData.primaryGoal,
        budget_range: quizData.budgetRange,
        page_location: window.location.href
      });
    }

    try {
      // Save quiz data to waitlist
      console.log('📝 Saving waitlist entry...')
      const result = await saveWaitlistEntry({
        email: quizData.email,
        user_type: quizData.userType,
        primary_goal: quizData.primaryGoal,
        biggest_challenge: quizData.biggestChallenge,
        budget_range: quizData.budgetRange,
        timeline: quizData.timeline,
        follower_count: quizData.followerCount,
        primary_platform: quizData.preferredPlatform,
        collaboration_experience: quizData.monthlyCampaigns
      })
      
      console.log('📝 Waitlist entry result:', result)
      
      if (result.alreadyExists) {
        console.log('⚠️ User already exists, showing existing user message')
        
        // Track existing user
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'waitlist_existing_user', {
            user_type: quizData.userType,
            page_location: window.location.href
          });
        }
        
        setIsAlreadyOnList(true)
        setIsSubmitted(true)
        setShowQuiz(false)
      } else if (result.success) {
        console.log('✅ Waitlist entry saved, attempting to send email...')
        
        // Track successful waitlist signup
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'waitlist_signup', {
            user_type: quizData.userType,
            primary_goal: quizData.primaryGoal,
            budget_range: quizData.budgetRange,
            page_location: window.location.href
          });
        }
        
        // New user added successfully - try to send welcome email
        try {
          const emailResponse = await fetch('/api/send-waitlist-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: quizData.email,
              userType: quizData.userType,
              template: 'quiz-completion',
              data: {
                ...quizData,
                primary_goal: quizData.primaryGoal,
                biggest_challenge: quizData.biggestChallenge,
                budget_range: quizData.budgetRange,
                timeline: quizData.timeline,
                follower_count: quizData.followerCount,
                primary_platform: quizData.preferredPlatform,
                collaboration_experience: quizData.monthlyCampaigns
              }
            }),
          })
          
          if (!emailResponse.ok) {
            const emailError = await emailResponse.json()
            console.error('📧 Email API error:', emailError)
          } else {
            console.log('✅ Welcome email sent successfully')
          }
        } catch (emailError) {
          console.error('📧 Error sending email:', emailError)
        }
        
        // Always show success regardless of email status
        console.log('🎉 Setting UI to completed state')
        setIsAlreadyOnList(false)
        setIsSubmitted(true)
        setShowQuiz(false)
      } else {
        console.log('❌ Waitlist entry failed:', result)
        setError(result.message || 'Failed to join waitlist. Please try again.')
        console.error('Waitlist submission failed:', result.error)
      }
    } catch (error: any) {
      console.error('❌ Error saving waitlist entry:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      console.log('🏁 Quiz completion finished, setting loading to false')
      setIsLoading(false)
    }
  }

  const handleStartQuiz = () => {
    setShowQuiz(true)
  }

  const testimonials = [
    {
      quote: "Our sales increased 3x after just one campaign. The tracking dashboard kept us confident throughout.",
      author: "Sophia, Founder"
    },
    {
      quote: "Finally, a platform where I get paid fairly and can build real brand partnerships.",
      author: "Jake, Influencer"
    }
  ]

  const faqs = [
    {
      question: "How do the 3 payment models work?",
      answer: "Choose between Fixed Payments (set your own budget from $50 to $5000+), Hybrid Model (set your own fixed + commission rates), or Sales Commission (choose your rate from 5% to 25%). Each model is designed for different business goals and risk tolerance."
    },
    {
      question: "Which payment model is right for my business?",
      answer: "Fixed Payments are perfect for budget-conscious brands who want predictable costs. Hybrid is ideal for those wanting guaranteed content plus performance incentives. Sales Commission works best for performance-focused brands who only want to pay for actual results."
    },
    {
      question: "Can I set my own budget and rates?",
      answer: "Absolutely! You have complete control over your investment. Set your own budget from $50 to $5000+ per post, choose your commission rates, and adjust anytime. No fixed rates or minimums."
    },
    {
      question: "What's the difference between hybrid and commission?",
      answer: "Hybrid gives you guaranteed content creation plus performance bonuses - you set rates for both. Commission is purely performance-based - you only pay when sales happen. Hybrid reduces risk while commission maximizes ROI potential."
    },
    {
      question: "When is the global launch?",
      answer: "We're launching globally in Summer 2025. Join our waitlist now to get early access, exclusive founding member perks, and help shape the platform's features."
    }
  ];

  return (
    <>
      <Head>
        <title>ViralReach - Performance-Based Influencer Marketing Platform</title>
        <meta name="description" content="Connect beauty and skincare brands with authentic creators. Choose from 3 flexible payment models: Fixed Payments, Hybrid, or Commission. Pay only for real results, not just posts." />
        <link rel="canonical" href="https://viralreach.com" />
        <meta property="og:url" content="https://viralreach.com" />
        <meta property="og:title" content="ViralReach - Performance-Based Influencer Marketing Platform" />
        <meta property="og:description" content="Connect beauty and skincare brands with authentic creators. Choose from 3 flexible payment models and pay only for real results, not just posts." />
        <meta name="twitter:url" content="https://viralreach.com" />
        <meta name="twitter:title" content="ViralReach - Performance-Based Influencer Marketing Platform" />
        <meta name="twitter:description" content="Connect beauty and skincare brands with authentic creators. Choose from 3 flexible payment models and pay only for real results, not just posts." />
      </Head>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="home" />

      {/* Hero Section */}
      <main>
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-20 bg-white overflow-hidden">
          {/* Content - Single Column Layout */}
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              {...getAnimationProps(
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Users className="w-4 h-4 mr-2" />
                🌟 Connect Small Brands with Real Influencers
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Authentic
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Influencer Marketing
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-gray-700">
                  for Small Brands
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build real partnerships that drive 
                <span className="font-bold text-purple-600 text-2xl"> real results</span>
                <br />
                <span className="text-lg text-gray-500">Simple, effective, and designed for small businesses</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/brand"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  For Brands
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link 
                  href="/creator"
                  className="bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  For Creators
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>Authentic Matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>Real Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>Simple Process</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Horizontal Scrolling Influencer Videos */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                {...getAnimationProps(
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0 },
                  { duration: 0.8 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Meet Our Top Creators
              </motion.h2>
              <motion.p 
                {...getAnimationProps(
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0 },
                  { duration: 0.8, delay: 0.2 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Real creators, real results. See how they're earning with our flexible payment models.
              </motion.p>
            </div>

            {/* Infinite Scrolling Video Carousel */}
            <div className="relative video-carousel">
              <div className="flex space-x-6 animate-scroll">
                {/* First set of videos */}
                {[
                  { video: "/videos/T1.mp4", name: "Sarah Chen", followers: "125K", niche: "Beauty", earnings: "$2,450" },
                  { video: "/videos/T2.mp4", name: "Maya Johnson", followers: "156K", niche: "Skincare", earnings: "$3,200" },
                  { video: "/videos/T3.mp4", name: "Alex Kim", followers: "67K", niche: "Tutorials", earnings: "$1,900" },
                  { video: "/videos/T4.mp4", name: "Emma Davis", followers: "89K", niche: "Lifestyle", earnings: "$2,800" },
                  { video: "/videos/T5.mp4", name: "Jake Wilson", followers: "234K", niche: "Fitness", earnings: "$4,100" },
                  { video: "/videos/T6.mp4", name: "Lisa Park", followers: "178K", niche: "Fashion", earnings: "$3,500" },
                  { video: "/videos/T7.mp4", name: "Mike Chen", followers: "145K", niche: "Tech", earnings: "$2,900" },
                  { video: "/videos/T8.mp4", name: "Anna Smith", followers: "267K", niche: "Travel", earnings: "$5,200" },
                  { video: "/videos/T9.mp4", name: "David Lee", followers: "98K", niche: "Food", earnings: "$2,100" },
                  { video: "/videos/T10.mp4", name: "Rachel Green", followers: "189K", niche: "Wellness", earnings: "$3,800" },
                ].map((creator, index) => (
                  <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <video 
                        className="w-full h-48 object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src={creator.video} type="video/mp4" />
                      </video>
                      <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {creator.followers}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                        <span className="text-sm text-gray-500">{creator.niche}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Last 3 months</span>
                        <span className="font-bold text-green-600">{creator.earnings}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {[
                  { video: "/videos/T1.mp4", name: "Sarah Chen", followers: "125K", niche: "Beauty", earnings: "$2,450" },
                  { video: "/videos/T2.mp4", name: "Maya Johnson", followers: "156K", niche: "Skincare", earnings: "$3,200" },
                  { video: "/videos/T3.mp4", name: "Alex Kim", followers: "67K", niche: "Tutorials", earnings: "$1,900" },
                  { video: "/videos/T4.mp4", name: "Emma Davis", followers: "89K", niche: "Lifestyle", earnings: "$2,800" },
                  { video: "/videos/T5.mp4", name: "Jake Wilson", followers: "234K", niche: "Fitness", earnings: "$4,100" },
                  { video: "/videos/T6.mp4", name: "Lisa Park", followers: "178K", niche: "Fashion", earnings: "$3,500" },
                  { video: "/videos/T7.mp4", name: "Mike Chen", followers: "145K", niche: "Tech", earnings: "$2,900" },
                  { video: "/videos/T8.mp4", name: "Anna Smith", followers: "267K", niche: "Travel", earnings: "$5,200" },
                  { video: "/videos/T9.mp4", name: "David Lee", followers: "98K", niche: "Food", earnings: "$2,100" },
                  { video: "/videos/T10.mp4", name: "Rachel Green", followers: "189K", niche: "Wellness", earnings: "$3,800" },
                ].map((creator, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <video 
                        className="w-full h-48 object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      >
                        <source src={creator.video} type="video/mp4" />
                      </video>
                      <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {creator.followers}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                        <span className="text-sm text-gray-500">{creator.niche}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Last 3 months</span>
                        <span className="font-bold text-green-600">{creator.earnings}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats below the carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Just launched 🚀</div>
                <div className="text-gray-600">Be one of our first creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Now onboarding</div>
                <div className="text-gray-600">Brands & creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Early earnings</div>
                <div className="text-gray-600">Already paid out to first users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">Success rate for first campaigns</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose ViralReach - 2 Column Layout */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              {...getAnimationProps(
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why Choose ViralReach?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built for Small Brands, 
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Not Enterprise Giants
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand what small brands really need - authentic partnerships, real results, and simple tools that work.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Benefits */}
              <motion.div 
                {...getAnimationProps(
                  { opacity: 0, x: -30 },
                  { opacity: 1, x: 0 },
                  { duration: 0.8, delay: 0.2 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Matching</h3>
                    <p className="text-gray-600">We match you with real influencers who genuinely care about your brand, not just transactional partnerships.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Driven</h3>
                    <p className="text-gray-600">Focus on outcomes that matter - sales, engagement, and brand awareness, not just vanity metrics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Simple & Effective</h3>
                    <p className="text-gray-600">No complex enterprise tools. Just straightforward features that help you connect and collaborate.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
                    <p className="text-gray-600">Connect with creators from 15+ countries, perfect for brands looking to expand their reach.</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Visual */}
              <motion.div 
                {...getAnimationProps(
                  { opacity: 0, x: 30 },
                  { opacity: 1, x: 0 },
                  { duration: 0.8, delay: 0.4 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Small Brand Success</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      +247%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">Sarah's Beauty</div>
                          <div className="text-sm text-gray-600">Local Salon</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$12,450</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mike" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">Mike's Fitness</div>
                          <div className="text-sm text-gray-600">Gym Equipment</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$8,920</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma" className="w-10 h-10 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900">Emma's Kitchen</div>
                          <div className="text-sm text-gray-600">Food Delivery</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">$15,680</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works - 3 Step Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              {...getAnimationProps(
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 mr-2" />
                How It Works
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Simple 3-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in minutes, not months. Our streamlined process makes influencer marketing accessible to everyone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div 
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.8, delay: 0.1 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Profile</h3>
                <p className="text-gray-600 mb-6">
                  Tell us about your brand, target audience, and goals. We'll use this to find the perfect influencers for your campaigns.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-sm text-blue-800 font-medium">✓ Takes 2 minutes</div>
                  <div className="text-sm text-blue-600">✓ No complex setup</div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.8, delay: 0.2 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Matched</h3>
                <p className="text-gray-600 mb-6">
                  Our AI matches you with authentic creators who align with your brand values and target audience.
                </p>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-sm text-purple-800 font-medium">✓ AI-powered matching</div>
                  <div className="text-sm text-purple-600">✓ Authentic partnerships</div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.8, delay: 0.3 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Track</h3>
                <p className="text-gray-600 mb-6">
                  Launch your campaigns and track real-time results. See sales, engagement, and ROI instantly.
                </p>
                <div className="bg-pink-50 p-4 rounded-xl">
                  <div className="text-sm text-pink-800 font-medium">✓ Real-time analytics</div>
                  <div className="text-sm text-pink-600">✓ Performance tracking</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              {...getAnimationProps(
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Settings className="w-4 h-4 mr-2" />
                Platform Features
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful tools designed for small brands. No enterprise complexity, just results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Flexible Payment Models */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.1 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-3xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3 Flexible Payment Models</h3>
                    <div className="text-sm text-purple-600 font-semibold">Choose What Works</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fixed rates, performance bonuses, or pure commission. Pick the model that aligns with your goals.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Perfect for:</span> Every business stage and budget
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: AI-Powered Matching */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.2 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-3xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                    <div className="text-sm text-purple-600 font-semibold">Perfect Creator-Brand Matches</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our AI finds the perfect creators for your brand, audience, and campaign goals.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Perfect for:</span> Finding the right creators
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: Real-Time Analytics */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.3 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-3xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Analytics</h3>
                    <div className="text-sm text-purple-600 font-semibold">Track Everything</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  See sales, engagement, and ROI in real-time. Make data-driven decisions instantly.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Perfect for:</span> Data-driven marketing
                  </div>
                </div>
              </motion.div>

              {/* Feature 4: Zero Hidden Fees */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.4 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-3xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Hidden Fees</h3>
                    <div className="text-sm text-purple-600 font-semibold">What You See is What You Pay</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  No platform fees, no processing charges, no surprises. Your budget stays your budget.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Perfect for:</span> Budget-conscious brands
                  </div>
                </div>
              </motion.div>

              {/* Feature 5: Performance-Driven */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.5 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-3xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Results-Based Rewards</h3>
                    <div className="text-sm text-purple-600 font-semibold">Pay for Performance</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Creators earn more when they drive better results. Aligned incentives for everyone.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Perfect for:</span> ROI-focused campaigns
                  </div>
                </div>
              </motion.div>

              {/* Feature 6: Global Launch */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-3xl"></div>
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Launch 2025</h3>
                    <div className="text-sm text-purple-600 font-semibold">Be an Early Adopter</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join our waitlist and get exclusive founding member perks when we launch globally.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <div className="text-sm text-purple-800 font-medium">
                    <span className="font-bold">Perfect for:</span> Early adopters and innovators
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              {...getAnimationProps(
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to Know
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to the most common questions about our platform and services.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  {...getAnimationProps(
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0 },
                    { duration: 0.6, delay: index * 0.1 }
                  )}
                  whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                  <p className="text-gray-600">A: {faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Tools Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              {...getAnimationProps(
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Calculator className="w-4 h-4 mr-2" />
                Free Tools
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Powerful Tools to Help You
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Succeed
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our free tools designed to help brands and creators make informed decisions and grow their business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Influencer Rate Calculator */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.1 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Influencer Rate Calculator</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Calculate fair rates for influencer partnerships based on platform, followers, niche, and experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Accurate market rates</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Multiple platforms</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Payment model options</span>
                  </div>
                </div>
                <Link 
                  href="/tools/influencer-rate-calculator"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Calculate Rates
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              {/* Brand Strategy Quiz */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.2 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Strategy Quiz</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get a comprehensive brand strategy with personalized insights and actionable recommendations.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>24+ questions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Personalized insights</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Actionable strategy</span>
                  </div>
                </div>
                <Link 
                  href="/quiz/comprehensive-brand-quiz"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Take Quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              {/* Creator Assessment */}
              <motion.div
                {...getAnimationProps(
                  { opacity: 0, y: 30 },
                  { opacity: 1, y: 0 },
                  { duration: 0.6, delay: 0.3 }
                )}
                whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creator Assessment</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimize your creator strategy with our comprehensive assessment and growth plan.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>15 focused questions</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Monetization strategy</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Growth roadmap</span>
                  </div>
                </div>
                <Link 
                  href="/quiz/comprehensive-creator-quiz"
                  className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist Signup Section */}
        <section id="waitlist" className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              {...getAnimationProps(
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                { duration: 0.8 }
              )}
              whileInView={shouldDisableAnimations() ? undefined : { opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Join the Waitlist
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Be Among the First to Experience
                <br />
                <span className="text-yellow-300">ViralReach</span>
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Get exclusive founding member perks, early access, and help shape the future of influencer marketing.
              </p>

              {!showQuiz ? (
                <motion.button
                  onClick={handleStartQuiz}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Loading...
                    </div>
                  ) : (
                    "Start Your Journey"
                  )}
                </motion.button>
              ) : (
                <WaitlistQuiz onComplete={handleQuizComplete} />
              )}

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {isAlreadyOnList ? "Welcome Back!" : "You're on the List!"}
                    </h3>
                  </div>
                  <p className="text-white/90">
                    {isAlreadyOnList 
                      ? "We're excited to have you back! You'll be among the first to know when we launch."
                      : "Thank you for joining our waitlist! We'll keep you updated on our progress and launch date."
                    }
                  </p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30"
                >
                  <p className="text-red-200">{error}</p>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Exclusive Founding Member Perks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Early Access to Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Help Shape Features</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
      </div>
    </>
  )
}