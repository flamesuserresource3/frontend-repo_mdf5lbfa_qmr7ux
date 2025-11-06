import React, { useState } from 'react';
import { Upload, Database, FilePlus2, Link2, CheckCircle2 } from 'lucide-react';

const ImportCard = ({ title, description, icon: Icon, onImport }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 flex flex-col">
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-md bg-gray-100 text-gray-700 grid place-items-center">
        <Icon size={18} />
      </div>
      <div className="flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <button onClick={onImport} className="mt-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">
      <Upload size={16} /> Start import
    </button>
  </div>
);

export default function ResourcesPanel() {
  const [imports, setImports] = useState([]);

  const handleImport = (type) => {
    const id = crypto.randomUUID();
    setImports((prev) => [{ id, type, status: 'queued', createdAt: new Date().toISOString() }, ...prev]);
    setTimeout(() => setImports((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'processing' } : i))), 800);
    setTimeout(() => setImports((prev) => prev.map((i) => (i.id === id ? { ...i, status: 'completed' } : i))), 2200);
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Resources</h2>
        <p className="text-sm text-gray-500">Import data from files, databases, or URLs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ImportCard
          title="CSV/JSON file"
          description="Upload structured files and map fields."
          icon={FilePlus2}
          onImport={() => handleImport('file')}
        />
        <ImportCard
          title="Database"
          description="Connect to Postgres, MySQL, or MongoDB."
          icon={Database}
          onImport={() => handleImport('database')}
        />
        <ImportCard
          title="Public URL"
          description="Fetch content from an endpoint or sitemap."
          icon={Link2}
          onImport={() => handleImport('url')}
        />
      </div>

      <div className="mt-6 rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">Recent imports</div>
        <ul className="divide-y">
          {imports.length === 0 && (
            <li className="px-4 py-6 text-sm text-gray-500">No imports yet. Start one above.</li>
          )}
          {imports.map((imp) => (
            <li key={imp.id} className="px-4 py-3 flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-gray-100 grid place-items-center text-gray-700">
                {imp.type === 'file' && <FilePlus2 size={16} />} 
                {imp.type === 'database' && <Database size={16} />} 
                {imp.type === 'url' && <Link2 size={16} />} 
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 capitalize">{imp.type} import</p>
                <p className="text-xs text-gray-500">{new Date(imp.createdAt).toLocaleString()}</p>
              </div>
              <div className="text-xs">
                {imp.status === 'queued' && <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">Queued</span>}
                {imp.status === 'processing' && <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-800">Processing</span>}
                {imp.status === 'completed' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-800">
                    <CheckCircle2 size={14} /> Completed
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
