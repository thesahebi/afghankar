import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../ui/Hero'
import Section from '../ui/Section'
import Container from '../ui/Container'
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
      description: 'راه‌حل‌های ابری مقیاس‌پذیر و امن برای کسب و کارهای مختلف',
      features: ['Cloud Migration', 'DevOps', 'Containerization', 'Auto Scaling']
    },
    {
      icon: '🔒',
      title: 'امنیت سایبری',
      description: 'محافظت کامل از داده‌ها و سیستم‌های شما با جدیدترین تکنولوژی‌های امنیتی',
      features: ['Security Audit', 'Penetration Testing', 'Firewall', 'Monitoring']
    },
    {
      icon: '🌐',
      title: 'شبکه‌سازی',
      description: 'طراحی و پیاده‌سازی شبکه‌های کامپیوتری حرفه‌ای و امن',
      features: ['Network Design', 'Infrastructure', 'Monitoring', 'Support']
    }
  ]

  const stats = [
    { number: '100+', label: 'پروژه موفق' },
    { number: '50+', label: 'مشتری راضی' },
    { number: '24/7', label: 'پشتیبانی' },
    { number: '5+', label: 'سال تجربه' }
  ]

  const features = [
    {
      icon: '⚡',
      title: 'عملکرد بالا',
      description: 'راه‌حل‌های بهینه‌سازی شده برای عملکرد بهتر'
    },
    {
      icon: '🛡️',
      title: 'امنیت کامل',
      description: 'محافظت از داده‌ها و سیستم‌های شما'
    },
    {
      icon: '📱',
      title: 'ریسپانسیو',
      description: 'سازگار با تمام دستگاه‌ها و اندازه‌های صفحه'
    },
    {
      icon: '🚀',
      title: 'مقیاس‌پذیر',
      description: 'قابلیت رشد و توسعه با کسب و کار شما'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="افغان کار"
        subtitle="نوآوری در ابر، امنیت و دیجیتال"
        description="راه‌حل‌های هوشمند برای رشد کسب و کار شما"
        primaryButton={{
          text: "شروع کنید",
          href: "/contact"
        }}
        secondaryButton={{
          text: "بیشتر بدانید",
          href: "/services"
        }}
        stats={stats}
      />

      {/* Services Section */}
      <Section background="white" id="services">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            خدمات ما
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            راه‌حل‌های جامع برای رشد و توسعه کسب و کار شما
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-500">
                      <span className="w-2 h-2 bg-primary rounded-full ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            چرا افغان کار؟
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ما با تیمی از متخصصان مجرب، آماده ارائه خدمات حرفه‌ای هستیم
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-2xl">{feature.icon}</span>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              آماده شروع هستید؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              با ما تماس بگیرید و از مشاوره رایگان ما بهره‌مند شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" href="/contact">
                تماس با ما
              </Button>
              <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-primary">
                مشاهده خدمات
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Home