
import React, { useState, useEffect } from 'react';
import { PlayCircle, CheckCircle, Star, ArrowRight, Clock, BookOpen } from 'lucide-react';

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
  { 
    id: '1', 
    name: 'Maria Silva', 
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop', 
    text: 'Graças à Dona Lu, vendi 200 salgados na primeira semana! O suporte no WhatsApp é maravilhoso.' 
  },
  { 
    id: '2', 
    name: 'Beatriz Lopes', 
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop', 
    text: 'Sempre cozinhei por hobby, mas esse curso me deu a segurança para abrir meu próprio negócio lucrativo.' 
  },
  { 
    id: '3', 
    name: 'Ana Paula Santos', 
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop', 
    text: 'As receitas são o diferencial do meu buffet agora. Meus clientes ficaram encantados com a qualidade.' 
  },
];

const CourseSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative" id="course">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Treinamento Online</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif italic">Escolha o seu plano</h2>
          <p className="text-stone-400 max-w-3xl mx-auto text-lg">
            Aprenda com quem faturou alto vendendo salgados caseiros todos os dias.
          </p>
        </div>

        {/* Modules List */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
            <PlayCircle className="text-amber-500" />
            O que você vai aprender
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Main Course Card */}
          <div className="bg-white text-stone-900 p-6 md:p-10 rounded-3xl shadow-2xl relative flex flex-col justify-between overflow-hidden border border-stone-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -mr-16 -mt-16 rounded-full"></div>
            
            <div>
              <div className="flex flex-col gap-3 mb-6">
                <div className="bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full inline-block w-fit shadow-sm">
                  OFERTA MAIS COMPLETA
                </div>
              </div>

              <h3 className="text-3xl font-black mb-2 font-serif text-stone-900 leading-tight">Curso Mestre dos Salgados</h3>
              <p className="text-stone-500 mb-8 text-sm font-medium">O treinamento definitivo para você dominar as massas, recheios e vendas.</p>

              <div className="space-y-4 mb-10 text-sm">
                {[
                  'Acesso vitalício à plataforma',
                  'Apostila PDF detalhada para impressão',
                  'Suporte VIP via WhatsApp',
                  'Certificado oficial de conclusão'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-stone-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="mb-6 p-5 bg-stone-50 rounded-2xl border border-stone-100 relative overflow-hidden">
                 {/* Temporizador fixado dentro da borda da oferta */}
                 <div className="flex items-center gap-1.5 text-orange-600 font-mono font-bold text-[11px] mb-3 bg-white py-1.5 px-3 rounded-lg w-fit border border-orange-200 shadow-sm">
                    <Clock className="w-4 h-4 animate-pulse" />
                    <span>OFERTA TERMINA EM: {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
                 </div>
                 
                 <p className="text-stone-400 line-through text-xs font-bold mb-1">De R$ 197,00</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-stone-800 text-sm font-bold">Por apenas</span>
                    <span className="text-4xl font-black text-orange-600">R$ 47,90</span>
                 </div>
              </div>
              <a 
                href="https://pay.kirvano.com/63a28a47-b22b-43a7-afdf-9a9696d76c76"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 px-6 bg-red-600 hover:bg-red-700 text-white text-center font-black rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(220,38,38,0.3)] uppercase tracking-widest whitespace-normal leading-tight"
              >
                QUERO O CURSO COMPLETO
              </a>
            </div>
          </div>

          {/* Recipes Book Card */}
          <div className="bg-amber-500 text-white p-6 md:p-10 rounded-3xl shadow-2xl relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rounded-full"></div>
            
            <div>
              <div className="flex flex-col gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-md text-white py-1.5 px-4 rounded-full text-[10px] font-black uppercase tracking-widest inline-block w-fit">
                  RECEITAS EXCLUSIVAS
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black font-serif leading-tight">Receitas da Lu</h3>
                  <div className="flex gap-1 text-amber-100">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>

              <p className="text-amber-50 text-sm mb-8 leading-relaxed font-medium">Todas as medidas e segredos das massas e recheios mais vendidos da Dona Lu.</p>

              <div className="space-y-4 mb-10 text-sm">
                {[
                  'Todas as receitas clássicas da Lu',
                  'O guia definitivo de massas crocantes',
                  'O segredo do tempero que vicia',
                  'Tabela de conservação e congelamento'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-100 shrink-0 mt-0.5" />
                    <span className="font-semibold text-amber-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="mb-6 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                 {/* Temporizador fixado dentro da borda da oferta das receitas */}
                 <div className="flex items-center gap-1.5 text-white font-mono font-bold text-[11px] mb-3 bg-white/10 py-1.5 px-3 rounded-lg w-fit border border-white/20 shadow-sm">
                    <Clock className="w-4 h-4 animate-pulse" />
                    <span>EXPIRA EM: {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
                 </div>

                 <p className="text-amber-100 line-through text-xs font-bold mb-1">De R$ 97,00</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-amber-50 text-sm font-bold">Por apenas</span>
                    <span className="text-4xl font-black text-white">R$ 17,90</span>
                 </div>
              </div>
              <a 
                href="https://pay.kirvano.com/2b3f1b1f-f4d4-43b3-9863-8a97bc45b0ba"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 px-6 bg-white text-amber-600 hover:bg-stone-50 font-black rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest flex items-center justify-center gap-3 whitespace-normal leading-tight text-center"
              >
                QUERO SÓ AS RECEITAS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2 text-stone-100">Quem já aprendeu aprova!</h3>
            <p className="text-stone-400">Junte-se a centenas de alunas que mudaram de vida.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-stone-800/40 p-8 rounded-3xl border border-stone-700/50 flex flex-col items-center text-center hover:bg-stone-800/60 transition-all">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 border-4 border-amber-500 shadow-lg object-cover" />
                <div className="flex gap-1 mb-4 text-amber-500">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-white uppercase text-xs tracking-widest">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
