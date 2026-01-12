
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           {/* Minimalist Eagle SVG pattern background could go here */}
           <div className="w-full h-full border-[100px] border-gold rounded-full blur-[200px] animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Universidad Soberana: <br/>
            <span className="text-gold">Recupera tu Derecho Natural</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            Estudia iusnaturalismo, tratados internacionales y derecho marítimo para vivir libre de ficciones jurídicas estatales en 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-gold text-navy px-8 py-4 rounded font-bold text-lg hover:bg-white transition-all shadow-lg shadow-gold/20">
              Inscribirse Gratis
            </Link>
            <Link to="/about" className="border border-gold text-gold px-8 py-4 rounded font-bold text-lg hover:bg-gold/10 transition-all">
              Saber Más
            </Link>
          </div>
        </div>
      </section>

      {/* Citas / Testimonios */}
      <section className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-8 border border-gray-800 rounded-xl bg-navy/50 relative">
              <span className="absolute -top-4 left-4 text-4xl text-gold">"</span>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                {t.quote}
              </p>
              <h4 className="font-bold text-gold uppercase tracking-widest text-sm">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario Simple */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto bg-navy border border-gray-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Únete a la Red Soberana</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nombre (o Alias)" className="w-full bg-navy border border-gray-700 p-3 rounded focus:border-gold outline-none" />
            <input type="email" placeholder="Email (Opcional)" className="w-full bg-navy border border-gray-700 p-3 rounded focus:border-gold outline-none" />
            <button className="w-full bg-gold text-navy font-bold p-3 rounded hover:bg-white transition-all">Acceso Anónimo</button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">Privacidad garantizada por la Ley Natural.</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
