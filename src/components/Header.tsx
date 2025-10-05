import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'خانه', href: '/' },
    { name: 'درباره ما', href: '/about' },
    { name: 'خدمات', href: '/services' },
    { name: 'تماس', href: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-lg transition-all duration-500"
      style={{ backgroundColor: '#2563eb' }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-opacity-30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white" style={{ color: 'white' }}>افغان‌کار</h1>
                <p className="text-xs text-white text-opacity-80 -mt-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>راه‌حل‌های دیجیتال</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg ${
                  isActive(item.href)
                    ? 'text-white bg-white bg-opacity-20' 
                    : 'text-white text-opacity-90 hover:text-white hover:bg-white hover:bg-opacity-10'
                }`}
                style={{ color: 'white' }}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              شروع کنید
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            style={{ color: 'white' }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-blue-600 border-t border-white border-opacity-20 shadow-2xl"
            style={{ backgroundColor: '#2563eb' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            dir="rtl"
          >
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-white bg-white bg-opacity-20'
                      : 'text-white text-opacity-90 hover:text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                  style={{ color: 'white' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white border-opacity-20">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  شروع کنید
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header