import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  tools: string[];
  deliverables: string[];
  onClick: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  tools,
  deliverables,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <div className={`${color} p-6`}>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-sm font-bold">→</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Tools & Platforms</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Deliverables</h4>
          <ul className="space-y-2">
            {deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};