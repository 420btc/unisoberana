
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="w-24 h-24 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-8">
         <span className="text-gold text-4xl font-bold">US</span>
      </div>
      <h1 className="text-5xl font-bold mb-8">Nuestra Misión</h1>
      <p className="text-xl text-gray-400 mb-12 leading-relaxed">
        Fundada por un colectivo de visionarios comprometidos con la libertad, esta universidad empodera a los individuos para estudiar y aplicar el iusnaturalismo en un mundo dominado por leyes positivas opresivas.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="p-8 border border-gray-800 rounded-2xl bg-navy/30">
          <h3 className="text-xl font-bold text-gold mb-4">Soberanía 2026</h3>
          <p className="text-gray-400 text-sm">
            Adaptamos conceptos clásicos a la era digital, incluyendo el uso de criptoactivos y la formación de comunidades autónomas fuera del control centralizado.
          </p>
        </div>
        <div className="p-8 border border-gray-800 rounded-2xl bg-navy/30">
          <h3 className="text-xl font-bold text-gold mb-4">Sin Dependencia</h3>
          <p className="text-gray-400 text-sm">
            Nuestra estructura es gratuita y accesible. No guardamos tus datos; fomentamos la privacidad como el primer paso hacia la libertad individual.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-6">Contacto y Feedback</h3>
        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <textarea className="w-full bg-navy border border-gray-700 p-4 rounded focus:border-gold outline-none h-32" placeholder="Tu mensaje para el equipo soberano..."></textarea>
          <button className="bg-gold text-navy font-bold px-8 py-3 rounded w-full">Enviar Comunicación</button>
        </form>
      </div>
    </div>
  );
};

export default About;
