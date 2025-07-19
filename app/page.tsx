"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, ChevronDown, Menu, X, ArrowRight, Search, Shield, TrendingUp, Users, DollarSign, BarChart3, MessageSquare, Star, Clock, Camera, Target, Eye, Zap, Crown, TestTube, Lightbulb, Globe } from 'lucide-react'
import HeroDemo from './components/HeroDemo'
import { DashboardPreview } from './components/DashboardPreview'
import { saveWaitlistEntry } from '../lib/database'
import WaitlistQuiz from './components/WaitlistQuiz'
import CreatorStoriesCarousel from './components/CreatorStoriesCarousel'
import Navbar from './components/Navbar'

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
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <main>
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-20 bg-black overflow-hidden">
          {/* Diagonal Collage Background of Influencers */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] flex flex-wrap gap-4" style={{ width: '120vw', height: '60vh' }}>
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/women/12.jpg",
                "https://randomuser.me/api/portraits/women/22.jpg",
                "https://randomuser.me/api/portraits/women/33.jpg",
                "https://randomuser.me/api/portraits/women/89.jpg",
                "https://randomuser.me/api/portraits/women/55.jpg",
                "https://randomuser.me/api/portraits/women/77.jpg",
                "https://randomuser.me/api/portraits/women/32.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/77.jpg",
                "https://randomuser.me/api/portraits/women/12.jpg",
                "https://randomuser.me/api/portraits/women/22.jpg",
                "https://randomuser.me/api/portraits/women/33.jpg",
                "https://randomuser.me/api/portraits/women/89.jpg",
                "https://randomuser.me/api/portraits/women/55.jpg",
                "https://randomuser.me/api/portraits/women/77.jpg"
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Influencer ${i + 1}`}
                  className="w-32 h-32 object-cover rounded-xl shadow-lg border-2 border-white/10 opacity-90"
                  style={{ aspectRatio: '1/1', minWidth: 0, minHeight: 0 }}
                />
              ))}
            </div>
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10"></div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  🌍 Launching Globally - Join the Revolution
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                  The Future of
                  <br />
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Influencer Marketing
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow">
                  Finally, a platform that puts you in control. 
                  <span className="font-medium text-purple-200"> Choose from 3 flexible payment models.</span>
                  <br />
                  <span className="text-lg text-gray-300">Pay only for results, not just posts.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link 
                  href="/brand"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  For Brands
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link 
                  href="/creator"
                  className="bg-white/90 backdrop-blur-sm text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  For Creators
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Fixed Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Hybrid Bonuses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sales Commission</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Creator Stories Carousel Section */}
        <CreatorStoriesCarousel />

        {/* Payment Models Section */}
        <section id="payment-models" className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Three Ways to Pay.
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Complete Flexibility.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                Choose your payment model and set your own budget. From $50 to $5000+ - you decide what works for your business.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Fixed Payments */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Predictable Budgets</h3>
                  <p className="text-gray-600 text-lg">Know exactly what you'll pay upfront</p>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$150 - $2,500</div>
                    <div className="text-gray-600">per post (you set the price)</div>
                  </div>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Perfect for content-focused campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Guaranteed delivery and quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>No surprise costs or hidden fees</span>
                    </li>
                  </ul>
                  <div className="text-center pt-6">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      Best for: Budget-conscious brands
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Hybrid Model */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Balanced Risk & Reward</h3>
                  <p className="text-gray-600 text-lg">Guaranteed content + performance bonuses</p>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">$200 + $25</div>
                    <div className="text-gray-600">per post + per sale (flexible rates)</div>
                  </div>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Motivate creators to drive sales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Reduce risk while maximizing ROI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Perfect for growing businesses</span>
                    </li>
                  </ul>
                  <div className="text-center pt-6">
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                      Best for: Growing businesses
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Sales Commission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Pay Only for Results</h3>
                  <p className="text-gray-600 text-lg">Zero risk, maximum ROI</p>
                </div>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">10% - 20%</div>
                    <div className="text-gray-600">of sales generated (you choose)</div>
                  </div>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Zero upfront costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Perfect for new product launches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Align costs with revenue</span>
                    </li>
                  </ul>
                  <div className="text-center pt-6">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      Best for: Performance-focused brands
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Flexibility Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Pricing Flexibility
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  These are just examples. You set your own rates, budgets, and terms. Whether you want to pay $50 or $5000 per post, 
                  <span className="font-semibold text-purple-600"> you have complete control over your investment.</span>
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">💰</div>
                    <div className="text-gray-700 font-semibold">Set Your Budget</div>
                    <div className="text-sm text-gray-500">No minimums or maximums</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">🎯</div>
                    <div className="text-gray-700 font-semibold">Choose Your Model</div>
                    <div className="text-sm text-gray-500">Switch anytime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">⚡</div>
                    <div className="text-gray-700 font-semibold">Scale Up/Down</div>
                    <div className="text-sm text-gray-500">Grow at your pace</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section - Payment Model Problems */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tired of Rigid Payment Models?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional platforms force you into one-size-fits-all payment structures that don't match your business goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Problem 1: Paying for posts that don't convert */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Paying for Posts, Not Results</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pay $500 for a post that generates zero sales. Traditional platforms charge upfront regardless of performance.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-red-700">
                    <strong>Real Problem:</strong> No alignment between cost and results
                  </div>
                </div>
              </motion.div>

              {/* Problem 2: No performance guarantees */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">No Performance Guarantees</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Pay the same whether you get 10 or 10,000 sales. No incentive for creators to drive results.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-red-700">
                    <strong>Real Problem:</strong> Creators get paid regardless of performance
                  </div>
                </div>
              </motion.div>

              {/* Problem 3: Rigid payment structures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Rigid Payment Structures</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Every platform uses the same one-size-fits-all model. Your business is unique - why should payments be generic?
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-red-700">
                    <strong>Real Problem:</strong> No flexibility for different business needs
                  </div>
                </div>
              </motion.div>

              {/* Problem 4: Hidden fees and surprises */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Hidden Fees & Surprises</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Platform fees, processing charges, and unexpected costs. Your $500 campaign becomes $800.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-red-700">
                    <strong>Real Problem:</strong> Unexpected charges and budget overruns
                  </div>
                </div>
              </motion.div>

              {/* Problem 5: No flexibility as business grows */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">No Growth Flexibility</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Can't switch payment models as your business grows. Stuck with the same model forever.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-red-700">
                    <strong>Real Problem:</strong> Platform doesn't grow with your business
                  </div>
                </div>
              </motion.div>

              {/* Problem 6: Poor creator motivation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Poor Creator Motivation</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Creators get paid the same whether they drive sales or not. No incentive for performance.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-sm text-red-700">
                    <strong>Real Problem:</strong> No alignment between creator pay and results
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  The Problem with Traditional Platforms
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">Rigid</div>
                    <div className="text-red-100">One-size-fits-all models</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Expensive</div>
                    <div className="text-red-100">Hidden fees and charges</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Risky</div>
                    <div className="text-red-100">Pay upfront, no guarantees</div>
                  </div>
                </div>
                <p className="text-red-100 mt-6 text-lg">
                  <strong>There's a better way.</strong> ViralReach gives you 3 flexible payment models to choose from.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Revolution in Influencer Marketing
            </h2>
            <p className="text-lg text-gray-600">
              Be among the first to experience flexible payment models
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
            {/* Global launch badges */}
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-semibold text-sm">Global Launch</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm">Founding Member</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-semibold text-sm">Early Access</span>
              </div>
            </div>
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg border border-pink-100">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-pink-600" />
                <span className="text-pink-600 font-semibold text-sm">3 Payment Models</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Flexible Payment Models</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Support</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-center">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Finally, a platform that understands that every business is different. The flexible payment models are exactly what we've been looking for."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Chen" 
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Founder, Glow Beauty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ViralReach?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only platform with 3 flexible payment models designed for real business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Payment Flexibility</h3>
              <p className="text-gray-600">
                Choose from fixed payments, hybrid bonuses, or pure commission. Set your own budget from $50 to $5000+ per post. No rigid pricing structures.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pay Only for Results</h3>
              <p className="text-gray-600">
                Our commission model lets you pay only when sales happen. Perfect for new product launches and performance-focused campaigns. Zero risk.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Grow with Your Business</h3>
              <p className="text-gray-600">
                Start with one model and switch anytime. No long-term commitments or rigid contracts. Our platform adapts as your business scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Payment Model & Get Started
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join the global launch with flexible payment options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/brand"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              For Brands
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link 
              href="/creator"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              For Creators
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section with Illustration */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8">Simple, transparent, and flexible payment model selection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Payment Model</h3>
              <p className="text-gray-600">
                Select from Fixed Payments, Hybrid Model, or Sales Commission based on your business goals and risk tolerance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Your Budget & Goals</h3>
              <p className="text-gray-600">
                Define your campaign objectives, budget, and target audience. Our AI matches you with perfect creators.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Launch & Track Performance</h3>
              <p className="text-gray-600">
                Monitor performance in real-time and pay according to your chosen model. Switch models anytime.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Platform Overview - Engaging UI with Original Content and Improved Images */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need for Flexible Payment Models
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Block 1: Payment Model Selection */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 w-full max-w-xs">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    "https://randomuser.me/api/portraits/women/44.jpg",
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/68.jpg",
                    "https://randomuser.me/api/portraits/men/85.jpg",
                    "https://randomuser.me/api/portraits/women/12.jpg",
                    "https://randomuser.me/api/portraits/men/45.jpg",
                    "https://randomuser.me/api/portraits/women/22.jpg",
                    "https://randomuser.me/api/portraits/men/23.jpg",
                    "https://randomuser.me/api/portraits/women/33.jpg"
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Influencer ${i + 1}`}
                      className="rounded-lg w-full aspect-square object-cover shadow"
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-xs mb-2 inline-block">
                  Payment Models
                </span>
                <h3 className="text-xl font-bold mb-2">Choose Your Payment Model</h3>
                <p className="text-gray-700 mb-2">
                  Select from Fixed Payments, Hybrid Model, or Sales Commission. Set your own budgets and rates - from $50 to $5000+ per post. Each model is designed for different business goals and risk tolerance.
                </p>
              </div>
            </div>
            {/* Block 2: Performance Tracking */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-1 w-full max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                  alt="Analytics Dashboard Screenshot"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-4 py-2 text-sm">
                  <div className="font-semibold">Live Data</div>
                  <div className="text-gray-500">#analytics</div>
                </div>
              </div>
              <div className="flex-1">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-xs mb-2 inline-block">
                  Performance Tracking
                </span>
                <h3 className="text-xl font-bold mb-2">Real-Time Performance Tracking</h3>
                <p className="text-gray-700 mb-2">
                  Track performance across all payment models. See exactly what's working and optimize your campaigns in real-time.
                </p>
              </div>
            </div>
            {/* Block 3: Flexible Pricing */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-1 w-full max-w-xs">
                <img
                  src="https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&w=400&q=80"
                  alt="Flexible Pricing"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-4 py-2 text-sm">
                  <div className="font-semibold">Flexible</div>
                  <div className="text-gray-500">#pricing</div>
                </div>
              </div>
              <div className="flex-1">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-xs mb-2 inline-block">
                  Flexible Pricing
                </span>
                <h3 className="text-xl font-bold mb-2">Switch Models Anytime</h3>
                <p className="text-gray-700 mb-2">
                  Start with one payment model and switch to another as your business grows. No long-term commitments or rigid contracts.
                </p>
              </div>
            </div>
            {/* Block 4: Global Network */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative flex-1 w-full max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                  alt="Global Network"
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-4 py-2 text-sm">
                  <div className="font-semibold">Global</div>
                  <div className="text-gray-500">#network</div>
                </div>
              </div>
              <div className="flex-1">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-semibold text-xs mb-2 inline-block">
                  Global Network
                </span>
                <h3 className="text-xl font-bold mb-2">Global Creator Network</h3>
                <p className="text-gray-700 mb-2">
                  Access creators from 50+ countries. Launch campaigns worldwide with local expertise and global reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Bar (Coming Soon) */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-gray-400 mb-2">Trusted by early partners</span>
          <div className="flex justify-center items-center opacity-70 mb-4">
            <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Coming Soon
            </span>
          </div>
          {/* Avatars row remains */}
          <div className="flex -space-x-4 justify-center mt-2">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Creator 1" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Creator 2" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Creator 3" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Creator 4" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Creator 5" className="w-10 h-10 rounded-full border-2 border-white shadow" />
          </div>
        </div>
      </section>

      {/* Launching Now Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          <div>
            <span className="text-2xl font-bold text-purple-700">🌍</span>
            <div className="font-semibold text-gray-800">Launching Globally</div>
                            <div className="text-xs text-gray-500">Summer 2025</div>
          </div>
          <div>
            <span className="text-2xl font-bold text-pink-600">🎯</span>
            <div className="font-semibold text-gray-800">3 Payment Models</div>
            <div className="text-xs text-gray-500">Choose what works for you</div>
          </div>
          <div>
            <span className="text-2xl font-bold text-blue-600">⚡</span>
            <div className="font-semibold text-gray-800">Early access for first 1000 brands</div>
            <div className="text-xs text-gray-500">Exclusive founding member perks</div>
          </div>
        </div>
      </section>

      {/* Dashboard/Product Mockup Section (Demo-style) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Preview the ViralReach Dashboard</h2>
            <p className="text-lg text-gray-600 mb-6">A sneak peek at the tools you'll use to choose payment models, launch campaigns, and track performance. (Beta preview)</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
              <li>Payment model selection interface</li>
              <li>Real-time campaign analytics</li>
              <li>Performance-based tracking</li>
              <li>Global creator marketplace</li>
            </ul>
            <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Beta Preview</span>
          </div>
          <div className="flex-1 flex justify-center">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Early Adopter Testimonial */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <blockquote className="text-xl italic text-gray-700 mb-2">"We built ViralReach to solve the payment model problem. Choose fixed, hybrid, or commission - whatever works for your business. Join us as a founding member!"</blockquote>
            <div className="font-semibold text-purple-700">Founding Team</div>
            <div className="text-xs text-gray-500">ViralReach</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="monday-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="monday-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                <p className="text-gray-600">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

              {/* Simple Waitlist Signup */}
        <section id="waitlist" className="py-20 bg-gradient-to-br from-pink-500 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your Payment Model 
            <span className="ml-4 bg-white text-purple-600 px-4 py-2 rounded-full text-2xl align-middle font-semibold">Global Launch</span>
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Join the global revolution in flexible payment models
          </p>
          <p className="text-sm text-purple-200 mb-8">No credit card required • Early access for founding members • 3 flexible payment models • Global creator network</p>
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-md mx-auto border border-red-300">
              <p className="text-red-100 text-sm">{error}</p>
            </div>
          )}
          
          {!isSubmitted ? (
            showQuiz ? (
                              <WaitlistQuiz 
                  onComplete={handleQuizComplete}
                />
            ) : (
              <div className="max-w-md mx-auto">
                <button 
                  onClick={handleStartQuiz}
                  disabled={isLoading}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Loading...' : 'Take Payment Model Quiz & Join Waitlist'}
                </button>
                <p className="text-purple-200 text-sm mt-2">2-minute quiz • Get personalized recommendations • Join the revolution</p>
              </div>
            )
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {isAlreadyOnList ? "You're already on the list!" : "You're on the list!"}
              </h3>
              <p className="text-purple-100">
                {isAlreadyOnList 
                  ? "Thanks for your interest! We'll notify you when ViralReach launches globally." 
                  : "We'll notify you when ViralReach launches globally."
                }
              </p>
            </div>
          )}
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 monday-gradient-purple rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VR</span>
                </div>
                <div className="text-xl font-semibold">ViralReach</div>
              </div>
              <p className="text-gray-400 mb-4">
                Authentic influencer marketing made simple.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@viralreach.ca" className="hover:text-white transition-colors">support@viralreach.ca</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Form</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button disabled className="hover:text-white transition-colors cursor-not-allowed text-gray-400" title="Coming soon">Privacy Policy</button></li>
                <li><button disabled className="hover:text-white transition-colors cursor-not-allowed text-gray-400" title="Coming soon">Terms of Service</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ViralReach. Empowering authentic influence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 