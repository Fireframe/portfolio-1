
import React, { useState } from 'react';
import { generateGameIdea } from '../services/geminiService';

const GeminiIdeaGenerator: React.FC = () => {
  const [genre, setGenre] = useState('Plataforma');
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<{title: string, hook: string, description: string} | null>(null);

  const genres = [
    { label: 'Plataforma', value: 'Platformer' },
    { label: 'RPG', value: 'RPG' },
    { label: 'Terror', value: 'Horror' },
    { label: 'Cyberpunk', value: 'Cyberpunk' },
    { label: 'Simulação', value: 'Simulation' },
    { label: 'Puzzle', value: 'Puzzle' }
  ];

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateGameIdea(genre);
      setIdea(result);
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar ideia. Verifique o console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-xl border border-purple-500/30">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold font-pixel mb-2 uppercase">Gerador de Ideias_</h2>
          <p className="text-gray-400 text-sm">Precisa de inspiração? Vamos criar com IA.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="bg-black/40 border border-white/10 text-white rounded-md px-4 py-2 text-sm"
          >
            {genres.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
          </select>
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className={`px-6 py-2 bg-blue-600 font-pixel text-xs rounded-md transition-all ${loading ? 'opacity-50' : 'hover:bg-blue-500'}`}
          >
            {loading ? 'CALCULANDO...' : 'GERAR IDEIA'}
          </button>
        </div>
      </div>

      {idea ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-xl font-bold text-blue-400 mb-2">{idea.title}</h3>
          <p className="italic text-purple-300 mb-4 text-sm font-semibold">"{idea.hook}"</p>
          <div className="bg-black/30 p-4 rounded border border-white/5">
            <p className="text-gray-400 text-sm leading-relaxed">{idea.description}</p>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-white/10 rounded-lg p-12 text-center text-gray-600">
          <p className="font-pixel text-xs uppercase tracking-widest">Aguardando entrada...</p>
        </div>
      )}
    </div>
  );
};

export default GeminiIdeaGenerator;
