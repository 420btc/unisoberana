
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../constants';

interface Props {
  searchQuery: string;
}

const CourseCatalog: React.FC<Props> = ({ searchQuery }) => {
  const filteredCourses = COURSES.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2 italic">Malla Curricular 2026</h2>
          <p className="text-gray-400">Desde la historia antigua hasta la aplicación técnica del UCC.</p>
        </div>
        <div className="text-sm font-mono text-gold bg-gold/5 px-3 py-1 rounded border border-gold/20">
          ESTADO: DESCENTRALIZADO
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <Link 
            key={course.id} 
            to={`/course/${course.id}`}
            className="group flex flex-col bg-navy border border-gray-800 rounded-xl overflow-hidden hover:border-gold transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-40 bg-gray-900 flex items-center justify-center relative">
              <span className="text-gold opacity-10 text-6xl font-bold select-none">{course.id}</span>
              <div className="absolute bottom-4 left-4">
                 <span className="text-[10px] uppercase tracking-widest bg-gold text-navy px-2 py-0.5 font-bold">{course.category}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">{course.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                <span>{course.lessons.length} Lecciones</span>
                <span>Gratis</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
