import React from 'react';
import { X, ExternalLink, Play, FileText } from 'lucide-react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    title: string;
    description: string;
    scenario: string;
    objectives: string[];
    workflow: string[];
    resources: { name: string; url: string }[];
    deliverables: string[];
  } | null;
}

export const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{task.title}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Scenario</h3>
            <p className="text-gray-600 leading-relaxed">{task.scenario}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Objectives</h3>
            <ul className="space-y-2">
              {task.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Workflow Logic</h3>
            <div className="space-y-3">
              {task.workflow.map((step, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="font-medium text-gray-800 mb-2">Step {index + 1}</div>
                  <div className="text-gray-600">{step}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Resources</h3>
            <div className="grid gap-3">
              {task.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">{resource.name}</span>
                  <span className="text-blue-500 text-sm ml-auto group-hover:translate-x-1 transition-transform">→</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Deliverables</h3>
            <div className="space-y-2">
              {task.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};