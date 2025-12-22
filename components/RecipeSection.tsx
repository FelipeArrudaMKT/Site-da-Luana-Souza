
import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types';

const CLASSIC_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Coxinha de Frango',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1000&auto=format&fit=crop',
    description: 'A rainha das festas com massa de batata ultra macia e recheio suculento.',
    ingredients: ['Frango', 'Batata', 'Farinha', 'Caldo de Galinha'],
    tip: 'Adicione um toque de noz-moscada para realçar o sabor da massa.',
    category: 'classica'
  },
  {
    id: '2',
    name: 'Pastel de Queijo',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    description: 'A massa caseira mais crocante que você já provou, com queijo derretido.',
    ingredients: ['Massa caseira', 'Queijo Muçarela', 'Orégano'],
    tip: 'Pincele um pouco de cachaça na massa para deixá-la mais sequinha.',
    category: 'classica'
  },
  {
    id: '3',
    name: 'Empada de Palmito',
    image: 'https://images.unsplash.com/photo-1628191010210-a5977159983b?q=80&w=1000&auto=format&fit=crop',
    description: 'Massa podre que derrete na boca com recheio cremoso de palmito.',
    ingredients: ['Farinha', 'Manteiga', 'Palmito', 'Creme de Leite'],
    tip: 'Use manteiga gelada para garantir que a massa fique quebradiça.',
    category: 'classica'
  }
];

const GOURMET_RECIPES: Recipe[] = [
  {
    id: '4',
    name: 'Coxinha de Jaca',
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=1000&auto=format&fit=crop',
    description: 'A opção vegana favorita com textura idêntica ao frango desfiado.',
    ingredients: ['Jaca verde', 'Temperos frescos', 'Massa de mandioca'],
    tip: 'Tempere a jaca com fumaça líquida para um toque defumado.',
    category: 'gourmet'
  },
  {
    id: '5',
    name: 'Pastel de Camarão',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop',
    description: 'Sofisticação e sabor com camarões selecionados e catupiry original.',
    ingredients: ['Camarão médio', 'Catupiry', 'Coentro fresco'],
    tip: 'Refogue o camarão rapidamente para não ficar borrachudo.',
    category: 'gourmet'
  },
  {
    id: '6',
    name: 'Empada de Bacalhau',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop',
    description: 'Recheio rico e temperado com o legítimo bacalhau do Porto.',
    ingredients: ['Bacalhau dessalgado', 'Azeitonas pretas', 'Azeite extra virgem'],
    tip: 'Um toque de raspas de limão siciliano faz toda a diferença.',
    category: 'gourmet'
  }
];

const RecipeSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="recipes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">Explore Nossas Receitas Exclusivas</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Do clássico que todo mundo ama às inovações gourmet que vão destacar o seu negócio.
          </p>
        </div>

        {/* Classics */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-stone-700">Receitas Clássicas da Dona Lu</h3>
            <div className="h-px flex-grow bg-stone-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {CLASSIC_RECIPES.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Gourmet */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-orange-600">Receitas Inovadoras e Gourmet</h3>
            <div className="h-px flex-grow bg-orange-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {GOURMET_RECIPES.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
