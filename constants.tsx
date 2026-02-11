
import React from 'react';
import { Project, Skill, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Odisséia Neon',
    category: 'Game',
    description: 'Um jogo de plataforma cyberpunk acelerado desenvolvido com Godot.',
    imageUrl: 'https://picsum.photos/seed/neon/800/450',
    tags: ['C#', 'Godot', 'Ação'],
  },
  {
    id: '2',
    title: 'Tileset Floresta Mística',
    category: 'Asset',
    description: 'Pacote de ambiente pixel art 16x16 para RPGs.',
    imageUrl: 'https://picsum.photos/seed/woods/800/450',
    tags: ['Aseprite', '2D', 'Ambiente'],
  },
  {
    id: '3',
    title: 'Glitch Runner',
    category: 'Game',
    description: 'Endless runner mobile com níveis procedurais.',
    imageUrl: 'https://picsum.photos/seed/glitch/800/450',
    tags: ['Unity', 'Mobile', 'C#'],
  },
  {
    id: '4',
    title: 'SpriteMaster Pro',
    category: 'Tool',
    description: 'Ferramenta de fluxo de trabalho para exportação em lote de animações pixel art.',
    imageUrl: 'https://picsum.photos/seed/tool/800/450',
    tags: ['Python', 'Automação', 'CLI'],
  }
];

export const SKILLS: Skill[] = [
  { name: 'Unity & C#', level: 95, icon: '🎮' },
  { name: 'Pixel Art / Aseprite', level: 90, icon: '🎨' },
  { name: 'Godot / GDScript', level: 85, icon: '🤖' },
  { name: 'Game Design', level: 88, icon: '🕹️' },
  { name: 'Shaders (HLSL)', level: 75, icon: '✨' },
  { name: 'React / TS', level: 80, icon: '⚛️' }
];

export const SERVICES: Service[] = [
  {
    title: 'Dev de Jogos Completo',
    description: 'Do conceito ao lançamento. Eu crio mecânicas, sistemas e polimento.',
    icon: '🚀'
  },
  {
    title: 'Pixel Art Customizada',
    description: 'Sprites, animações, interface e cenários adaptados ao seu estilo.',
    icon: '👾'
  },
  {
    title: 'Consultoria Técnica',
    description: 'Revisão especializada do seu design de jogo ou arquitetura técnica.',
    icon: '🧠'
  }
];
