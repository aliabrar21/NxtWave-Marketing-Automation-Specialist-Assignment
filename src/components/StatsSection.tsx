import React from 'react';
import { Clock, Target, Users, Zap } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    { icon: Target, label: 'Tasks to Complete', value: '3', color: 'text-blue-600' },
    { icon: Clock, label: 'Estimated Duration', value: '5-7 days', color: 'text-purple-600' },
    { icon: Users, label: 'Skills Demonstrated', value: '8+', color: 'text-pink-600' },
    { icon: Zap, label: 'Automation Tools', value: '4', color: 'text-indigo-600' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Assignment Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive evaluation of marketing automation expertise across workflow design, 
            chatbot development, and tool integration capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${stat.color.replace('text-', 'bg-').replace('600', '100')} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};