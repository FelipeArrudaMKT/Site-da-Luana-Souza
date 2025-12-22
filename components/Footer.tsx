
import React from 'react';
import { Mail, ShieldCheck, Heart, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">Salgados da Dona Lu</h2>
            <p className="mb-8 leading-relaxed">
              Transformando paixão em profissão. Nossa missão é empoderar mulheres através da culinária caseira e empreendedorismo prático.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@luana_souzza_salgados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group px-4 py-2 rounded-full bg-stone-900 hover:bg-amber-500 transition-all text-sm font-bold text-white"
              >
                <Music2 className="w-5 h-5 text-amber-500 group-hover:text-white" />
                Siga-nos no TikTok
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-1/4">
            <h3 className="text-white font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Afiliados</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:w-1/4">
            <h3 className="text-white font-bold mb-6">Fale Conosco</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500" />
                luanasouzareceitas@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                Suporte de Segunda a Sexta
              </li>
            </ul>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
               <ShieldCheck className="w-10 h-10 text-amber-500" />
            </div>
            <div>
               <h4 className="text-white font-bold">Satisfação Garantida</h4>
               <p className="text-xs">Ou seu dinheiro de volta em até 7 dias, sem perguntas.</p>
            </div>
          </div>
          
          <div className="text-xs text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-1 mb-2">
              Feito com <Heart className="w-3 h-3 text-red-500 fill-current" /> por Equipe Dona Lu
            </p>
            <p>© 2024 Salgados da Dona Lu. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
