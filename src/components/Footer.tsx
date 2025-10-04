import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'شرکت',
      links: [
        { name: 'درباره ما', href: '/about' },
        { name: 'خدمات', href: '/services' },
        { name: 'تماس', href: '/contact' },
        { name: 'وبلاگ', href: '/blog' }
      ]
    },
    {
      title: 'خدمات',
      links: [
        { name: 'طراحی وب سایت', href: '/services#web-design' },
        { name: 'توسعه اپلیکیشن', href: '/services#app-development' },
        { name: 'خدمات ابری', href: '/services#cloud-services' },
        { name: 'امنیت سایبری', href: '/services#cybersecurity' }
      ]
    },
    {
      title: 'پشتیبانی',
      links: [
        { name: 'مرکز راهنمایی', href: '/help' },
        { name: 'مستندات', href: '/docs' },
        { name: 'پشتیبانی فنی', href: '/support' },
        { name: 'وضعیت سرویس', href: '/status' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">اف</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">افغان کار</h3>
                <p className="text-gray-400 text-sm">Afghan Kar</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              افغان کار ارائه‌دهنده راه‌حل‌های نوآورانه در زمینه فناوری اطلاعات، 
              خدمات ابری و امنیت سایبری برای کسب و کارهای مختلف است.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">ایمیل</p>
                <p className="text-white">info@afghankar.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary">📞</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">تلفن</p>
                <p className="text-white">+93 XX XXX XXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-primary">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">آدرس</p>
                <p className="text-white">کابل، افغانستان</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} افغان کار. تمامی حقوق محفوظ است.
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              حریم خصوصی
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              شرایط استفاده
            </Link>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}

export default Footer
