
import React from 'react';
import { ChefHat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=2070&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Steam/Vapor effect */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20 bg-gradient-to-t from-white/10 to-transparent blur-3xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center">
        <div className="mb-6 animate-bounce">
            <ChefHat className="w-16 h-16 text-amber-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl">
          Descubra os Segredos dos <span className="text-amber-400 italic">Salgados Perfeitos</span> com Dona Lu!
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-stone-200 font-light leading-relaxed">
          Aprenda receitas autênticas, crie seu negócio em casa e transforme sua cozinha em uma fonte de renda.
        </p>
      </div>
      
      {/* Down arrow indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <p className="text-xs uppercase tracking-widest mb-2 opacity-60">Role para saber mais</p>
        <div className="w-1 h-8 bg-amber-400 mx-auto rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
