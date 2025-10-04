import React from 'react'
import { motion } from 'framer-motion'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'xl',
  id
}) => {
  const baseClasses = 'w-full'
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary',
    gradient: 'bg-gradient-to-br from-primary via-primary-light to-secondary'
  }
  
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
    '2xl': 'py-24'
  }
  
  const sectionClasses = `${baseClasses} ${backgrounds[background]} ${paddings[padding]} ${className}`
  
  return (
    <motion.section
      id={id}
      className={sectionClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        {children}
      </Container>
    </motion.section>
  )
}

export default Section