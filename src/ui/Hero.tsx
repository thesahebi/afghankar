import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  background?: 'gradient' | 'primary' | 'secondary'
  stats?: Array<{
    number: string
    label: string
  }>
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  background = 'gradient',
  stats
}) => {
  const backgrounds = {
    gradient: 'bg-gradient-to-br from-primary via-primary-light to-secondary',
    primary: 'bg-primary',
    secondary: 'bg-secondary'
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
        ease: "easeOut"
      }
    }
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${backgrounds[background]}`}>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full filter blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full filter blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-40 left-1/2 w-80 h-80 bg-white/5 rounded-full filter blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-4 tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white/90 leading-tight">
                {subtitle}
              </div>
            )}
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              {description}
            </motion.p>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              {primaryButton && (
                <Button 
                  variant="accent" 
                  size="lg"
                  href={primaryButton.href}
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button 
                  variant="outline" 
                  size="lg"
                  href={secondaryButton.href}
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  {secondaryButton.text}
                </Button>
              )}
            </motion.div>
          )}

          {/* Stats */}
          {stats && (
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero