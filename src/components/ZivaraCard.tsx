import React from 'react'
import { motion } from 'framer-motion'

interface ZivaraCardProps {
  icon: string | React.ReactNode
  title: string
  content: string
  bgColor: string
  iconColor?: string
  cardClass?: string
  iconCardDivClass?: string
  features?: string[]
  variant?: 'v1' | 'v2'
}

const ZivaraCard: React.FC<ZivaraCardProps> = ({
  icon,
  title,
  content,
  bgColor,
  iconColor = '#ffffff',
  cardClass = '',
  iconCardDivClass = '',
  features = [],
  variant = 'v2'
}) => {
  if (variant === 'v1') {
    return (
      <motion.div
        className={`${cardClass} text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex justify-center mb-6">
          <div
            className="h-32 w-32 rounded-full flex items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            {typeof icon === 'string' ? (
              <span className="text-4xl">{icon}</span>
            ) : (
              icon
            )}
          </div>
        </div>
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white dark:text-white">{title}</h3>
        </div>
        <div className="mb-4 flex-grow">
          <p className="text-white text-sm leading-relaxed">{content}</p>
        </div>
        {features.length > 0 && (
          <div className="mt-auto">
            <ul className="text-xs text-white space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="w-1 h-1 bg-white rounded-full ml-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    )
  }

  // V2 variant (default) - Now vertical layout like V1
  return (
    <motion.div
      className={`${cardClass} text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex justify-center mb-6">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${iconCardDivClass}`}
          style={{ backgroundColor: bgColor }}
        >
          {typeof icon === 'string' ? (
            <span className="text-2xl" style={{ color: iconColor }}>
              {icon}
            </span>
          ) : (
            icon
          )}
        </div>
      </div>
      
      <div className="mb-3">
        <h3 className="text-lg font-bold text-white dark:text-white">{title}</h3>
      </div>
      <div className="mb-4 flex-grow">
        <p className="text-sm text-white leading-relaxed">{content}</p>
      </div>
      {features.length > 0 && (
        <div className="mt-auto">
          <ul className="text-xs text-white space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="w-1 h-1 bg-white rounded-full ml-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}

export default ZivaraCard
