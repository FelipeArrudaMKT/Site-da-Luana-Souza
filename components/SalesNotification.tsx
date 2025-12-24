
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const NAMES = [
  'Maria Silva', 'João Oliveira', 'Ana Souza', 'Pedro Santos', 'Carla Mendes', 
  'Lucas Pereira', 'Beatriz Lima', 'Ricardo Ferreira', 'Fernanda Costa', 'Marcos Rocha',
  'Juliana Barbosa', 'Felipe Almeida', 'Patrícia Gomes', 'Gabriel Martins', 'Larissa Cavalcanti',
  'Elaine Rocha', 'Sônia Maria', 'Tereza Cristina', 'Roberto Carlos', 'Aline Ferreira',
  'Cláudia Regina', 'Márcia Oliveira', 'Daniela Santos', 'Renata Souza', 'Vanessa Lima'
];

const PRODUCTS = ['o Curso Mestre dos Salgados', 'as Receitas Exclusivas da Lu'];

const SalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState({ name: '', product: '' });
  const [lastProductIndex, setLastProductIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      // Seleciona um nome aleatório
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      
      // Alterna entre os produtos para variar a prova social
      const productIndex = (lastProductIndex + 1) % PRODUCTS.length;
      const product = PRODUCTS[productIndex];
      setLastProductIndex(productIndex);
      
      setCurrentSale({ name, product });
      setIsVisible(true);

      // Fica visível por 6 segundos (mais tempo para o usuário ler com calma)
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // Ciclo total de 15 segundos (6s visível + 9s de pausa)
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    // Primeira notificação aparece após 4 segundos da página carregar
    const initialTimeout = setTimeout(showNotification, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [lastProductIndex]);

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-4 flex items-center gap-4 border border-stone-100 max-w-sm">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 shadow-inner">
          <ShoppingBag className="w-6 h-6 text-green-600" />
        </div>
        <div className="text-sm">
          <p className="text-stone-800 font-medium leading-snug">
            <span className="font-bold text-orange-600">{currentSale.name}</span> acabou de comprar {currentSale.product}!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
