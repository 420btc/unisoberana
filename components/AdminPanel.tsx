
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
}

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [resources, setResources] = useState<Resource[]>([]);
  const [newResource, setNewResource] = useState({ title: '', url: '', description: '' });

  // Load resources from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('custom_resources');
    if (saved) {
      setResources(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'soberano2026') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    const resource: Resource = {
      id: Date.now().toString(),
      ...newResource
    };
    
    const updatedResources = [...resources, resource];
    setResources(updatedResources);
    localStorage.setItem('custom_resources', JSON.stringify(updatedResources));
    setNewResource({ title: '', url: '', description: '' });
    alert('Recurso añadido. Recuerda subir el archivo PDF a la carpeta public/pdfs/ si usas una ruta local.');
  };

  const handleDelete = (id: string) => {
    const updated = resources.filter(r => r.id !== id);
    setResources(updated);
    localStorage.setItem('custom_resources', JSON.stringify(updated));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy px-4">
        <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl border border-gold/30 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gold mb-6 text-center">Acceso Soberano</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña de Mando"
            className="w-full bg-navy border border-gray-700 p-3 rounded mb-4 focus:border-gold outline-none text-white"
          />
          <button className="w-full bg-gold text-navy font-bold py-3 rounded hover:bg-white transition-all">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gold">Panel de Administración</h1>
        <button onClick={() => setIsAuthenticated(false)} className="text-gray-400 hover:text-white">Cerrar Sesión</button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Formulario de Subida */}
        <div className="bg-navy border border-gray-800 p-8 rounded-xl h-fit">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            Publicar Nuevo Recurso
          </h2>
          <form onSubmit={handleAddResource} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Título del Documento</label>
              <input
                type="text"
                required
                value={newResource.title}
                onChange={e => setNewResource({...newResource, title: e.target.value})}
                className="w-full bg-gray-900 border border-gray-700 p-3 rounded focus:border-gold outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">URL o Ruta Local</label>
              <div className="flex gap-2">
                <span className="bg-gray-800 p-3 rounded text-gray-500 select-none">/pdfs/</span>
                <input
                  type="text"
                  required
                  placeholder="documento.pdf"
                  value={newResource.url}
                  onChange={e => setNewResource({...newResource, url: e.target.value.replace('/pdfs/', '')})}
                  className="w-full bg-gray-900 border border-gray-700 p-3 rounded focus:border-gold outline-none"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Sube el archivo físicamente a la carpeta <span className="text-gold font-mono">public/pdfs</span> del proyecto.
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Descripción Corta</label>
              <textarea
                required
                value={newResource.description}
                onChange={e => setNewResource({...newResource, description: e.target.value})}
                className="w-full bg-gray-900 border border-gray-700 p-3 rounded focus:border-gold outline-none h-24"
              />
            </div>
            <button className="w-full bg-gold text-navy font-bold py-3 rounded hover:bg-white transition-all">
              Publicar en Biblioteca
            </button>
          </form>
        </div>

        {/* Lista de Recursos */}
        <div>
          <h2 className="text-xl font-bold mb-6">Recursos Publicados</h2>
          <div className="space-y-4">
            {resources.length === 0 && <p className="text-gray-500 italic">No hay recursos personalizados aún.</p>}
            {resources.map(res => (
              <div key={res.id} className="p-4 bg-gray-900 border border-gray-800 rounded flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">{res.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{res.description}</p>
                  <a href={`/pdfs/${res.url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:underline mt-2 inline-block">
                    Ver PDF: {res.url}
                  </a>
                </div>
                <button onClick={() => handleDelete(res.id)} className="text-red-500 hover:text-red-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
