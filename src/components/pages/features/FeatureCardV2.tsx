import React from "react";
import { FeatureModelProps } from "./feature-model";

const FeatureCardV2: React.FC<FeatureModelProps> = ({
  cardClass,
  icon: Icon,
  title,
  content,
  bgColor,
  iconColor,
  iconCradDIVClass =''
}) => {
  return (
    <div
      className={`${cardClass} text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg h-full flex flex-col`}
    >
      <div className="flex justify-center mb-4">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${iconCradDIVClass}`}
          style={{ backgroundColor: bgColor }}
        >
          {typeof Icon === "function" ? (
            <Icon size={24} style={{ color: iconColor }} />
          ) : (
            Icon
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCardV2;
