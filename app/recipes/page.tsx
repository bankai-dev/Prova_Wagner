// recipes/page.tsx

import Link from 'next/link';
import recipesData from '../../recipes.json';

const RecipesPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {recipesData.map((recipe) => (
        <div key={recipe.id} className="max-w-xs m-4 p-4 bg-white rounded shadow-md">
          <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
            <div>
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-lg font-bold">{recipe.name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
