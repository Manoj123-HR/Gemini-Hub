
import React, { useState } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import SearchChat from './components/SearchChat';
import ImageEditor from './components/ImageEditor';
import VoiceConversation from './components/VoiceConversation';
import VideoGenerator from './components/VideoGenerator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.SEARCH);

  const renderView = () => {
    switch (currentView) {
      case AppView.SEARCH:
        return <SearchChat />;
      case AppView.IMAGE_EDIT:
        return <ImageEditor />;
      case AppView.VOICE:
        return <VoiceConversation />;
      case AppView.VEO_ANIMATE:
        return <VideoGenerator />;
      default:
        return <SearchChat />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 relative flex flex-col min-w-0">
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              {currentView === AppView.SEARCH && "Search Grounded Intelligence"}
              {currentView === AppView.IMAGE_EDIT && "AI Image Editor"}
              {currentView === AppView.VOICE && "Native Voice Conversation"}
              {currentView === AppView.VEO_ANIMATE && "Veo Video Animator"}
            </h1>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">API: Gemini 2.5/3.0</span>
          </div>
        </header>
        <div className="flex-1 overflow-auto bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
