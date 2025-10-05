import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Cloud, 
  Network, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Users
} from 'lucide-react'

const Services: React.FC = () => {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">خدمات</span> ما
            </h1>
            <p className="text-xl text-white leading-relaxed">
              ما راه‌حل‌های جامع دیجیتال ارائه می‌دهیم تا کسب و کار شما در دنیای مدرن رشد کند.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "طراحی و توسعه وب",
                description: "وب‌سایت‌های سفارشی که با تکنولوژی‌های مدرن و بهترین روش‌ها ساخته شده‌اند.",
      features: [
                  "طراحی واکنش‌گرا",
                  "زمان بارگذاری سریع",
                  "بهینه‌سازی SEO",
                  "سازگاری با مرورگرهای مختلف"
                ],
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "مهاجرت ابری",
                description: "مهاجرت امن و کارآمد سیستم‌ها و داده‌های شما به محیط ابری برای بهبود عملکرد.",
      features: [
                  "مهاجرت امن داده‌ها",
                  "کاهش هزینه‌های عملیاتی",
                  "مقیاس‌پذیری بالا",
                  "پشتیبان‌گیری خودکار"
                ],
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "شبکه‌سازی و زیرساخت",
                description: "طراحی، پیاده‌سازی و مدیریت شبکه‌های کامپیوتری و زیرساخت‌های IT.",
      features: [
                  "طراحی شبکه‌های امن",
                  "مدیریت زیرساخت",
                  "پشتیبانی ۲۴/۷",
                  "بهینه‌سازی عملکرد"
                ],
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              خدمات تکمیلی
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              ما همچنین خدمات تخصصی برای پشتیبانی از رشد کسب و کار شما ارائه می‌دهیم.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "امنیت و انطباق",
                description: "راه‌حل‌های جامع امنیتی برای محافظت از دارایی‌های دیجیتال شما.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "بهینه‌سازی عملکرد",
                description: "سرعت بخشیدن به برنامه‌های شما و بهبود تجربه کاربری.",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "مشاوره",
                description: "راهنمایی استراتژیک برای کمک به تصمیم‌گیری‌های آگاهانه فناوری.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "پشتیبانی و نگهداری",
                description: "پشتیبانی مداوم و نگهداری برای حفظ عملکرد بهینه سیستم‌ها.",
                color: "from-teal-500 to-teal-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              فرآیند کار ما
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              ما از یک روش‌شناسی اثبات شده پیروی می‌کنیم تا تحویل موفق پروژه را تضمین کنیم.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "۰۱",
                title: "کشف و تحلیل",
                description: "اهداف کسب و کار و نیازمندی‌های شما را درک می‌کنیم."
              },
              {
                step: "۰۲",
                title: "برنامه‌ریزی",
                description: "برنامه‌ای دقیق از پروژه و جدول زمانی ایجاد می‌کنیم."
              },
              {
                step: "۰۳",
                title: "توسعه",
                description: "راه‌حل شما را با استفاده از تکنولوژی‌های مدرن می‌سازیم."
              },
              {
                step: "۰۴",
                title: "راه‌اندازی",
                description: "راه‌حل شما را مستقر و برای موفقیت بهینه‌سازی می‌کنیم."
              }
            ].map((step, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-white leading-relaxed">{step.description}</p>
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
              آماده شروع هستید؟
          </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              بیایید در مورد پروژه شما صحبت کنیم و ببینیم چگونه می‌توانیم به زنده کردن دیدگاه شما کمک کنیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <span className="flex items-center justify-center">
                  پروژه خود را شروع کنید
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
                مشاوره برنامه‌ریزی کنید
              </button>
            </div>
          </motion.div>
              </div>
      </section>
          </div>
  )
}

export default Services