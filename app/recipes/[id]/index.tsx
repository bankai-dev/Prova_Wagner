// recipes/[id]/index.tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import recipesData from '../../../recipes.json';



export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipesData.map((recipe) => ({
    params: { id: recipe.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Pode ser 'blocking' ou 'true' dependendo do comportamento desejado
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const { id } = params;
  const recipe = recipesData.find((r) => r.id === id);

  if (!recipe) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recipe,
    },
  };
};


const RecipeDetailPage = ({ recipe }: { recipe: any }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded shadow-md">
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instruções</h2>
      <ol className="list-decimal ml-6">
        {recipe.instructions.map((step: string, index: number) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetailPage;
