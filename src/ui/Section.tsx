import React from 'react'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  id
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-white',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-white to-gray-50'
  }
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }
  
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`
  
  return (
    <section id={id} className={classes}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Section