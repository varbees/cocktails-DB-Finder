import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useCocktailContext } from '../context/CocktailsContext';
import { useEffect, useState } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const { isLoading, setIsLoading } = useCocktailContext();
  const { id } = useParams();

  useEffect(() => {
    async function getCocktail() {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        const { drinks } = data;
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>No cocktails to display</h2>;
  }

  const { name, image, info, glass, instructions, category, ingredients } =
    cocktail;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>Category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
            {ingredients.map((ingredient, i) => {
              return ingredient ? <span key={i}>{ingredient}</span> : '';
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
