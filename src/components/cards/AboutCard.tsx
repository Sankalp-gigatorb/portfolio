import React from "react";

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  description,
  color,
}) => (
  <div className={`${color} rounded-2xl p-6 flex gap-4 items-start max-w-md`}>
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default AboutCard;
