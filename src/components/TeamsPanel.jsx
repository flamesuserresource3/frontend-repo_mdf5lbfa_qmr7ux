import React, { useState } from 'react';
import { Plus, Users, UserPlus, X } from 'lucide-react';

function Modal({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={16} /></button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default function TeamsPanel() {
  const [teams, setTeams] = useState([
    { id: 't1', name: 'Core', members: 6, description: 'Product, Design, and Platform' },
    { id: 't2', name: 'Data', members: 4, description: 'Analytics and pipelines' },
  ]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', description: '' });

  const createTeam = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const newTeam = { id: crypto.randomUUID(), name: form.name.trim(), description: form.description.trim(), members: 1 };
    setTeams([newTeam, ...teams]);
    setForm({ name: '', description: '' });
    setOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Teams</h2>
          <p className="text-sm text-gray-500">Create and manage your teams in vyse.</p>
        </div>
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-500">
          <Plus size={16} /> New team
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {teams.map((t) => (
          <div key={t.id} className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center">
                  <Users size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.description || 'No description'}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{t.members} members</span>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-50">
                <UserPlus size={14} /> Invite
              </button>
              <button className="inline-flex items-center gap-1 px-2 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-50">Settings</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Create new team">
        <form onSubmit={createTeam} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Team name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. Core, Data, Growth"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="What is this team for?"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setOpen(false)} className="px-3 py-2 text-sm rounded-md border border-gray-200">Cancel</button>
            <button type="submit" className="px-3 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Create team</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
