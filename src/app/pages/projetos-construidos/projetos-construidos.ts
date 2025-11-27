import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MediaProjeto {
  tipo: 'imagem' | 'video';
  url: string;
}

export interface Projeto {
  id: number;
  titulo: string;
  localizacao: string;
  imagemCapa: string;
  galeria: MediaProjeto[];
}

@Component({
  selector: 'app-projetos-construidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos-construidos.html',
  styleUrl: './projetos-construidos.scss' // Confirme se o nome do arquivo SCSS está correto
})
export class ProjetosConstruidos {

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Penthouse Jardins',
      localizacao: 'São Paulo, SP',
      imagemCapa: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
      galeria: [
        { tipo: 'imagem', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200' },
        { tipo: 'imagem', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200' },
        { tipo: 'imagem', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200' }
      ]
    },
    // --- AQUI ESTÁ O LOFT INDUSTRIAL ---
    {
      id: 3, // ID do Loft
      titulo: 'Loft Industrial',
      localizacao: 'Curitiba, PR',
      imagemCapa: '/assets/images/projetos/teste.jpg',
      galeria: [
        // Adicionei 3 fotos aqui para o carrossel rodar
        { tipo: 'imagem', url: 'https://images.unsplash.com/photo-1502005229762-cf1afd38088d?q=80&w=1200' },
        { tipo: 'imagem', url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200' },
        { tipo: 'imagem', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200' }
      ]
    },
    // -----------------------------------
    {
      id: 2,
      titulo: 'Casa Horizonte',
      localizacao: 'Alphaville, SP',
      imagemCapa: '/assets/images/projetos/cozinha.jpg',
      galeria: [
        { tipo: 'imagem', url: '/assets/images/projetos/cozinha.jpg' },
        { tipo: 'imagem', url: '/assets/images/projetos/cozinhaAmpliada.jpg' },
        { tipo: 'imagem', url: '/assets/images/projetos/mesaCozinha.jpg' }
      ]
    }
  ];

  projetoSelecionado: Projeto | null = null;

  abrirModal(projeto: Projeto) {
    this.projetoSelecionado = projeto;
  }
}