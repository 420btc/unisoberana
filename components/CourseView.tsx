
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { Lesson, Quiz } from '../types';

const CourseView: React.FC = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === id);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(course?.lessons[0] || null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizResults, setQuizResults] = useState<{score: number, finished: boolean}>({score: 0, finished: false});

  if (!course) return <div className="p-20 text-center">Curso no encontrado.</div>;

  const handleQuizSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let score = 0;
    course.quizzes.forEach((q, idx) => {
      const answer = formData.get(`q${idx}`);
      if (answer === q.correctAnswer.toString()) score++;
    });
    setQuizResults({ score, finished: true });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-8">
      {/* Sidebar - Lesson List */}
      <aside className="md:col-span-1 border-r border-gray-800 pr-4">
        <h2 className="text-lg font-bold mb-6 text-gold uppercase tracking-widest">Módulos</h2>
        <div className="space-y-2">
          {course.lessons.map(lesson => (
            <button
              key={lesson.id}
              onClick={() => { setActiveLesson(lesson); setQuizStarted(false); }}
              className={`w-full text-left p-3 rounded transition-all text-sm ${activeLesson?.id === lesson.id && !quizStarted ? 'bg-gold text-navy font-bold' : 'hover:bg-gray-800 text-gray-400'}`}
            >
              {lesson.title}
            </button>
          ))}
          {course.quizzes.length > 0 && (
            <button
              onClick={() => setQuizStarted(true)}
              className={`w-full text-left p-3 rounded transition-all text-sm ${quizStarted ? 'bg-gold text-navy font-bold' : 'bg-gold/10 text-gold hover:bg-gold/20'}`}
            >
              EXAMEN FINAL
            </button>
          )}
        </div>

        <div className="mt-12 p-4 bg-navy border border-gold/20 rounded">
          <p className="text-xs text-gray-500 mb-2">Dudas sobre esta lección?</p>
          <button className="w-full bg-navy border border-gold text-gold py-2 rounded text-xs hover:bg-gold hover:text-navy transition-all">
            Consultar a IA Grok
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:col-span-3">
        {quizStarted ? (
          <div className="bg-navy p-8 border border-gray-800 rounded-xl">
             <h2 className="text-2xl font-bold mb-6">Examen: {course.title}</h2>
             {quizResults.finished ? (
               <div className="text-center py-12">
                 <div className="text-6xl font-bold text-gold mb-4">{Math.round((quizResults.score / course.quizzes.length) * 100)}%</div>
                 <p className="text-xl mb-6">Puntuación: {quizResults.score} de {course.quizzes.length}</p>
                 {quizResults.score / course.quizzes.length >= 0.8 ? (
                   <div className="space-y-4">
                     <p className="text-green-400 font-bold">¡HAS APROBADO!</p>
                     <button className="bg-gold text-navy px-6 py-2 rounded font-bold">Descargar Certificado</button>
                   </div>
                 ) : (
                   <p className="text-red-400">No has alcanzado el 80% necesario para el certificado.</p>
                 )}
                 <button onClick={() => setQuizResults({score: 0, finished: false})} className="mt-8 text-gold underline">Reintentar</button>
               </div>
             ) : (
               <form onSubmit={handleQuizSubmit} className="space-y-8">
                 {course.quizzes.map((q, idx) => (
                   <div key={idx} className="space-y-4">
                     <p className="font-medium">{idx + 1}. {q.question}</p>
                     {q.options.map((opt, oIdx) => (
                       <label key={oIdx} className="flex items-center gap-3 cursor-pointer group">
                         <input type="radio" name={`q${idx}`} value={oIdx} required className="accent-gold" />
                         <span className="group-hover:text-gold transition-colors">{opt}</span>
                       </label>
                     ))}
                   </div>
                 ))}
                 <button type="submit" className="bg-gold text-navy px-8 py-3 rounded font-bold">Enviar Respuestas</button>
               </form>
             )}
          </div>
        ) : activeLesson ? (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white">{activeLesson.title}</h1>
            <div className="aspect-video bg-black rounded-xl flex items-center justify-center overflow-hidden border border-gray-800">
               {/* Placeholder for video content */}
               <div className="text-center">
                 <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/40">
                    <svg className="w-8 h-8 text-gold ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3a.5.5 0 00-.5.5v13a.5.5 0 00.757.429l11-6.5a.5.5 0 000-.858l-11-6.5a.5.5 0 00-.257-.071z"></path></svg>
                 </div>
                 <span className="text-gray-500 font-mono text-xs">LECTURA / VIDEO DISPONIBLE</span>
               </div>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {activeLesson.content}
              </p>
              <div className="p-6 bg-gold/5 border-l-4 border-gold rounded-r italic text-gray-400">
                Tip: La soberanía individual no se concede, se ejerce mediante el conocimiento de la Ley Natural.
              </div>
            </div>
            <div className="flex justify-between items-center pt-8 border-t border-gray-800">
              <button className="text-gold flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg> Anterior
              </button>
              <button className="bg-white text-navy px-6 py-2 rounded font-bold hover:bg-gold transition-colors">
                Marcar como Completada
              </button>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default CourseView;
