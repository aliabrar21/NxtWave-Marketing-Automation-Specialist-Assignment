import React, { useState } from 'react';
import { Workflow, Bot, Link } from 'lucide-react';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { TaskModal } from './components/TaskModal';
import { StatsSection } from './components/StatsSection';
import { SubmissionGuidelines } from './components/SubmissionGuidelines';
import { tasksData } from './data/tasksData';

const iconMap = {
  Workflow,
  Bot,
  Link
};

function App() {
  const [selectedTask, setSelectedTask] = useState<typeof tasksData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTaskClick = (task: typeof tasksData[0]) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <StatsSection />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Assignment Tasks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete all three tasks to demonstrate your marketing automation expertise. 
            Click on each task card to view detailed requirements and specifications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tasksData.map((task) => {
            const IconComponent = iconMap[task.icon as keyof typeof iconMap];
            return (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                icon={IconComponent}
                color={task.color}
                tools={task.tools}
                deliverables={task.deliverables}
                onClick={() => handleTaskClick(task)}
              />
            );
          })}
        </div>
      </main>
      
      <SubmissionGuidelines />
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Workflow className="w-6 h-6" />
            <span className="text-xl font-bold">Marketing Automation Portfolio</span>
          </div>
          <p className="text-gray-400">
            Demonstrating expertise in workflow design, chatbot development, and tool integration
          </p>
        </div>
      </footer>
      
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        task={selectedTask}
      />
    </div>
  );
}

export default App;