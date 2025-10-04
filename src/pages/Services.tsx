import React from 'react'
import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Button from '../ui/Button'

const Services: React.FC = () => {
  return (
    <div>
      <Section background="gradient" className="min-h-[60vh] flex items-center">
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            خدمات ما
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            راه‌حل‌های جامع و نوآورانه برای تمام نیازهای فناوری شما
          </motion.p>
        </div>
      </Section>
    </div>
  )
}

export default Services