
import React from 'react';
import { Quote } from 'lucide-react';

const History: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Section */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Sobre a Fundadora</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-800 leading-tight">A História Inspiradora da Dona Lu</h2>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Dona Lu era uma mãe solteira de três filhos em uma pequena cidade no interior de São Paulo. Aos 45 anos, após perder o emprego em uma fábrica, ela decidiu transformar sua paixão por cozinhar em um negócio.
              </p>
              <p>
                Começando na cozinha de casa, Dona Lu criou receitas de salgados que conquistaram vizinhos e amigos. Com ingredientes simples e truques passados de geração em geração, ela provou que a determinação é o ingrediente principal.
              </p>
              <p>
                Hoje, com anos de experiência e sabedoria, Dona Lu é uma empreendedora de sucesso e quer compartilhar seus segredos com você para que você também possa mudar de vida fazendo o que ama.
              </p>
            </div>

            <div className="mt-10 p-8 bg-white border-l-8 border-amber-500 rounded-r-2xl shadow-lg relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-amber-200" />
              <p className="text-xl italic text-stone-700 font-serif leading-relaxed">
                "Minha jornada começou com uma frigideira e muita determinação – agora é a sua vez!"
              </p>
              <p className="mt-4 font-bold text-stone-900">- Dona Lu</p>
            </div>
          </div>

          {/* Image Section - Older Cook in kitchen */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 border-8 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1556910116-e220f7127371?q=80&w=2070&auto=format&fit=crop" 
                alt="Dona Lu cozinhando" 
                className="w-full h-auto object-cover aspect-[4/5] min-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-light uppercase tracking-widest text-amber-400 font-bold">Dona Lu</p>
                <h3 className="text-2xl font-bold italic font-serif">Tradição e Sabor</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
