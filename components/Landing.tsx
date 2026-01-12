
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-navy py-32">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           <div className="w-full h-full border-[100px] border-gold rounded-full blur-[200px] animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto space-y-12 py-12">
          
          {/* Original Hero Content Restored */}
          <div className="mb-24 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Universidad Soberana: <br/>
              <span className="text-gold">Recupera tu Derecho Natural</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
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

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent my-12"></div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              El Ser Humano: <br/>
              <span className="text-3xl md:text-5xl font-light italic">De la Libertad Natural a la Esclavitud Invisible</span>
            </h1>
            
            <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto space-y-8 text-left md:text-justify">
              <p>
                Naciste libre. Con un espíritu soberano, un alma viva y un cuerpo que pertenece solo a ti. 
                Tu existencia no era una ficha de registro, ni una mercancía flotando en el mar de las ficciones jurídicas. 
                Eras un ser natural, dotado de derechos inherentes que ninguna autoridad creada por el hombre podía otorgar ni quitar.
              </p>
              
              <p className="border-l-4 border-gold pl-6 py-2 italic bg-white/5">
                Pero en algún punto de la historia, la trampa se activó. A través del lenguaje manipulador y las definiciones jurídicas ocultas, el ser humano fue despojado de su esencia.
              </p>

              <p>
                El "nacimiento" dejó de ser el milagro de la vida para convertirse en el acto de registro que crea una <span className="text-gold font-bold">Persona</span> jurídica —una máscara artificial, una entidad sin alma ni espíritu, separada del ser humano vivo.
                La <span className="text-gold font-bold">Persona</span> (del latín persona = máscara) no es tú: es la ficción que el Estado administra, controla y puede imponer, gravar o incluso "asesinar" simbólicamente.
              </p>
            </div>
          </div>

          <div className="bg-black/40 p-8 rounded-2xl border border-gold/30 text-left">
            <h3 className="text-2xl font-bold text-gold mb-6 border-b border-gray-700 pb-2">Mecanismos Históricos y Legales</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="text-gold font-bold">▹</span>
                <span>
                  <strong className="text-white">Unam Sanctam (1302):</strong> La bula papal que reclamó la propiedad espiritual de todas las almas, estableciendo la primera "fideicomiso" global sobre la humanidad bajo la ley eclesiástica.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">▹</span>
                <span>
                  <strong className="text-white">Cestui Que Vie Act (1666):</strong> Presumió la muerte de los desaparecidos (o "perdidos en el mar"), permitiendo tratar sus bienes —y por extensión, a los humanos registrados— como propiedades administrables, ahogados en la <span className="text-gold font-bold">Ley</span> del almirantazgo marítimo llevada a tierra.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">▹</span>
                <span>
                  <strong className="text-white">Convenciones de Montevideo (1933) y Viena (1961/1969):</strong> Tejieron el entramado entre Estados. <span className="italic">Montevideo</span> definió qué es un Estado (población, territorio, gobierno) y <span className="italic">Viena</span> blindó las relaciones diplomáticas y tratados, creando un club cerrado donde el individuo queda subsumido en un sistema que lo convierte en mero elemento de su maquinaria.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold">▹</span>
                <span>
                  <strong className="text-white">Código Uniforme de Comercio (UCC):</strong> Completó la ilusión: tu certificado de nacimiento se interpreta como un título de propiedad, un "bill of lading" que te convierte en mercancía sin vida propia.
                </span>
              </li>
            </ul>
          </div>

          <div className="text-lg md:text-xl text-gray-300 leading-relaxed text-left md:text-justify space-y-6">
            <h3 className="text-3xl font-bold text-white text-center">Resultado: 2026</h3>
            <p>
              Hoy, la mayoría vive como esclavos consentidos dentro de una ficción. Crees que eres libre porque puedes votar, trabajar o viajar... pero solo dentro de los límites que la <span className="text-gold font-bold">Persona</span> ficticia permite. Tu verdadera libertad fue secuestrada hace siglos.
            </p>
            <p className="font-bold text-center text-xl text-white">
              Sin embargo, la verdad persiste.
            </p>
            <p>
              La <span className="text-gold font-bold">Ley</span> natural (iusnaturalismo) es la pura verdad que no depende de parlamentos, tratados ni códigos positivos. Es el derecho inherente al ser humano vivo: existir, actuar, comerciar y asociarse según tu conciencia y las costumbres ancestrales, sin necesidad de permiso estatal. Y lo más poderoso: esta ley no ha desaparecido. Está latente, esperando que la reclames ante <span className="text-gold font-bold">Dios</span> y la creación.
            </p>
          </div>

          <div className="bg-gold/10 p-8 rounded-2xl border border-gold text-center space-y-6">
            <h2 className="text-2xl font-bold text-gold">En Universidad Soberana no vendemos ilusiones</h2>
            <p className="text-gray-300">Te entregamos las herramientas para estudiar, comprender y aplicar:</p>
            <div className="grid md:grid-cols-2 gap-4 text-left text-sm">
              <div className="flex items-center gap-2">✅ El iusnaturalismo en su esencia más pura</div>
              <div className="flex items-center gap-2">✅ Cómo identificar y rechazar las ficciones jurídicas</div>
              <div className="flex items-center gap-2">✅ Uso práctico del derecho consuetudinario y UCC</div>
              <div className="flex items-center gap-2">✅ Creación de micronaciones y comunidades autónomas</div>
            </div>
            <p className="font-bold text-white pt-4">
              Porque tú no eres una mercancía ahogada. No eres una máscara. <br/>
              Eres un ser vivo, soberano por naturaleza.
            </p>
            
            <div className="pt-6">
              <Link to="/courses" className="inline-block bg-gold text-navy px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-gold/20 animate-pulse">
                Inscribirse Gratis →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Citas / Testimonios (Mantenido) */}
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
    </div>
  );
};

export default Landing;
