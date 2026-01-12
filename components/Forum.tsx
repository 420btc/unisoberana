
import React from 'react';

const Forum: React.FC = () => {
  const posts = [
    { title: 'Cómo usé UCC para mi último contrato de servicios', author: 'Soberano123', category: 'UCC', comments: 12 },
    { title: 'Duda sobre la presunción de muerte en el Acta 1666', author: 'Naturalis', category: 'Iusnaturalismo', comments: 45 },
    { title: 'Primeros pasos para desregistrarse: Mi experiencia', author: 'FreeSpirit', category: 'Soberanía', comments: 89 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold italic">Foro de la Comunidad</h1>
        <button className="bg-gold text-navy font-bold px-6 py-2 rounded">Nuevo Hilo</button>
      </div>

      <div className="space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="p-6 bg-navy border border-gray-800 rounded-xl hover:border-gold/50 transition-all cursor-pointer group">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded font-bold uppercase tracking-widest mb-2 inline-block">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-2">Publicado por @{post.author}</p>
              </div>
              <div className="text-right">
                <div className="text-gold font-bold">{post.comments}</div>
                <div className="text-[10px] text-gray-600 uppercase">Comentarios</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 flex gap-4">
              <button className="text-xs text-gray-500 hover:text-white">Compartir</button>
              <button className="text-xs text-gray-500 hover:text-white">Reportar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
