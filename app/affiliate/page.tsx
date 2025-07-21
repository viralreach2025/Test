"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star,
  Copy,
  ExternalLink,
  BarChart3,
  Gift,
  Clock,
  Target,
  Sparkles,
  Trophy,
  Globe,
  CreditCard,
  Calendar,
  Calculator,
  Mail
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AffiliatePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('creators')

  // Commission calculator
  const [referrals, setReferrals] = useState(10)
  const [avgRevenue, setAvgRevenue] = useState(50)

  const monthlyEarnings = (referrals * avgRevenue * 0.10).toFixed(0)
  const yearlyEarnings = (parseFloat(monthlyEarnings) * 12).toFixed(0)

  // Early adopter benefits
  const earlyAdopterBenefits = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "First Mover Advantage",
      subtitle: "Exclusive Early Access",
      description: "Be among the first affiliates to promote our new platform. Early adopters get priority support and exclusive promotional opportunities.",
      value: "Limited Time",
      duration: "Early Access"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Higher Earning Potential",
      subtitle: "New Platform = More Opportunity",
      description: "New platforms have less competition and higher conversion rates. Get in early and build your affiliate income before the market gets saturated.",
      value: "10% Commission",
      duration: "Lifetime"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Exclusive Bonuses",
      subtitle: "Early Adopter Rewards",
      description: "Special bonuses and incentives for early affiliates. Plus, you'll be featured in our affiliate hall of fame as a founding partner.",
      value: "Bonus Rewards",
      duration: "Limited Time"
    }
  ]

  // How it works steps
  const steps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sign Up",
      description: "Create your affiliate account in 2 minutes"
    },
    {
      icon: <Copy className="w-6 h-6" />,
      title: "Get Your Links",
      description: "Receive unique tracking links and marketing materials"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Share & Promote",
      description: "Share your links with your network and audience"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Earn 10%",
      description: "Get 10% commission on all recurring revenue"
    }
  ]

  // Benefits
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Recurring Income",
      description: "Earn 10% commission on every payment, month after month"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Risk",
      description: "No upfront costs, no inventory, no customer service"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Tracking",
      description: "Real-time dashboard to monitor your earnings and referrals"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Marketing Materials",
      description: "Professional banners, email templates, and social media content"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Monthly Payouts",
      description: "Get paid monthly via PayPal, Stripe, or bank transfer"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "High Conversion",
      description: "Our platform has industry-leading conversion rates"
    }
  ]

  // FAQ
  const faqs = [
    {
      question: "How much can I earn?",
      answer: "You earn 10% of all recurring revenue from users you refer. For example, if you refer 10 creators who each pay $50/month, you'll earn $50/month in passive income."
    },
    {
      question: "When do I get paid?",
      answer: "Commissions are calculated monthly and paid out by the 15th of each month. Minimum payout is $25."
    },
    {
      question: "How long do I earn commissions?",
      answer: "You earn commissions for as long as your referred users remain active on the platform. This is lifetime recurring income!"
    },
    {
      question: "What marketing materials do you provide?",
      answer: "We provide banners, email templates, social media posts, video testimonials, and case studies. All materials are professionally designed and ready to use."
    },
    {
      question: "Can I track my performance?",
      answer: "Yes! You get access to a real-time dashboard showing clicks, conversions, earnings, and detailed analytics."
    },
    {
      question: "Is there a minimum payout?",
      answer: "Yes, the minimum payout is $25. Any earnings below this amount will be carried over to the next month."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="affiliate" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              🌟 Earn 10% Commission on Recurring Revenue
              <span className="ml-3 inline-flex items-center bg-white/20 px-2 py-1 rounded-full text-xs">
                <CheckCircle className="w-3 h-3 mr-1" />
                Lifetime Earnings
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Turn Your Network Into
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Passive Income
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our affiliate program and earn <span className="font-bold text-purple-600 text-2xl">10% commission</span> on every recurring payment
              <br />
              <span className="text-lg text-gray-500">
                No upfront costs • Lifetime earnings • Professional marketing materials
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Become an Affiliate
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-200">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Earnings
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>10% Commission Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Lifetime Earnings</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Monthly Payouts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See How Much You Can
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Earn
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our calculator to estimate your potential earnings based on your network size
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Earnings Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Referrals
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={referrals}
                    onChange={(e) => setReferrals(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1</span>
                    <span className="font-semibold text-purple-600">{referrals} referrals</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Monthly Revenue per User
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={avgRevenue}
                    onChange={(e) => setAvgRevenue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$20</span>
                    <span className="font-semibold text-purple-600">${avgRevenue}/month</span>
                    <span>$200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Potential Earnings</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-sm text-purple-100">Monthly Earnings</div>
                  <div className="text-3xl font-bold">${monthlyEarnings}</div>
                  <div className="text-sm text-purple-200">10% of ${(referrals * avgRevenue).toLocaleString()}</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-sm text-purple-100">Yearly Earnings</div>
                  <div className="text-3xl font-bold">${yearlyEarnings}</div>
                  <div className="text-sm text-purple-200">Recurring passive income</div>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-sm text-purple-100">Total Revenue Generated</div>
                  <div className="text-2xl font-bold">${(referrals * avgRevenue * 12).toLocaleString()}</div>
                  <div className="text-sm text-purple-200">For your referred users</div>
                </div>
              </div>

              <button className="w-full mt-6 bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Start Earning Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              How It Works
              <span className="ml-3 inline-flex items-center bg-white/20 px-3 py-1 rounded-full text-xs">
                <Clock className="w-3 h-3 mr-1" />
                4 Simple Steps
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Earning in
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of affiliates who are already earning passive income
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {step.icon}
                </div>
                <div className="inline-flex items-center bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Affiliate Program
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed as an affiliate partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Earners */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Be Among the First to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Earn Big
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our <span className="font-bold text-purple-600">new platform</span> and be among the first affiliates to earn passive income. 
                <br />
                <span className="text-lg text-gray-500">Early adopters get exclusive benefits and higher earning potential!</span>
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {earlyAdopterBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{benefit.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-600">{benefit.value}</div>
                  <div className="text-sm text-gray-500">{benefit.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our affiliate program
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us directly to apply for our affiliate program. We'll get back to you within 24 hours with all the details.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">support@viralreach.ca</span>
            </div>
            <p className="text-gray-600">
              Send us an email with your name, contact information, and a brief description of your network or audience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Miss This Opportunity!
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our <span className="font-bold">new platform</span> now and be among the first affiliates to earn 10% commission on recurring revenue. 
            <br />
            <span className="text-lg">Early adopters get exclusive benefits and higher earning potential!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Become an Affiliate
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-200">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Terms
            </button>
          </div>

          <div className="mt-8 text-purple-100 text-sm">
            <p>✓ No upfront costs • ✓ Instant approval • ✓ Professional support</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 