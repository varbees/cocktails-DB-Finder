import { useCocktailContext } from '../context/CocktailsContext';
import Loading from '../components/Loading';
import Cocktail from './Cocktail';

const Cocktails = () => {
  const { isLoading, cocktails } = useCocktailContext();
  return isLoading ? (
    <Loading />
  ) : cocktails.length < 1 ? (
    <h2 className='section-title'>No cocktails found with that name</h2>
  ) : (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default Cocktails;
