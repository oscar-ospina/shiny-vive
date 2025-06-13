import React from "react";

type OptionCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-serif text-brand-text mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default OptionCard;
