import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../ui/Hero'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Home: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'طراحی و توسعه وب سایت',
      description: 'طراحی و توسعه وب سایت‌های حرفه‌ای و مدرن با استفاده از جدیدترین تکنولوژی‌ها',
      features: ['طراحی ریسپانسیو', 'SEO بهینه', 'سرعت بالا', 'امنیت کامل']
    },
    {
      icon: '☁️',
      title: 'خدمات ابری',
      description: 'راه‌حل‌های ابری مقیاس‌پذیر و قابل اعتماد برای کسب و کارهای مختلف',
      features: ['میزبانی ابری', 'ذخیره‌سازی امن', 'پشتیبان‌گیری خودکار', 'مقیاس‌پذیری']
    },
    {
      icon: '🔒',
      title: 'امنیت سایبری',
      description: 'محافظت کامل از داده‌ها و سیستم‌های شما با جدیدترین تکنولوژی‌های امنیتی',
      features: ['نظارت 24/7', 'تشخیص تهدیدات', 'رمزگذاری پیشرفته', 'آموزش امنیت']
    },
    {
      icon: '🌐',
      title: 'شبکه‌سازی و زیرساخت',
      description: 'طراحی و پیاده‌سازی شبکه‌های قدرتمند و قابل اعتماد',
      features: ['شبکه‌های محلی', 'اتصال اینترنت', 'سرورهای اختصاصی', 'پشتیبانی فنی']
    }
  ]

  const stats = [
    { number: '100+', label: 'پروژه موفق' },
    { number: '50+', label: 'مشتری راضی' },
    { number: '5+', label: 'سال تجربه' },
    { number: '24/7', label: 'پشتیبانی' }
  ]

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

      <Section id="services" className="bg-white py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          خدمات ما
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div variants={fadeInVariants} key={index}>
              <Card className="text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 text-right space-y-2 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-end">
                      <span className="ml-2 text-primary">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="about-cta" className="bg-gray-50 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
            className="text-center lg:text-right"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              درباره افغان کار
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              افغان کار یک شرکت پیشرو در ارائه خدمات فناوری اطلاعات است که با تیمی از متخصصان مجرب، راه‌حل‌های نوآورانه و کارآمدی را برای کسب و کارهای مختلف ارائه می‌دهد. ما متعهد به ارائه بالاترین کیفیت خدمات و پشتیبانی هستیم.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <div className="flex items-center bg-secondary text-primary px-4 py-2 rounded-full font-medium">
                <span className="ml-2">✅</span> <span className="text-gray-900">تیم متخصص</span>
              </div>
              <div className="flex items-center bg-secondary text-primary px-4 py-2 rounded-full font-medium">
                <span className="ml-2">✅</span> <span className="text-gray-900">پشتیبانی 24/7</span>
              </div>
              <div className="flex items-center bg-secondary text-primary px-4 py-2 rounded-full font-medium">
                <span className="ml-2">✅</span> <span className="text-gray-900">راه‌حل‌های سفارشی</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
            className="relative"
          >
            <Card className="bg-primary text-white p-8">
              <h3 className="text-2xl font-bold mb-4">آماده شروع هستید؟</h3>
              <p className="mb-6 text-white/90">
                با ما تماس بگیرید و از مشاوره رایگان ما بهره‌مند شوید
              </p>
              <Button variant="accent" size="lg" className="w-full" href="/contact">
                تماس بگیرید
              </Button>
            </Card>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Home