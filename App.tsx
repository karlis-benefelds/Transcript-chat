
import React, { useState, useEffect, useCallback } from 'react';
import { Role } from './types';
import type { ChatMessage, StudentAnalysis } from './types';
import { getInitialAnalysis, getChatResponse } from './services/geminiService';
import RoleSelector from './components/RoleSelector';
import ChatInterface from './components/ChatInterface';
import ProfessorView from './components/ProfessorView';
import StudentView from './components/StudentView';
import { BotIcon } from './components/Icons';

const App: React.FC = () => {
  const [role, setRole] = useState<Role | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialData, setInitialData] = useState<StudentAnalysis[] | string | null>(null);

  const handleInitialAnalysis = useCallback(async (currentRole: Role) => {
    if (!currentRole) return;
    setIsLoading(true);
    setInitialData(null);
    setChatHistory([]);
    try {
      const data = await getInitialAnalysis(currentRole);
      setInitialData(data);
      if (typeof data === 'string') {
          setChatHistory([{ sender: 'bot', text: data, isInitial: true }]);
      }
    } catch (error) {
      console.error('Error fetching initial analysis:', error);
      const errorMessage = {
        sender: 'bot' as const,
        text: 'Sorry, I encountered an error while analyzing the transcript. Please check the console or try refreshing the page.',
      };
      setChatHistory([errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    if (role) {
      handleInitialAnalysis(role);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  const handleSendMessage = async (message: string) => {
    if (!role) return;

    const newHistory: ChatMessage[] = [...chatHistory.filter(m => !m.isInitial), { sender: 'user', text: message }];
    setChatHistory(newHistory);
    setIsLoading(true);

    try {
      const responseText = await getChatResponse(role, message);
      setChatHistory([...newHistory, { sender: 'bot', text: responseText }]);
    } catch (error) {
      console.error('Error getting chat response:', error);
      setChatHistory([...newHistory, { sender: 'bot', text: 'Sorry, I had trouble getting a response. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetRole = () => {
    setRole(null);
    setInitialData(null);
    setChatHistory([]);
  };

  if (!role) {
    return <RoleSelector onSelectRole={setRole} />;
  }

  return (
    <div className="flex h-screen font-sans bg-slate-100 text-slate-800">
      {/* Left Panel: Analysis/Transcript View */}
      <div className="w-1/2 flex flex-col p-6 bg-white border-r border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-slate-800">
            {role === 'professor' ? 'Professor Dashboard' : 'Student Learning Hub'}
          </h1>
          <button 
            onClick={resetRole}
            className="text-sm text-sky-600 hover:text-sky-800 font-semibold transition-colors"
          >
            Change Role
          </button>
        </div>
        <div className="flex-grow bg-slate-50 rounded-lg p-4 overflow-y-auto custom-scrollbar">
          {isLoading && !initialData && (
             <div className="flex items-center justify-center h-full">
                <BotIcon className="h-8 w-8 text-sky-500 animate-bounce" />
                <p className="ml-4 text-lg text-slate-600">Analyzing transcript...</p>
            </div>
          )}
          {initialData && role === 'professor' && typeof initialData !== 'string' && (
            <ProfessorView analysis={initialData} />
          )}
          {initialData && role === 'student' && typeof initialData === 'string' && (
             <StudentView summary={initialData} />
          )}
        </div>
      </div>

      {/* Right Panel: Chat Interface */}
      <div className="w-1/2 flex flex-col">
        <ChatInterface
          chatHistory={chatHistory.filter(m => !m.isInitial)}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          role={role}
        />
      </div>
    </div>
  );
};

export default App;
