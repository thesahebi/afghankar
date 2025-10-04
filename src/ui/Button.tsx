import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-primary hover:bg-primary hover:text-white focus:ring-primary border border-primary',
    accent: 'bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  const buttonContent = (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  )
  
  if (href) {
    return (
      <Link to={href} className="inline-block">
        {buttonContent}
      </Link>
    )
  }
  
  return buttonContent
}

export default Button