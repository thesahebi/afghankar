import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import ZivaraStyleCard from '../components/ZivaraStyleCard'

const About: React.FC = () => {
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

  const teamMembers = [
    { 
      name: 'احمد سعیدی', 
      role: 'مدیر عامل', 
      bio: 'بیش از 15 سال تجربه در مدیریت پروژه‌های فناوری اطلاعات و رهبری تیم‌های توسعه.',
      img: 'https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=AS',
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'فاطمه حسینی', 
      role: 'مدیر فنی', 
      bio: 'متخصص در توسعه نرم‌افزار و معماری سیستم‌های ابری با تخصص در DevOps.',
      img: 'https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=FH',
      social: { linkedin: '#', github: '#' }
    },
    { 
      name: 'محمود کریمی', 
      role: 'مدیر بازاریابی', 
      bio: 'استراتژیست بازاریابی دیجیتال با تمرکز بر رشد کسب و کار و روابط عمومی.',
      img: 'https://via.placeholder.com/200x200/10B981/FFFFFF?text=MK',
      social: { linkedin: '#', twitter: '#' }
    },
    { 
      name: 'زهرا نوری', 
      role: 'طراح UI/UX', 
      bio: 'خالق تجربه‌های کاربری بصری و جذاب با تخصص در طراحی تعاملی.',
      img: 'https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=ZN',
      social: { linkedin: '#', dribbble: '#' }
    },
  ]

  const values = [
    {
      icon: '🎯',
      title: 'تمرکز بر کیفیت',
      description: 'ما به ارائه بالاترین کیفیت خدمات متعهد هستیم و استانداردهای صنعت را رعایت می‌کنیم.'
    },
    {
      icon: '🤝',
      title: 'همکاری و اعتماد',
      description: 'اعتماد و شفافیت در روابط با مشتریان و همکاران برای ما بسیار مهم است.'
    },
    {
      icon: '🚀',
      title: 'نوآوری مداوم',
      description: 'همیشه در جستجوی راه‌های جدید و بهتر برای حل مشکلات و بهبود خدمات هستیم.'
    },
    {
      icon: '💡',
      title: 'یادگیری و رشد',
      description: 'تیم ما به طور مداوم در حال یادگیری و بهبود مهارت‌های خود است.'
    }
  ]

  const timelineEvents = [
    { 
      year: '2018', 
      title: 'تاسیس افغان کار', 
      description: 'شروع فعالیت با هدف ارائه خدمات نوین فناوری اطلاعات.',
      icon: '🏢'
    },
    { 
      year: '2019', 
      title: 'گسترش خدمات وب', 
      description: 'افزودن طراحی و توسعه وب‌سایت به سبد خدمات.',
      icon: '🌐'
    },
    { 
      year: '2021', 
      title: 'ورود به حوزه ابری', 
      description: 'ارائه راه‌حل‌های ابری و مشاوره امنیت سایبری.',
      icon: '☁️'
    },
    { 
      year: '2023', 
      title: 'راه‌اندازی بخش تحقیق و توسعه', 
      description: 'تمرکز بر نوآوری و توسعه محصولات جدید.',
      icon: '🔬'
    },
    { 
      year: '2024', 
      title: 'همکاری‌های بین‌المللی', 
      description: 'شروع همکاری با شرکت‌های بین‌المللی و گسترش بازار.',
      icon: '🌍'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            درباره ما
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            داستان ما، ارزش‌های ما و تیمی که پشت افغان کار ایستاده است
          </motion.p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInVariants}
              className="text-center lg:text-right"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                ماموریت و چشم‌انداز ما
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">ماموریت ما</h3>
                  <p className="text-gray-700 leading-relaxed">
                    توانمندسازی کسب و کارها از طریق ارائه راه‌حل‌های فناوری اطلاعات نوآورانه، قابل اعتماد و مقیاس‌پذیر. ما متعهد به کمک به مشتریان خود برای دستیابی به اهدافشان و پیشرفت در دنیای دیجیتال هستیم.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">چشم‌انداز ما</h3>
                  <p className="text-gray-700 leading-relaxed">
                    به عنوان شریک فناوری اطلاعات پیشرو در منطقه شناخته شویم، با ارائه خدمات استثنایی و ایجاد ارزش پایدار برای مشتریان و جامعه.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Our+Mission"
                  alt="Our Mission"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ارزش‌های ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اصول و ارزش‌هایی که راهنمای کار ما هستند
            </p>
          </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainerVariants}
                className="flex flex-col space-y-8"
              >
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInVariants}
                  >
                    <ZivaraStyleCard
                      icon={value.icon}
                      title={value.title}
                      content={value.description}
                      bgColor="#dbeafe"
                      iconColor="#1A73E8"
                    />
                  </motion.div>
                ))}
              </motion.div>
        </div>
      </Section>

      {/* Team */}
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
              تیم ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              متخصصان مجرب و متعهد که پشت موفقیت افغان کار ایستاده‌اند
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInVariants}
                className="group"
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3 rtl:space-x-reverse">
                    <a href={member.social.linkedin} className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                      <span className="text-xs">in</span>
                    </a>
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                        <span className="text-xs">t</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              مسیر رشد ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              سفر ما از آغاز تا امروز
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute right-1/2 transform translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-xl ml-4 shadow-lg">
                        {event.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{event.year}</div>
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute right-1/2 transform translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              آماده همکاری با ما هستید؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              با تیم متخصص ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                تماس با ما
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
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

export default About