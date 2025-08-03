import React from 'react';
import { CheckCircle, AlertTriangle, Link2, FileText } from 'lucide-react';

export const SubmissionGuidelines: React.FC = () => {
  const guidelines = [
    'Ensure all links are publicly accessible',
    'Each task has its corresponding submission',
    'Test all links and flows before submission',
    'You can only submit the assignment once'
  ];

  const requirements = [
    { icon: Link2, text: 'All submitted links/files must be publicly accessible' },
    { icon: FileText, text: 'Video recordings for Tasks 2 & 3 uploaded to Google Drive' },
    { icon: CheckCircle, text: 'Public flowchart link for Task 1' },
    { icon: AlertTriangle, text: 'Test everything before final submission' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Final Submission Guidelines</h2>
          <p className="text-xl text-gray-600">
            Critical requirements to ensure successful assignment submission
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Submission Checklist
            </h3>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Technical Requirements
            </h3>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <req.icon className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{req.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-800 mb-2">Important Reminder</h4>
              <p className="text-amber-700">
                This assignment can only be submitted once. Please ensure all deliverables are complete, 
                tested, and publicly accessible before final submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};