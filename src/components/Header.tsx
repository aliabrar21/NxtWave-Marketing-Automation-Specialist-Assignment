import React from 'react';
import { Workflow, Bot, Link, CheckCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Workflow className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marketing Automation Specialist
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">
            Assignment Portfolio
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Bot className="w-4 h-4" />
              <span>Omnichannel Workflows</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Link className="w-4 h-4" />
              <span>Chatbot Development</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span>Tool Integration</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};