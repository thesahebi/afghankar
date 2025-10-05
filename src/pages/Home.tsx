import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, Zap, Shield, Users } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-600" dir="rtl">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-600">
        {/* Clean Blue Background */}
        <div className="absolute inset-0 bg-blue-600" style={{backgroundColor: '#2563eb'}}></div>
        
        {/* Subtle Abstract Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-8 w-64 h-64 bg-white rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Centered Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              {/* Main Headline - Large Bold White */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              >
                دستیار شخصی شما برای
                <span className="block text-blue-200 mt-2">
                  بهبود تعادل کار و زندگی
                </span>
              </motion.h1>

              {/* Subheadline - Light Gray */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl font-medium text-white max-w-3xl mx-auto leading-relaxed"
              >
                راه‌حل‌های ما برای ساده‌سازی فرآیندهای کاری و بهبود بهره‌وری طراحی شده‌اند.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                {/* Primary Button - Black Background, White Text */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  شروع دوره آزمایشی ۱۴ روزه
                </motion.button>

                {/* Secondary Button - White Background, Black Text */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  افغان‌کار چگونه کار می‌کند
                </motion.button>
              </motion.div>

              {/* Central Illustration - Smartphone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center mt-16"
              >
                <div className="relative">
                  {/* Smartphone Frame */}
                  <motion.div
                    initial={{ scale: 0.8, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="w-64 h-96 sm:w-80 sm:h-[480px] bg-white rounded-3xl p-2 shadow-2xl"
                  >
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-pink-400 via-orange-400 to-blue-500 rounded-2xl relative overflow-hidden">
                      {/* Screen Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Top Text */}
                        <div className="text-white text-sm font-medium">
                          در حال صحبت با ربات هوش مصنوعی
                        </div>
                        
                        {/* Center Bubble */}
                        <div className="flex justify-center items-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="w-20 h-20 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center"
                          >
                            <Sparkles className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        
                        {/* Bottom Question */}
                        <div className="text-white text-sm text-center">
                          بهترین ابزارهای طراحی رابط کاربری همکاری در سال ۲۰۲۵ کدامند؟
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full blur-sm"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full blur-sm"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              خدمات ما
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
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
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white leading-relaxed">{service.description}</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                چرا افغان‌کار؟
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
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
                    <span className="text-white">{feature}</span>
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
                  <h3 className="text-2xl font-bold text-white mb-2">نوآوری اول</h3>
                  <p className="text-white">ما با جدیدترین تکنولوژی‌ها و روندهای طراحی پیش می‌رویم.</p>
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
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
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