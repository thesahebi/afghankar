import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Heart, CheckCircle, ArrowRight } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
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
              درباره <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">افغان‌کار</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ما در ایجاد راه‌حل‌های دیجیتال که کسب و کارها را متحول می‌کند و ارتباطات معناداری بین برندها و مخاطبانشان ایجاد می‌کند، اشتیاق داریم.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                ماموریت ما
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                توانمندسازی کسب و کارها با راه‌حل‌های دیجیتال پیشرفته که رشد را هدایت می‌کند، تجربیات کاربری را بهبود می‌بخشد و ارزش پایدار در چشم‌انداز دیجیتال ایجاد می‌کند.
              </p>
              <div className="space-y-4">
                {[
                  "رویکرد مبتنی بر نوآوری",
                  "راه‌حل‌های متمرکز بر مشتری",
                  "کیفیت و تعالی",
                  "یادگیری و رشد مداوم"
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 ml-4 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
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
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">چشم‌انداز ما</h3>
                  <p className="text-gray-600">ارائه‌دهنده پیشرو راه‌حل‌های دیجیتال، شناخته شده برای نوآوری و تعالی.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              ارزش‌های ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              این ارزش‌های اصلی همه کارهای ما را هدایت می‌کند و فرهنگ ما را شکل می‌دهد.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "همکاری",
                description: "ما به قدرت کار تیمی و ایجاد شراکت‌های قوی با مشتریانمان اعتقاد داریم.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "تعالی",
                description: "ما برای بالاترین کیفیت در همه چیزهایی که ارائه می‌دهیم تلاش می‌کنیم و استانداردهای جدیدی تعیین می‌کنیم.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "اشتیاق",
                description: "ما به تکنولوژی اشتیاق داریم و راه‌حل‌هایی ایجاد می‌کنیم که تفاوت ایجاد می‌کند.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "نوآوری",
                description: "ما تکنولوژی‌های جدید و رویکردهای خلاقانه را برای حل چالش‌های پیچیده می‌پذیریم.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              تیم ما را ملاقات کنید
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ما تیمی متنوع از متخصصان مشتاق هستیم که به ارائه نتایج استثنایی متعهد هستیم.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "احمد رحیمی",
                role: "مدیرعامل و بنیان‌گذار",
                description: "رهبر بصیر با بیش از ۱۰ سال تجربه در تحول دیجیتال.",
                image: "👨‍💼"
              },
              {
                name: "فاطمه احمدی",
                role: "توسعه‌دهنده ارشد",
                description: "توسعه‌دهنده فول‌استک مشتاق به تکنولوژی‌های مدرن.",
                image: "👩‍💻"
              },
              {
                name: "محمد کریمی",
                role: "طراح UI/UX",
                description: "طراح خلاق متمرکز بر تجربیات متمرکز بر کاربر.",
                image: "👨‍🎨"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
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
              آماده همکاری با ما هستید؟
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              بیایید در مورد چگونگی کمک ما برای متحول کردن کسب و کار شما با راه‌حل‌های دیجیتال صحبت کنیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <span className="flex items-center justify-center">
                  تماس بگیرید
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
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

export default About