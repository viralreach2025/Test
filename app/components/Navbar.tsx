'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  currentPage?: 'home' | 'brand' | 'creator' | 'contact' | 'affiliate' | 'case-studies'
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

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
        <div className="flex justify-between items-center h-14">
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