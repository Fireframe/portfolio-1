
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-[#050505]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-sm flex items-center justify-center font-pixel text-white">P</div>
          <span className="font-pixel text-xl tracking-tighter text-white">PIXEL<span className="text-blue-500">DEV</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
          <a href="#jogos" className="hover:text-purple-400 transition-colors">Jogos</a>
          <a href="#artes" className="hover:text-purple-400 transition-colors">Artes</a>
          <a href="#habilidades" className="hover:text-purple-400 transition-colors">Habilidades</a>
          <a href="#contato" className="px-5 py-2 border border-purple-500 text-purple-400 rounded-sm hover:bg-purple-500 hover:text-white transition-all">Contrate-me</a>
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
