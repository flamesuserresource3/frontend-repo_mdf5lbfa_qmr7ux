import React from 'react';
import { LayoutDashboard, Users, Boxes, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
      active ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default function Sidebar({ activeTab, onNavigate }) {
  return (
    <aside className="h-full w-64 bg-gray-950 text-white flex flex-col border-r border-white/10">
      <div className="px-4 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold">V</div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">vyse</span>
            <span className="text-xs text-gray-400">Control Center</span>
          </div>
        </div>
      </div>

      <nav className="p-3 space-y-1">
        <NavItem icon={LayoutDashboard} label="Overview" active={activeTab === 'overview'} onClick={() => onNavigate('overview')} />
        <NavItem icon={Users} label="Teams" active={activeTab === 'teams'} onClick={() => onNavigate('teams')} />
        <NavItem icon={Boxes} label="Resources" active={activeTab === 'resources'} onClick={() => onNavigate('resources')} />
        <NavItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => onNavigate('settings')} />
      </nav>

      <div className="mt-auto p-3 text-xs text-gray-400">
        <div className="rounded-md bg-white/5 p-3 border border-white/10">
          <p className="font-medium text-gray-200">Workspace</p>
          <p className="truncate">vyse-default</p>
        </div>
      </div>
    </aside>
  );
}
