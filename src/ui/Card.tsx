import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'lg',
  shadow = 'lg'
}) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-200 overflow-hidden'
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const shadows = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  }
  
  const cardClasses = `${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${className}`
  
  if (hover) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ 
          y: -8,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    )
  }
  
  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

export default Card