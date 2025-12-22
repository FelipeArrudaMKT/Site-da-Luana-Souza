
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const NAMES = ['Maria', 'João', 'Ana', 'Pedro', 'Carla', 'Lucas', 'Beatriz', 'Ricardo', 'Fernanda', 'Marcos'];
const PRODUCTS = ['o Curso Mestre dos Salgados', 'as Receitas Exclusivas da Lu'];

const SalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState({ name: '', product: '' });

  useEffect(() => {
    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      
      setCurrentSale({ name, product });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    const initialTimeout = setTimeout(showNotification, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <div className="bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-stone-100 max-w-sm">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
          <ShoppingBag className="w-6 h-6 text-green-600" />
        </div>
        <div className="text-sm">
          <p className="text-stone-800 font-medium">
            <span className="font-bold text-orange-600">{currentSale.name}</span> acabou de comprar {currentSale.product}!
          </p>
          <p className="text-stone-400 text-xs mt-0.5">há poucos segundos</p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
