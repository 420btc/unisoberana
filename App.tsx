
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CourseCatalog from './components/CourseCatalog';
import CourseView from './components/CourseView';
import Resources from './components/Resources';
import Forum from './components/Forum';
import About from './components/About';
import { UserProgress } from './types';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-navy text-gray-100 selection:bg-gold selection:text-navy">
        <Navbar onSearch={setSearchQuery} />
        
        <main className="pt-20 pb-12">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/courses" element={<CourseCatalog searchQuery={searchQuery} />} />
            <Route path="/course/:id" element={<CourseView />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
          <p>© 2026 Universidad Soberana - Comunidad de Librepensadores</p>
          <p className="mt-2">Tus datos son tuyos, no ficciones estatales.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
