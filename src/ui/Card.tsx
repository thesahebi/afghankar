import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md'
}) => {
  const baseClasses = 'bg-white rounded-xl border border-white shadow-md transition-all duration-300'
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default Card