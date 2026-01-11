import React from 'react';

interface Feature {
  text: string;
  color: string;
}

interface ModelCardProps {
  model: 'kling' | 'runway' | 'veo';
  badge: string;
  title: string;
  priceLabel: string;
  price: string;
  priceBorderColor?: string;
  priceLabelColor?: string;
  demoText: string;
  features: Feature[];
  note: string;
}

const ModelCard: React.FC<ModelCardProps> = ({
  model,
  badge,
  title,
  priceLabel,
  price,
  priceBorderColor = '',
  priceLabelColor = 'text-blue-300',
  demoText,
  features,
  note
}) => {
  const badgeClass = `badge-${model}`;
  
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className={`${badgeClass} text-xs font-bold px-3 py-1 rounded-full uppercase text-white`}>
          {badge}
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className={`mb-4 p-3 rounded-lg price-tag flex justify-between items-center ${priceBorderColor}`}>
        <span className={`text-sm font-semibold ${priceLabelColor}`}>{priceLabel}</span>
        <span className="font-bold">{price}</span>
      </div>
      
      <div className="mb-6 rounded-lg overflow-hidden bg-slate-800 h-40 flex items-center justify-center border border-slate-700">
        <span className="text-slate-500">{demoText}</span>
      </div>
      
      <ul className="space-y-3 flex-grow text-sm text-gray-200">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`${feature.color} mr-2`}>✓</span>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-slate-700 text-center">
        <span className="text-xs text-gray-400 font-medium italic">{note}</span>
      </div>
    </div>
  );
};

export default ModelCard;