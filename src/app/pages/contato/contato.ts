import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para o formulário funcionar

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class ContatoComponent {

  dados = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  enviado: boolean = false;

  enviarFormulario() {
  // 1. Monta a mensagem formatada
  const mensagemWhatsApp = `
    *Novo Contato via Site ADesign*
    -----------------------------
    *Nome:* ${this.dados.nome}
    *Email:* ${this.dados.email}
    *Telefone:* ${this.dados.telefone}
    -----------------------------
    *Mensagem:* ${this.dados.mensagem}
  `;

  // 2. Cria o link codificado para o WhatsApp
  // encodeURIComponent garante que espaços e acentos funcionem no link
  const link = `https://wa.me/553492806136?text=${encodeURIComponent(mensagemWhatsApp)}`;

  // 3. Abre o WhatsApp em nova aba
  window.open(link, '_blank');

  // 4. Limpa o formulário e mostra sucesso
  this.enviado = true;
  this.dados = { nome: '', email: '', telefone: '', mensagem: '' };
  
  setTimeout(() => {
    this.enviado = false;
  }, 5000);
}

  // Função extra: Botão para abrir WhatsApp direto
  chamarNoWhatsapp() {
    window.open('https://wa.me/553492806136', '_blank'); // Coloque seu número aqui
  }
}