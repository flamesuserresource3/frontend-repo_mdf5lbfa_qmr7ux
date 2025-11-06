import React from 'react';
import { Activity, Users, FolderKanban, CloudUpload } from 'lucide-react';

const Stat = ({ icon: Icon, label, value, color }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 flex items-center gap-3">
    <div className={`h-10 w-10 rounded-md grid place-items-center text-white ${color}`}>
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat icon={Users} label="Teams" value={8} color="bg-indigo-600" />
        <Stat icon={FolderKanban} label="Projects" value={24} color="bg-violet-600" />
        <Stat icon={CloudUpload} label="Imports" value={12} color="bg-emerald-600" />
        <Stat icon={Activity} label="Uptime" value="99.98%" color="bg-amber-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-gray-200 bg-white">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium text-gray-700">Activity</p>
          </div>
          <ul className="divide-y">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="px-4 py-3 text-sm text-gray-700 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                New resource import completed in team Core.
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium text-gray-700">Shortcuts</p>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <button className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 text-left">Create team</button>
            <button className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 text-left">Import data</button>
            <button className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 text-left">Invite members</button>
            <button className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 text-left">Open settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
