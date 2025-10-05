import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, Zap, Shield, Users } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen modern-gradient" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-25 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-blue-50/30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-100 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-purple-100 rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 ml-2" />
              راه‌حل‌های دیجیتال مدرن
            </motion.div>

            {/* Main Headline - Big Bold Black */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-black text-black leading-tight tracking-tight"
            >
              کسب و کار خود را
              <span className="block text-blue-600">
                متحول کنید
              </span>
            </motion.h1>

            {/* Subheadline - Gray */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              ما وب‌سایت‌های مدرن، مهاجرت ابری و راه‌حل‌های شبکه‌ای ارائه می‌دهیم که به رشد و موفقیت کسب و کار شما کمک می‌کند.
            </motion.p>

            {/* CTA Button - Blue Background with White Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group relative px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex items-center">
                  شروع کنید
                  <ArrowLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="px-10 py-5 border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
                نمونه کارهای ما
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-black">۱۰۰+</div>
                <div className="text-gray-600 mt-2 text-lg">پروژه تکمیل شده</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-black">۵۰+</div>
                <div className="text-gray-600 mt-2 text-lg">مشتری راضی</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-black">۵+</div>
                <div className="text-gray-600 mt-2 text-lg">سال تجربه</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              خدمات ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ما راه‌حل‌های جامع دیجیتال ارائه می‌دهیم تا کسب و کار شما در دنیای مدرن رشد کند.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "طراحی و توسعه وب",
                description: "وب‌سایت‌های مدرن و واکنش‌گرا که با جدیدترین تکنولوژی‌ها و بهترین روش‌ها ساخته شده‌اند.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "مهاجرت ابری",
                description: "مهاجرت امن و کارآمد سیستم‌ها و داده‌های شما به محیط ابری برای بهبود عملکرد و کاهش هزینه‌ها.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "شبکه‌سازی و زیرساخت",
                description: "طراحی، پیاده‌سازی و مدیریت شبکه‌های کامپیوتری و زیرساخت‌های IT برای کسب و کار شما.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                چرا افغان‌کار؟
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ما در ایجاد راه‌حل‌های دیجیتال که نه تنها زیبا هستند بلکه نتایج واقعی کسب و کار را به همراه دارند، اشتیاق داریم. تیم ما خلاقیت را با تخصص فنی ترکیب می‌کند تا تجربیات استثنایی ارائه دهد.
              </p>
              
              <div className="space-y-6">
                {[
                  "طراحی مدرن و واکنش‌گرا",
                  "بارگذاری سریع و بهینه‌سازی شده",
                  "ساختار دوستدار SEO",
                  "پشتیبانی و نگهداری مداوم"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">نوآوری اول</h3>
                  <p className="text-gray-600">ما با جدیدترین تکنولوژی‌ها و روندهای طراحی پیش می‌رویم.</p>
                </div>
              </div>
            </motion.div>
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
              آماده متحول کردن حضور دیجیتال خود هستید؟
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              بیایید با همکاری یکدیگر چیزی شگفت‌انگیز خلق کنیم. همین امروز با ما تماس بگیرید و در مورد پروژه خود صحبت کنیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                پروژه خود را شروع کنید
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
                تماس تلفنی برنامه‌ریزی کنید
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home