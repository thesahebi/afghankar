import React from 'react'
import { motion } from 'framer-motion'

interface ZivaraStyleCardProps {
  icon: string | React.ReactNode
  title: string
  content: string
  bgColor?: string
  iconColor?: string
  cardClass?: string
  features?: string[]
}

const ZivaraStyleCard: React.FC<ZivaraStyleCardProps> = ({
  icon,
  title,
  content,
  bgColor = '#f8fafc',
  iconColor = '#3b82f6',
  cardClass = '',
  features = []
}) => {
  return (
    <motion.div
      className={`${cardClass} bg-white rounded-2xl p-8 shadow-sm border border-white hover:shadow-lg hover:border-white transition-all duration-300 h-full flex flex-col items-center text-center justify-center`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4 }}
    >
      {/* 1️⃣ Icon at the top - Updated */}
      <div className="mb-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
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

      {/* 2️⃣ Title below the icon */}
      <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
        {title}
      </h3>

      {/* 3️⃣ Subtitle below the title */}
      <p className="text-white text-sm leading-relaxed mb-6">
        {content}
      </p>
      
      {/* 4️⃣ List of items under the subtitle */}
      {features.length > 0 && (
        <div className="flex flex-col items-center text-center">
          <ul className="text-xs text-white space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-2"></div>
                  <span>{feature}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  )
}

export default ZivaraStyleCard
