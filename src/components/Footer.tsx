import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="bg-gray-900 text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6)">
              <path d="M-1 13H15V27H-1V13ZM25 13H41V27H25V13Z" stroke="#3B82F6" strokeOpacity="0.2" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">افغان‌کار</h3>
                <p className="text-gray-400 text-sm">راه‌حل‌های دیجیتال</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-md mb-6">
              ما راه‌حل‌های دیجیتال مدرن و نوآورانه ایجاد می‌کنیم که به کسب و کارها کمک می‌کند تا در دنیای دیجیتال رشد کنند و موفق شوند.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">لینک‌های سریع</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">خانه</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">درباره ما</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">خدمات</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">تماس</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">اطلاعات تماس</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@afghankar.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+93 780 123 456</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">کابل، افغانستان</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} افغان‌کار. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                حریم خصوصی
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                شرایط استفاده
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer