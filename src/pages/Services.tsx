import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import ZivaraStyleCard from '../components/ZivaraStyleCard'

const Services: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'طراحی و توسعه وب سایت',
      description: 'طراحی و توسعه وب سایت‌های حرفه‌ای و مدرن با استفاده از جدیدترین تکنولوژی‌ها',
      features: [
        'طراحی ریسپانسیو و مدرن',
        'بهینه‌سازی برای موتورهای جستجو (SEO)',
        'سرعت بالا و عملکرد بهینه',
        'امنیت کامل و محافظت از داده‌ها',
        'پشتیبانی و نگهداری مداوم'
      ],
      price: 'از 500$'
    },
    {
      icon: '☁️',
      title: 'خدمات ابری',
      description: 'راه‌حل‌های ابری مقیاس‌پذیر و قابل اعتماد برای کسب و کارهای مختلف',
      features: [
        'میزبانی ابری امن و قابل اعتماد',
        'ذخیره‌سازی ابری با پشتیبان‌گیری خودکار',
        'مقیاس‌پذیری خودکار بر اساس نیاز',
        'نظارت 24/7 و پشتیبانی فنی',
        'هزینه‌های بهینه و شفاف'
      ],
      price: 'از 100$/ماه'
    },
    {
      icon: '🔒',
      title: 'امنیت سایبری',
      description: 'محافظت کامل از داده‌ها و سیستم‌های شما با جدیدترین تکنولوژی‌های امنیتی',
      features: [
        'نظارت و نظارت 24/7',
        'تشخیص و پیشگیری از تهدیدات',
        'رمزگذاری پیشرفته داده‌ها',
        'آموزش امنیت برای تیم شما',
        'مطابقت با استانداردهای بین‌المللی'
      ],
      price: 'از 200$/ماه'
    },
    {
      icon: '🌐',
      title: 'شبکه‌سازی و زیرساخت',
      description: 'طراحی و پیاده‌سازی شبکه‌های قدرتمند و قابل اعتماد',
      features: [
        'طراحی و پیاده‌سازی شبکه‌های محلی',
        'اتصال اینترنت پرسرعت و پایدار',
        'سرورهای اختصاصی و مجازی',
        'پشتیبانی فنی 24/7',
        'نگهداری و به‌روزرسانی مداوم'
      ],
      price: 'از 300$/ماه'
    },
    {
      icon: '📱',
      title: 'توسعه اپلیکیشن موبایل',
      description: 'توسعه اپلیکیشن‌های موبایل برای iOS و Android',
      features: [
        'توسعه اپلیکیشن‌های iOS و Android',
        'طراحی UI/UX جذاب و کاربرپسند',
        'یکپارچه‌سازی با سیستم‌های موجود',
        'تست و تضمین کیفیت',
        'انتشار در فروشگاه‌های اپلیکیشن'
      ],
      price: 'از 1000$'
    },
    {
      icon: '🤖',
      title: 'هوش مصنوعی و اتوماسیون',
      description: 'راه‌حل‌های هوش مصنوعی برای خودکارسازی فرآیندهای کسب و کار',
      features: [
        'چت‌بات‌های هوشمند',
        'پردازش زبان طبیعی',
        'تحلیل داده‌ها و پیش‌بینی',
        'اتوماسیون فرآیندهای کسب و کار',
        'یکپارچه‌سازی با سیستم‌های موجود'
      ],
      price: 'از 800$'
    }
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
      <Section className="bg-primary text-white py-16 md:py-20 lg:py-24 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          خدمات ما
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-white/90"
        >
          راه‌حل‌های جامع فناوری اطلاعات برای رشد کسب و کار شما
        </motion.p>
      </Section>

          <Section className="bg-white py-16 md:py-20 lg:py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
              className="flex flex-col space-y-8"
            >
              {services.map((service, index) => (
                <motion.div variants={fadeInVariants} key={index}>
                  <ZivaraStyleCard
                    icon={service.icon}
                    title={service.title}
                    content={service.description}
                    bgColor="#dbeafe"
                    iconColor="#1A73E8"
                    features={service.features}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Section>

      <Section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            چرا افغان کار را انتخاب کنید؟
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            ما با تیمی از متخصصان مجرب و تجربه‌ای طولانی در ارائه خدمات فناوری اطلاعات، 
            راه‌حل‌های جامع و قابل اعتمادی را برای کسب و کارهای مختلف ارائه می‌دهیم.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 shadow-lg">
                🎯
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">تخصص و تجربه</h3>
              <p className="text-gray-600 text-sm md:text-base">بیش از 5 سال تجربه در ارائه خدمات فناوری اطلاعات</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 shadow-lg">
                🚀
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">نوآوری و کیفیت</h3>
              <p className="text-gray-600 text-sm md:text-base">استفاده از جدیدترین تکنولوژی‌ها و استانداردهای صنعت</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 shadow-lg">
                🤝
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">پشتیبانی 24/7</h3>
              <p className="text-gray-600 text-sm md:text-base">پشتیبانی مداوم و پاسخگویی سریع به نیازهای شما</p>
            </div>
          </div>
          <Button variant="primary" size="lg" href="/contact">
            شروع همکاری با ما
          </Button>
        </motion.div>
      </Section>
    </>
  )
}

export default Services