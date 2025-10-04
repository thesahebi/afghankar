import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

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
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 rtl:space-x-reverse"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">اف</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">افغان کار</h1>
                  <p className="text-xs text-gray-600 -mt-1">Afghan Kar</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`relative font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button variant="primary" size="md" href="/contact">
                شروع کنید
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block font-medium py-2 transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-gray-700 hover:text-primary'
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
                  className="pt-4 border-t border-gray-200"
                >
                  <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    شروع کنید
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header