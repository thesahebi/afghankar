import React from "react";
import { FeatureModelProps } from "./feature-model";

const FeatureCardV1: React.FC<FeatureModelProps> = ({
  cardClass,
  icon: Icon,
  title,
  content,
  bgColor,
  iconColor
}) => {
  return (
    <div className={`${cardClass} text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg h-full flex flex-col`}>
      <div className="flex justify-center mb-4">
        <div
          className="h-32 w-32 rounded-full flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          {typeof Icon === "function" ? (
            <Icon
              className="h-8 w-8"
              style={{ color: iconColor }}
            />
          ) : (
            Icon
          )}
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCardV1;
