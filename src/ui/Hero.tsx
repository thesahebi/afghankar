import React from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'

interface HeroProps {
  headline: string
  subheadline?: string
  description?: string
  primaryCtaText?: string
  primaryCtaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  background?: 'gradient' | 'primary' | 'white'
  stats?: Array<{ number: string; label: string; icon?: string }>
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  description,
  primaryCtaText = 'شروع کنید',
  primaryCtaLink = '/contact',
  secondaryCtaText = 'بیشتر بدانید',
  secondaryCtaLink = '/about',
  background = 'gradient',
  stats = []
}) => {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-primary to-primary-dark text-white',
    primary: 'bg-primary text-white',
    white: 'bg-white'
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
  
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${backgroundClasses[background]}`}>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            {headline}
          </motion.h1>
          
          {/* Subheadline */}
          {subheadline && (
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white/90 leading-relaxed"
            >
              {subheadline}
            </motion.h2>
          )}
          
          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
          
          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              href={primaryCtaLink}
              className="w-full sm:w-auto"
            >
              {primaryCtaText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={secondaryCtaLink}
              className="w-full sm:w-auto"
            >
              {secondaryCtaText}
            </Button>
          </motion.div>
          
          {/* Stats */}
          {stats.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {stat.icon && (
                    <div className="text-3xl mb-2">{stat.icon}</div>
                  )}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero