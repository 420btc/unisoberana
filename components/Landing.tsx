
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Landing: React.FC = () => {
  const [showEvidence, setShowEvidence] = useState(false);

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
                <button 
                  onClick={() => setShowEvidence(true)}
                  className="ml-2 text-xs border border-gold/50 text-gold px-2 py-0.5 rounded hover:bg-gold hover:text-navy transition-all align-middle"
                >
                  Ver Evidencia Jurídica (RAE)
                </button>
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

      {/* Modal Bloqueado de Evidencia */}
      {showEvidence && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] flex flex-col relative shadow-2xl shadow-gold/20 overflow-hidden border-2 border-gold animate-in fade-in zoom-in duration-300">
            <div className="bg-navy p-4 flex justify-between items-center border-b border-gold">
              <h3 className="text-gold font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.85.577-4.147M5.106 18.853c.633-.762 1.104-1.574 1.402-2.399m1.272-5.756A10.038 10.038 0 0112 5c2.618 0 5.006.992 6.848 2.584"></path></svg>
                EVIDENCIA: Diccionario Panhispánico del Español Jurídico (RAE)
              </h3>
              <button 
                onClick={() => setShowEvidence(false)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition-colors font-bold text-sm"
              >
                CERRAR EVIDENCIA
              </button>
            </div>
            <div className="flex-1 bg-white relative overflow-y-auto p-8">
              {/* Simulación de la página de la RAE para evitar bloqueo X-Frame-Options */}
              <div className="max-w-3xl mx-auto font-serif text-gray-800">
                <div className="border-b border-red-800 pb-4 mb-6">
                  <h1 className="text-3xl font-bold text-red-800">Diccionario panhispánico del español jurídico</h1>
                  <p className="text-sm text-gray-500 mt-1">Real Academia Española</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-navy mb-4">nacimiento</h2>
                  
                  <div className="space-y-6">
                    <div className="pl-4 border-l-4 border-gray-300">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="bg-red-800 text-white text-xs px-1.5 py-0.5 rounded font-bold">1.</span>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Civ.</span>
                      </div>
                      <p className="text-lg leading-relaxed">
                        Hecho jurídico determinante de la adquisición de la <span className="bg-yellow-200 px-1 font-bold">personalidad jurídica</span>, que tiene lugar una vez producido el entero desprendimiento del seno materno.
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">CC, arts. 29 y 30.</p>
                    </div>

                    <div className="pl-4 border-l-4 border-gray-300">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="bg-red-800 text-white text-xs px-1.5 py-0.5 rounded font-bold">2.</span>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Pen.</span>
                      </div>
                      <p className="text-lg leading-relaxed">
                        Momento que determina el cese de la protección de la vida humana a través del delito de aborto y el inicio de su protección por medio del delito de homicidio o de asesinato.
                      </p>
                      <p className="text-sm text-gray-500 mt-2 italic">CP, arts. 138 y 144 y sigs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded text-sm text-gray-600 mt-12">
                  <p className="font-bold mb-2">Nota de la Universidad Soberana:</p>
                  <p>Esta es una transcripción fiel de la definición oficial. La RAE bloquea la inserción directa de su web en otras plataformas. Puedes verificar la fuente original aquí:</p>
                  <a href="https://dpej.rae.es/lema/nacimiento" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all mt-1 block">
                    https://dpej.rae.es/lema/nacimiento
                  </a>
                </div>
              </div>

              <div className="fixed bottom-0 left-0 right-0 bg-gold/90 text-navy text-center text-xs p-2 font-bold z-10">
                NOTA: Observa cómo el "nacimiento" se define como un HECHO JURÍDICO de adquisición de PERSONALIDAD (Ficción), no de VIDA.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
