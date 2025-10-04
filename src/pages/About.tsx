import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'

const About: React.FC = () => {
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

  const teamMembers = [
    { name: 'احمد سعیدی', role: 'مدیر عامل', bio: 'بیش از 15 سال تجربه در مدیریت پروژه‌های فناوری اطلاعات.', img: 'https://via.placeholder.com/150/1A73E8/FFFFFF?text=AS' },
    { name: 'فاطمه حسینی', role: 'مدیر فنی', bio: 'متخصص در توسعه نرم‌افزار و معماری سیستم‌های ابری.', img: 'https://via.placeholder.com/150/1A73E8/FFFFFF?text=FH' },
    { name: 'محمود کریمی', role: 'مدیر بازاریابی', bio: 'استراتژیست بازاریابی دیجیتال با تمرکز بر رشد کسب و کار.', img: 'https://via.placeholder.com/150/1A73E8/FFFFFF?text=MK' },
    { name: 'زهرا نوری', role: 'طراح UI/UX', bio: 'خالق تجربه‌های کاربری بصری و جذاب.', img: 'https://via.placeholder.com/150/1A73E8/FFFFFF?text=ZN' },
  ]

  const timelineEvents = [
    { year: '2018', title: 'تاسیس افغان کار', description: 'شروع فعالیت با هدف ارائه خدمات نوین فناوری اطلاعات.' },
    { year: '2019', title: 'گسترش خدمات وب', description: 'افزودن طراحی و توسعه وب‌سایت به سبد خدمات.' },
    { year: '2021', title: 'ورود به حوزه ابری', description: 'ارائه راه‌حل‌های ابری و مشاوره امنیت سایبری.' },
    { year: '2023', title: 'راه‌اندازی بخش تحقیق و توسعه', description: 'تمرکز بر نوآوری و توسعه محصولات جدید.' },
    { year: '2024', title: 'همکاری‌های بین‌المللی', description: 'شروع همکاری با شرکت‌های بین‌المللی و گسترش بازار.' },
  ]

  return (
    <>
      <Section className="bg-primary text-white py-20 md:py-24 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          درباره ما
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
        >
          داستان ما، ارزش‌های ما و تیمی که پشت افغان کار ایستاده است.
        </motion.p>
      </Section>

      <Section className="bg-white py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="lg:order-2 text-center lg:text-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              ماموریت و چشم‌انداز ما
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              ماموریت افغان کار توانمندسازی کسب و کارها از طریق ارائه راه‌حل‌های فناوری اطلاعات نوآورانه، قابل اعتماد و مقیاس‌پذیر است. ما متعهد به کمک به مشتریان خود برای دستیابی به اهدافشان و پیشرفت در دنیای دیجیتال هستیم.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              چشم‌انداز ما این است که به عنوان شریک فناوری اطلاعات پیشرو در منطقه شناخته شویم، با ارائه خدمات استثنایی و ایجاد ارزش پایدار برای مشتریان و جامعه.
            </p>
          </div>
          <div className="lg:order-1">
            <motion.img
              src="https://via.placeholder.com/600x400/1A73E8/E3F2FD?text=Our+Mission"
              alt="Our Mission"
              className="rounded-2xl shadow-xl w-full h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          تیم ما
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div variants={fadeInVariants} key={index}>
              <Card className="text-center h-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          مسیر رشد ما
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute right-1/2 transform translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInVariants}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg ml-4">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </Card>
              </div>
              <div className="hidden md:block absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default About