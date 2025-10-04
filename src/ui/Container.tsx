import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  padding = 'lg'
}) => {
  const baseClasses = 'mx-auto'
  
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }
  
  const paddings = {
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12'
  }
  
  const containerClasses = `${baseClasses} ${sizes[size]} ${paddings[padding]} ${className}`
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}

export default Container