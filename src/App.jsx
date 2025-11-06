import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Overview from './components/Overview.jsx';
import TeamsPanel from './components/TeamsPanel.jsx';
import ResourcesPanel from './components/ResourcesPanel.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'teams':
        return <TeamsPanel />;
      case 'resources':
        return <ResourcesPanel />;
      case 'settings':
        return (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
              <p className="text-sm text-gray-500">Manage workspace preferences for vyse.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Workspace name</label>
                  <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" defaultValue="vyse" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Default team</label>
                  <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Core</option>
                    <option>Data</option>
                    <option>Growth</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="px-3 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Save changes</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const titleMap = {
    overview: 'Dashboard',
    teams: 'Teams',
    resources: 'Resources',
    settings: 'Settings',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-900">
      <div className="h-screen w-full grid grid-cols-[16rem_1fr]">
        <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
        <div className="flex flex-col min-w-0">
          <Header title={`vyse · ${titleMap[activeTab]}`} />
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-4 md:p-6">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
