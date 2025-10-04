import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '../ui/Container'

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
      className="bg-gray-50 text-gray-900 py-12 md:py-16 relative overflow-hidden"
      dir="rtl"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6)">
              <path d="M-1 13H15V27H-1V13ZM25 13H41V27H25V13Z" stroke="#1A73E8" strokeOpacity="0.2" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-right">
          {/* Logo and Description */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-center md:justify-end space-x-3 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-md">
                <span className="font-bold text-lg">اف</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">افغان کار</h3>
            </div>
            <p className="text-gray-600 text-sm max-w-xs mx-auto md:mx-0">
              ارائه دهنده راه‌حل‌های نوآورانه در زمینه ابر، امنیت و دیجیتال برای توانمندسازی کسب و کارها.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">لینک‌های سریع</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">خانه</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">خدمات</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">درباره ما</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">تماس</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">خدمات</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">طراحی وب</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">توسعه ابری</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">امنیت سایبری</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm">شبکه‌سازی</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">تماس با ما</h4>
            <p className="text-gray-600 text-sm mb-2">ایمیل: info@afghankar.com</p>
            <p className="text-gray-600 text-sm mb-4">تلفن: +93 780 123 456</p>
            <div className="flex justify-center md:justify-end space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} افغان کار. تمامی حقوق محفوظ است.</p>
        </motion.div>
      </Container>
    </motion.footer>
  )
}

export default Footer