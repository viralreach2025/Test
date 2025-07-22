'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, Calculator, TrendingUp, DollarSign } from 'lucide-react'

interface NavbarProps {
  currentPage?: 'home' | 'brand' | 'creator' | 'contact' | 'affiliate' | 'case-studies' | 'quiz'
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const isActive = (page: string) => currentPage === page

  const handleJoinWaitlist = () => {
    if (currentPage === 'home') {
      // If we're on the home page, just scroll to the waitlist section
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If we're on another page, navigate to home and then scroll to waitlist
      router.push('/#waitlist')
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              ViralReach
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-sm transition-colors ${
                isActive('home') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/brand" 
              className={`text-sm transition-colors ${
                isActive('brand') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Brands
            </Link>
            <Link 
              href="/creator" 
              className={`text-sm transition-colors ${
                isActive('creator') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Creators
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors ${
                isActive('contact') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/case-studies" 
              className={`text-sm transition-colors ${
                isActive('case-studies') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Case Studies
            </Link>
            <Link 
              href="/affiliate" 
              className={`text-sm transition-colors ${
                isActive('affiliate') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Affiliate
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className={`flex items-center text-sm transition-colors ${
                  toolsDropdownOpen 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Tools
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {toolsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                                    <Link
                    href="/quiz/comprehensive-brand-quiz"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setToolsDropdownOpen(false)}
                  >
                    <TrendingUp className="w-4 h-4 mr-3 text-purple-500" />
                    <div>
                      <div className="font-medium">Comprehensive Brand Assessment</div>
                      <div className="text-xs text-gray-500">Complete strategy with 24+ questions</div>
                    </div>
                  </Link>
                  <Link
                    href="/quiz/comprehensive-creator-quiz"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setToolsDropdownOpen(false)}
                  >
                    <Calculator className="w-4 h-4 mr-3 text-green-500" />
                    <div>
                      <div className="font-medium">Comprehensive Creator Assessment</div>
                      <div className="text-xs text-gray-500">Complete monetization strategy</div>
                    </div>
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    href="/tools/influencer-rate-calculator"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setToolsDropdownOpen(false)}
                  >
                    <DollarSign className="w-4 h-4 mr-3 text-yellow-500" />
                    <div>
                      <div className="font-medium">Influencer Rate Calculator</div>
                      <div className="text-xs text-gray-500">Calculate fair partnership rates</div>
                    </div>
                  </Link>

                </div>
              )}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={handleJoinWaitlist}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('home') 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/brand" 
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('brand') 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Brands
              </Link>
              <Link 
                href="/creator" 
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('creator') 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Creators
              </Link>
              <Link 
                href="/contact" 
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('contact') 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/case-studies" 
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('case-studies') 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                href="/affiliate" 
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('affiliate') 
                    ? 'text-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Affiliate
              </Link>
              
              {/* Tools Section */}
              <div className="pt-2 border-t border-gray-200">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Free Tools
                </div>
                              <Link
                href="/quiz/comprehensive-brand-quiz"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <TrendingUp className="w-4 h-4 mr-3 text-purple-500" />
                Comprehensive Brand Assessment
              </Link>
              <Link
                href="/quiz/comprehensive-creator-quiz"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calculator className="w-4 h-4 mr-3 text-green-500" />
                Comprehensive Creator Assessment
              </Link>
              <Link
                href="/tools/influencer-rate-calculator"
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <DollarSign className="w-4 h-4 mr-3 text-yellow-500" />
                Influencer Rate Calculator
              </Link>

              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleJoinWaitlist();
                  }}
                  className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 