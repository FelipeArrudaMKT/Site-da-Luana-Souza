
import React, { useState, useEffect } from 'react';
import { PlayCircle, CheckCircle, Star, MessageCircle, ArrowRight, Clock } from 'lucide-react';

const MODULES = [
  { number: 1, title: 'Introdução e Mentalidade', description: 'Como começar seu negócio do zero na cozinha de casa.' },
  { number: 2, title: 'Equipamentos e Utensílios', description: 'O que você realmente precisa para produzir em escala.' },
  { number: 3, title: 'Massas Perfeitas', description: 'O segredo da massa que derrete na boca e é fácil de modelar.' },
  { number: 4, title: 'Recheios Irresistíveis', description: 'Temperos exclusivos e técnicas para recheios suculentos.' },
  { number: 5, title: 'Modelagem e Padronização', description: 'Como fazer salgados bonitos e todos do mesmo tamanho.' },
  { number: 6, title: 'Fritura Profissional', description: 'Técnicas para salgados sequinhos e crocantes sem óleo excessivo.' },
  { number: 7, title: 'Congelamento e Estocagem', description: 'Aumente sua produtividade mantendo o frescor.' },
  { number: 8, title: 'Cálculo de Preço', description: 'Aprenda a cobrar corretamente e ter lucro real.' },
  { number: 9, title: 'Vendas e Marketing', description: 'Como usar o Instagram e TikTok para vender todo dia.' },
  { number: 10, title: 'Bônus: Receitas de Doce', description: 'Amplie seu cardápio com os famosos docinhos de festa.' },
];

const TESTIMONIALS = [
  { id: '1', name: 'Maria S.', avatar: 'https://i.pravatar.cc/150?u=maria', text: 'Graças à Dona Lu, vendi 200 salgados na primeira semana! O suporte no WhatsApp é maravilhoso.' },
  { id: '2', name: 'Ricardo F.', avatar: 'https://i.pravatar.cc/150?u=ricardo', text: 'Sempre cozinhei por hobby, mas esse curso me deu a segurança para abrir meu delivery. Recomendo muito!' },
  { id: '3', name: 'Ana Paula', avatar: 'https://i.pravatar.cc/150?u=ana', text: 'As receitas são o diferencial do meu buffet agora. Meus clientes ficaram encantados com a qualidade.' },
];

const CourseSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Resets to 24h
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative" id="course">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Treinamento Online</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comece Sua Transformação Agora</h2>
          <p className="text-stone-400 max-w-3xl mx-auto text-lg">
            Escolha o plano ideal para você e aprenda com quem realmente entende do assunto.
          </p>
        </div>

        {/* Modules List */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
            <PlayCircle className="text-amber-500" />
            Conteúdo Programático do Curso
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MODULES.map((module) => (
              <div key={module.number} className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700 hover:border-amber-500/50 transition-colors group">
                <span className="text-xl font-bold text-amber-500/30 group-hover:text-amber-500 transition-colors block mb-2">
                  {module.number.toString().padStart(2, '0')}
                </span>
                <h4 className="font-bold text-sm mb-2">{module.title}</h4>
                <p className="text-[10px] text-stone-400 leading-tight">{module.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Course Card */}
          <div className="bg-white text-stone-900 p-8 md:p-10 rounded-3xl shadow-2xl relative flex flex-col justify-between">
            <div>
              <div className="bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full inline-block mb-6">OFERTA ESPECIAL</div>
              <h3 className="text-3xl font-bold mb-2 font-serif">Curso Mestre dos Salgados</h3>
              <p className="text-stone-500 mb-8 text-sm">O treinamento completo para criar um negócio lucrativo.</p>

              <div className="space-y-4 mb-10 text-sm">
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Acesso vitalício ao curso</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Apostila em PDF completa</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Grupo VIP no WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Certificado de Conclusão</span>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="mb-6 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                 <p className="text-stone-400 line-through text-xs">De R$ 197,00</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold">Por apenas</span>
                    <span className="text-4xl font-black text-orange-600">R$ 47,90</span>
                 </div>
              </div>
              <a 
                href="https://pay.kirvano.com/63a28a47-b22b-43a7-afdf-9a9696d76c76"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-8 bg-red-600 hover:bg-red-700 text-white text-center font-bold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/20 uppercase tracking-wide"
              >
                QUERO O CURSO COMPLETO
              </a>
            </div>
          </div>

          {/* Recipes Book Card */}
          <div className="bg-amber-500 text-white p-8 md:p-10 rounded-3xl shadow-2xl relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rounded-full"></div>
            
            <div>
              <div className="bg-white/20 backdrop-blur-md text-white py-2 px-4 rounded-2xl mb-6 inline-flex items-center gap-2 border border-white/30 shadow-inner">
                <Clock className="w-4 h-4 animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-tighter opacity-80">Oferta termina em:</span>
                  <span className="text-lg font-mono font-black tracking-widest leading-none">
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-black mb-2 font-serif">Receitas da Lu</h3>
              <p className="text-amber-50 text-sm mb-8">Livro de receitas da lu. Todas as medidas e segredos das massas e recheios.</p>

              <div className="space-y-4 mb-10 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-100" />
                  <span>Todas as receitas clássicas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-100" />
                  <span>Guia de massas que não quebram</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-100" />
                  <span>Segredo do tempero caseiro</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-100" />
                  <span>Dicas de conservação</span>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                 <p className="text-amber-100 line-through text-xs">De R$ 97,00</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold">Por apenas</span>
                    <span className="text-4xl font-black text-white">R$ 17,90</span>
                 </div>
              </div>
              <a 
                href="https://pay.kirvano.com/2b3f1b1f-f4d4-43b3-9863-8a97bc45b0ba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-8 bg-white text-amber-600 hover:bg-stone-100 font-bold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wide flex items-center justify-center gap-2 group"
              >
                QUERO SÓ AS RECEITAS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2 text-stone-100">Quem já aprendeu aprova!</h3>
            <p className="text-stone-400">Centenas de alunos já estão faturando com os salgados da Dona Lu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-stone-800 p-8 rounded-3xl border border-stone-700 flex flex-col items-center text-center">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-4 border-amber-500" />
                <div className="flex gap-1 mb-4 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-stone-300 italic mb-6">"{t.text}"</p>
                <p className="font-bold text-white">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
