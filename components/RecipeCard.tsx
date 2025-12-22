
import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-stone-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full flex items-center gap-1 shadow-sm">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-stone-800">Dica da Lu</span>
        </div>
        {recipe.category === 'gourmet' && (
          <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
            Gourmet
          </div>
        )}
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-stone-800 group-hover:text-orange-600 transition-colors">
          {recipe.name}
        </h3>
        <p className="text-stone-500 text-sm mb-6 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
            <p className="text-xs text-stone-600 italic">
              <span className="font-bold text-stone-800">Dica:</span> {recipe.tip}
            </p>
          </div>
        </div>

        <a 
          href="#course" 
          className="flex items-center justify-between w-full py-4 px-6 bg-stone-50 hover:bg-amber-500 hover:text-white rounded-2xl transition-all duration-300 group/btn font-bold text-stone-700"
        >
          Ver Receita Completa
          <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
