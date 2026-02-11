
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const categoryMap = {
    'Game': 'Jogo',
    'Asset': 'Recurso',
    'Tool': 'Ferramenta'
  };

  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-pixel text-purple-400 uppercase tracking-widest">
            {categoryMap[project.category] || project.category}
          </span>
          <div className="flex gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-gray-400">{tag}</span>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description}</p>
        
        <button className="flex items-center text-xs font-pixel text-white hover:text-blue-400 transition-colors group/btn">
          EXPLORAR PROJETO 
          <svg className="w-3 h-3 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
