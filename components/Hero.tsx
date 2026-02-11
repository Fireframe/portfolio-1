
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <span className="font-pixel text-purple-400 text-sm md:text-base mb-4 block animate-bounce tracking-widest">
          SISTEMA_INICIADO_COM_SUCESSO // v2.0
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none uppercase">
          EU CRIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">MUNDOS VIRTUAIS</span> & PIXELS
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvedor de Jogos Full-stack e Artista Pixel Art baseado no vácuo digital. Especializado em estética indie, mecânicas táteis e assets 2D de alta qualidade.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#jogos" className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white font-pixel rounded-sm hover:bg-purple-700 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
            VER PROJETOS
          </a>
          <a href="#contato" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-pixel rounded-sm hover:bg-white/10 transition-all">
            ENTRAR EM CONTATO
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce">
        <span className="text-xs font-pixel uppercase mb-2">Role para baixo</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
