import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../ui/Hero'
import Section from '../ui/Section'
import ZivaraStyleCard from '../components/ZivaraStyleCard'

const Home: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'طراحی و توسعه وب سایت',
      description: 'طراحی و توسعه وب سایت‌های حرفه‌ای و مدرن با استفاده از جدیدترین تکنولوژی‌ها',
      features: ['طراحی ریسپانسیو', 'SEO بهینه', 'سرعت بالا', 'امنیت کامل'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '☁️',
      title: 'خدمات ابری',
      description: 'راه‌حل‌های ابری مقیاس‌پذیر و قابل اعتماد برای کسب و کارهای مختلف',
      features: ['میزبانی ابری', 'ذخیره‌سازی امن', 'پشتیبان‌گیری خودکار', 'مقیاس‌پذیری'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🔒',
      title: 'امنیت سایبری',
      description: 'محافظت کامل از داده‌ها و سیستم‌های شما با جدیدترین تکنولوژی‌های امنیتی',
      features: ['نظارت 24/7', 'تشخیص تهدیدات', 'رمزگذاری پیشرفته', 'آموزش امنیت'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🚀',
      title: 'شبکه‌سازی و زیرساخت',
      description: 'طراحی و پیاده‌سازی شبکه‌های قدرتمند و قابل اعتماد',
      features: ['شبکه‌های محلی', 'اتصال اینترنت', 'سرورهای اختصاصی', 'پشتیبانی فنی'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const stats = [
    { number: '100+', label: 'پروژه موفق', icon: '🎯' },
    { number: '50+', label: 'مشتری راضی', icon: '😊' },
    { number: '5+', label: 'سال تجربه', icon: '⭐' },
    { number: '24/7', label: 'پشتیبانی', icon: '🛡️' }
  ]

  const features = [
    {
      icon: '⚡',
      title: 'سرعت بالا',
      description: 'راه‌حل‌های بهینه‌سازی شده برای عملکرد سریع و کارآمد'
    },
    {
      icon: '🔧',
      title: 'پشتیبانی کامل',
      description: 'تیم پشتیبانی 24/7 برای کمک به شما در هر زمان'
    },
    {
      icon: '🎨',
      title: 'طراحی مدرن',
      description: 'طراحی‌های زیبا و مدرن که تجربه کاربری عالی ارائه می‌دهد'
    },
    {
      icon: '📱',
      title: 'ریسپانسیو',
      description: 'سازگار با تمام دستگاه‌ها و اندازه صفحه‌ها'
    }
  ]

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <>
      <Hero
        headline="افغان کار"
        subheadline="نوآوری در ابر، امنیت و دیجیتال"
        description="راه‌حل‌های هوشمند برای رشد کسب و کار شما"
        primaryCtaText="شروع کنید"
        primaryCtaLink="/contact"
        secondaryCtaText="بیشتر بدانید"
        secondaryCtaLink="/about"
        stats={stats}
      />

          {/* Services Section */}
          <Section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  خدمات ما
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  راه‌حل‌های جامع فناوری اطلاعات برای رشد و توسعه کسب و کار شما
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariants}
                className="flex justify-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 max-w-2xl w-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                            style={{ backgroundColor: service.color === 'from-blue-500 to-blue-600' ? '#dbeafe' : 
                                     service.color === 'from-purple-500 to-purple-600' ? '#f3e8ff' :
                                     service.color === 'from-green-500 to-green-600' ? '#d1fae5' :
                                     service.color === 'from-orange-500 to-orange-600' ? '#fed7aa' : '#dbeafe' }}
                          >
                            {service.icon}
                          </div>
                          <div className="text-right">
                            <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                            <p className="text-gray-600 text-xs">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
        </div>
      </Section>

          {/* Features Section */}
          <Section className="bg-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  چرا افغان کار؟
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ما با تخصص و تجربه، بهترین راه‌حل‌ها را برای شما ارائه می‌دهیم
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariants}
                className="flex justify-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 max-w-2xl w-full">
                  <div className="flex flex-col items-center text-center">
                    
                    {/* 4️⃣ List of items under the subtitle */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-blue-50">
                            {feature.icon}
                          </div>
                          <div className="text-right">
                            <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                            <p className="text-gray-600 text-xs">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              آماده شروع هستید؟
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              با ما تماس بگیرید و از مشاوره رایگان ما بهره‌مند شوید. تیم ما آماده کمک به شما است.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-md mx-auto">
              <Link
                to="/contact"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-blue-600 font-semibold rounded-xl lg:rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                تماس با ما
              </Link>
              <Link
                to="/services"
                className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-white text-white font-semibold rounded-xl lg:rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
              >
                مشاهده خدمات
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Home