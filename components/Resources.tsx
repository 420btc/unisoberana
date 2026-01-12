import React, { useState, useEffect } from 'react';
import { GLOSSARY, TREATY_TEXTS } from '../constants';

interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
}

const Resources: React.FC = () => {
  const [activeText, setActiveText] = useState<{title: string, content: string} | null>(null);
  const [customResources, setCustomResources] = useState<Resource[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('custom_resources');
    if (saved) {
      setCustomResources(JSON.parse(saved));
    }
  }, []);

  const openResource = (title: string) => {
    // Si es un recurso custom (PDF subido)
    const custom = customResources.find(r => r.title === title);
    if (custom) {
      window.open(`/pdfs/${custom.url}`, '_blank');
      return;
    }
    
    // Lógica para textos estáticos
    if (title.toLowerCase().includes('montevideo')) {
      setActiveText({ title: 'Convención de Montevideo', content: TREATY_TEXTS.montevideo });
    } else {
      // Fallback para otros textos no digitalizados aún
      setActiveText({ 
        title, 
        content: "Este documento está disponible solo en formato físico en la biblioteca de la Universidad o pendiente de digitalización." 
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <h1 className="text-4xl font-bold mb-8 italic">Biblioteca Digital Soberana</h1>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gold mb-6 border-b border-gold/20 pb-2">Textos Fundamentales (Lectura)</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Summa Theologica (Selección)', 'Convención de Montevideo', 'UCC Artículos Clave', 'Tratado de Viena'].map(item => (
                <button 
                  key={item} 
                  onClick={() => openResource(item)}
                  className="p-4 bg-navy border border-gray-800 rounded flex items-center justify-between hover:border-gold hover:bg-gray-900 transition-all cursor-pointer group text-left w-full"
                >
                  <span className="font-medium">{item}</span>
                  <svg className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-6 border-b border-gold/20 pb-2">Glosario Interactivo</h2>
            <div className="space-y-4">
              {GLOSSARY.map(g => (
                <div key={g.term} className="p-6 bg-navy/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">{g.term}</h3>
                  <p className="text-gray-400 leading-relaxed">{g.definition}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
           <div className="p-6 bg-gold text-navy rounded-xl shadow-lg shadow-gold/10">
              <h3 className="text-xl font-bold mb-4">Infografía del Despojo</h3>
              <p className="text-sm mb-4 font-medium opacity-90">Visualiza cómo el estado convierte al ser humano en mercancía mercantil.</p>
              <div className="space-y-4 font-bold text-xs">
                 <div className="p-3 border-2 border-navy rounded text-center bg-white/20">NACIMIENTO (Hecho Biológico)</div>
                 <div className="text-center font-bold text-lg">↓</div>
                 <div className="p-3 border-2 border-navy rounded text-center bg-white/20">REGISTRO (Ficción Jurídica)</div>
                 <div className="text-center font-bold text-lg">↓</div>
                 <div className="p-3 border-2 border-navy rounded text-center bg-white/20">CERTIFICADO = TÍTULO VALOR</div>
                 <div className="text-center font-bold text-lg">↓</div>
                 <div className="p-3 bg-navy text-gold rounded text-center shadow-lg">DEUDA ESTATAL (Colateral)</div>
              </div>
           </div>
        </aside>
      </div>

      {/* Modal / Lector */}
      {activeText && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-navy border border-gold rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl shadow-gold/30 animate-in fade-in zoom-in duration-300">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 rounded-t-xl">
              <h3 className="font-bold text-gold text-lg tracking-wide">{activeText.title}</h3>
              <button onClick={() => setActiveText(null)} className="text-gray-400 hover:text-white hover:bg-red-500/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors">✕</button>
            </div>
            <div className="p-8 overflow-y-auto whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-300 scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-navy">
              {activeText.content}
            </div>
            <div className="p-4 border-t border-gray-800 bg-gray-900/30 text-center text-xs text-gray-500">
              Documento digitalizado para fines educativos - Universidad Soberana 2026
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;