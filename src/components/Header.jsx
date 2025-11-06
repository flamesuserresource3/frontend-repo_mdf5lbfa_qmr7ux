import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Header({ title }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-900 flex-1">{title}</h1>
        <div className="hidden md:flex items-center gap-2 flex-[2] max-w-xl">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search teams, resources, members..."
              className="w-full rounded-md border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <button className="relative p-2 rounded-md hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 px-2 py-1 rounded-full border border-gray-200 bg-white">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center text-sm font-semibold">V</div>
          <span className="hidden sm:block text-sm text-gray-700">you@vyse.app</span>
          <User className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
