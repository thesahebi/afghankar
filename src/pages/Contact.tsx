import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen modern-gradient" dir="rtl">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">تماس</span> با ما
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              آماده شروع پروژه بعدی خود هستید؟ ما دوست داریم از شما بشنویم. پیامی برای ما بفرستید و در اسرع وقت پاسخ خواهیم داد.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">پیامی برای ما بفرستید</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      نام کامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="نام کامل شما"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      آدرس ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    شرکت
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="نام شرکت شما"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    پیام
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="در مورد پروژه خود به ما بگویید..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    ارسال پیام
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">اطلاعات تماس</h2>
                <p className="text-lg text-gray-600 mb-8">
                  ما اینجا هستیم تا کمک کنیم و به هر سوالی که ممکن است داشته باشید پاسخ دهیم. منتظر شنیدن از شما هستیم.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">ایمیل</h3>
                    <p className="text-gray-600">info@afghankar.com</p>
                    <p className="text-gray-600">support@afghankar.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">تلفن</h3>
                    <p className="text-gray-600">+93 780 123 456</p>
                    <p className="text-gray-600">+93 70 987 654</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">دفتر</h3>
                    <p className="text-gray-600">خیابان تجارت، کابل</p>
                    <p className="text-gray-600">افغانستان</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">ساعات کاری</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>شنبه تا چهارشنبه</span>
                    <span>۹:۰۰ صبح - ۶:۰۰ عصر</span>
                  </div>
                  <div className="flex justify-between">
                    <span>پنج‌شنبه</span>
                    <span>۱۰:۰۰ صبح - ۴:۰۰ عصر</span>
                  </div>
                  <div className="flex justify-between">
                    <span>جمعه</span>
                    <span>تعطیل</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              سوالات متداول
            </h2>
            <p className="text-xl text-gray-600">
              در اینجا برخی از سوالات رایجی که از مشتریانمان دریافت می‌کنیم آورده شده است.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "یک پروژه معمولی چقدر طول می‌کشد؟",
                answer: "زمان‌بندی پروژه‌ها بسته به پیچیدگی متفاوت است، اما اکثر پروژه‌های توسعه وب ۴ تا ۱۲ هفته از شروع تا پایان طول می‌کشد."
              },
              {
                question: "آیا پشتیبانی مداوم ارائه می‌دهید؟",
                answer: "بله، ما بسته‌های جامع نگهداری و پشتیبانی برای حفظ عملکرد روان وب‌سایت شما ارائه می‌دهیم."
              },
              {
                question: "از چه تکنولوژی‌هایی استفاده می‌کنید؟",
                answer: "ما از تکنولوژی‌های مدرن از جمله React، Node.js، Python و پلتفرم‌های ابری مانند AWS و Azure استفاده می‌کنیم."
              },
              {
                question: "آیا می‌توانید در SEO کمک کنید؟",
                answer: "قطعاً! ما بهترین روش‌های SEO را در همه پروژه‌هایمان شامل می‌کنیم و خدمات اختصاصی SEO ارائه می‌دهیم."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              آماده شروع پروژه خود هستید؟
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              بیایید ایده‌های شما را بحث کنیم و با هم چیزی شگفت‌انگیز خلق کنیم. ما هیجان‌زده‌ایم که با شما کار کنیم!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                تماس تلفنی برنامه‌ریزی کنید
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
                نمونه کارهای ما را ببینید
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact