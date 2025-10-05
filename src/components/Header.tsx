import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800' 
                  : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
              }`}>
                <Sparkles className={`w-5 h-5 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`} />
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>افغان‌کار</h1>
                <p className={`text-xs transition-colors duration-300 -mt-1 ${
                  isScrolled ? 'text-gray-500' : 'text-white/80'
                }`}>راه‌حل‌های دیجیتال</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  to={item.href}
                  className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-xl group ${
                    isActive(item.href)
                      ? isScrolled 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-white bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.href) && (
                    <motion.div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        isScrolled ? 'bg-blue-600' : 'bg-white'
                      }`}
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {/* Hover underline effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? 'bg-blue-600' : 'bg-white'
                    }`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/contact"
                className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md'
                    : 'bg-white text-blue-600 hover:bg-white/90 shadow-lg'
                }`}
              >
                شروع کنید
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            dir="rtl"
          >
            <div className="px-4 py-6 space-y-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`block font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-gray-100"
              >
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  شروع کنید
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header