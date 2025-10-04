import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('پیام شما با موفقیت ارسال شد!')
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'ایمیل',
      details: 'info@afghankar.com',
      description: 'برای سوالات عمومی و اطلاعات بیشتر'
    },
    {
      icon: '📞',
      title: 'تلفن',
      details: '+93 780 123 456',
      description: 'پشتیبانی 24/7 و مشاوره فنی'
    },
    {
      icon: '📍',
      title: 'آدرس',
      details: 'کابل، افغانستان',
      description: 'دفتر مرکزی ما در کابل'
    },
    {
      icon: '🕒',
      title: 'ساعات کاری',
      details: 'شنبه تا پنج‌شنبه',
      description: '8:00 صبح تا 6:00 عصر'
    }
  ]

  const services = [
    'طراحی و توسعه وب سایت',
    'خدمات ابری',
    'امنیت سایبری',
    'شبکه‌سازی و زیرساخت',
    'توسعه اپلیکیشن موبایل',
    'هوش مصنوعی و اتوماسیون',
    'مشاوره فناوری اطلاعات',
    'سایر خدمات'
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
      <Section className="bg-primary text-white py-20 md:py-24 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          تماس با ما
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
        >
          آماده‌ایم تا به شما کمک کنیم. با ما تماس بگیرید.
        </motion.p>
      </Section>

      <Section className="bg-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ارسال پیام</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="نام شما"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      شماره تلفن
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="+93 780 123 456"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      نام شرکت
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="نام شرکت شما"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    نوع خدمات مورد نیاز
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">انتخاب کنید...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    پیام شما *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="پیام خود را اینجا بنویسید..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  ارسال پیام
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainerVariants}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">اطلاعات تماس</h2>
              <p className="text-lg text-gray-600 mb-8">
                ما آماده‌ایم تا به سوالات شما پاسخ دهیم و در مورد پروژه‌هایتان با شما صحبت کنیم. 
                با ما تماس بگیرید تا از مشاوره رایگان ما بهره‌مند شوید.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div variants={fadeInVariants} key={index}>
                  <Card className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInVariants}>
              <Card className="p-6 bg-primary text-white">
                <h3 className="text-xl font-bold mb-4">آماده شروع هستید؟</h3>
                <p className="mb-6 text-white/90">
                  با ما تماس بگیرید و از مشاوره رایگان ما بهره‌مند شوید. 
                  تیم ما آماده پاسخگویی به سوالات شما است.
                </p>
                <Button variant="accent" size="md" className="w-full">
                  تماس فوری
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Contact