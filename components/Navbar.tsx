
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onSearch: (q: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Cursos', path: '/courses' },
    { label: 'Recursos', path: '/resources' },
    { label: 'Foro', path: '/forum' },
    { label: 'Sobre Nosotros', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy/90 backdrop-blur-md border-b border-gold/20 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center text-navy font-bold">US</div>
          <span className="font-bold text-xl tracking-tighter text-gold hidden md:block">UNIVERSIDAD SOBERANA</span>
        </Link>

        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <input 
            type="text" 
            placeholder="Buscar lecciones o términos..."
            className="w-full bg-navy border border-gray-700 rounded-full px-4 py-1 text-sm focus:outline-none focus:border-gold transition-colors"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} className="text-sm font-medium hover:text-gold transition-colors">
              {item.label}
            </Link>
          ))}
          <button 
            onClick={() => navigate('/courses')}
            className="bg-gold text-navy px-4 py-1.5 rounded text-sm font-bold hover:bg-white transition-colors"
          >
            Estudiar
          </button>
        </div>

        <button className="md:hidden text-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy border-b border-gray-800 p-4 flex flex-col gap-4">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block py-2">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
