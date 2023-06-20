import { Link } from 'react-router-dom';
import { useCocktailContext } from '../context/CocktailsContext';

const Cocktail = ({ image, id, drink, glass, info }) => {
  const { setName } = useCocktailContext();

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={drink} />
      </div>
      <div className='cocktail-footer'>
        <h3>{drink}</h3>
        <h4>{glass}</h4>
        {info === 'Alcoholic' ? (
          <p className='text-primary'>{info}</p>
        ) : (
          <p className='text-primary' style={{ color: '#4C3285' }}>
            {info}
          </p>
        )}
        <Link
          to={`/cocktail/${id}`}
          className='btn btn-primary btn-details'
          onClick={() => setName('a')}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
