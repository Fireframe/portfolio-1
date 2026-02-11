
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import GeminiIdeaGenerator from './components/GeminiIdeaGenerator';
import { PROJECTS, SKILLS, SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 space-y-32 py-20">
        <Hero />

        {/* Seção de Projetos */}
        <section id="jogos" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-pixel tracking-tighter uppercase underline decoration-purple-600 underline-offset-8">Jogos em Destaque</h2>
            <p className="text-gray-500 text-lg">Uma seleção dos meus trabalhos profissionais e favoritos pessoais.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.filter(p => p.category === 'Game').map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Gerador de Ideias */}
        <section className="scroll-mt-24">
           <GeminiIdeaGenerator />
        </section>

        {/* Seção de Pixel Art */}
        <section id="artes" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-pixel tracking-tighter uppercase underline decoration-blue-600 underline-offset-8">Artefatos Pixel</h2>
            <p className="text-gray-500 text-lg">Sprites de personagens, tilesets e narrativa visual.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group relative aspect-square bg-[#0a0a0a] rounded overflow-hidden cursor-zoom-in">
                <img 
                  src={`https://picsum.photos/seed/pixelart${i}/400/400`} 
                  alt="Trabalho de Pixel Art" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-[10px] font-pixel text-white">RECURSO_00{i}.PNG</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades e Serviços */}
        <div id="habilidades" className="grid grid-cols-1 lg:grid-cols-2 gap-16 scroll-mt-24">
          <section>
            <h2 className="text-3xl font-bold mb-10 font-pixel tracking-tighter uppercase">Abilidades_</h2>
            <div className="space-y-6">
              {SKILLS.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-xs text-purple-400 font-pixel">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-10 font-pixel tracking-tighter uppercase">Serviços_</h2>
            <div className="space-y-4">
              {SERVICES.map(service => (
                <div key={service.title} className="p-6 bg-[#0a0a0a] border border-white/5 rounded-lg flex gap-6 hover:border-blue-500/30 transition-colors">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer / Contato */}
        <section id="contato" className="py-20 border-t border-white/10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-3xl mb-8 animate-bounce">
            💬
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-pixel tracking-tighter uppercase">Preparado para o Player 1?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Disponível para freelancers, contratos com estúdios ou apenas um papo sobre game jams. 
            Atualmente buscando projetos em pixel art de alta fidelidade e desenvolvimento em Godot.
          </p>
          <div className="flex gap-4">
            <a href="mailto:contato@pixeldev.com.br" className="px-10 py-4 bg-white text-black font-pixel text-sm rounded-sm hover:bg-purple-500 hover:text-white transition-all">
              ENVIAR MENSAGEM
            </a>
          </div>
          <div className="mt-20 text-[10px] font-pixel text-gray-700 tracking-[0.3em] uppercase">
            Desenvolvido com <span className="text-red-800">♥</span> & Estética Cyberpunk // 2024
          </div>
        </section>
      </main>

      {/* Floaters Interativos */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className="w-14 h-14 bg-purple-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
