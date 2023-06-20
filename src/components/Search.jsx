import { useRef, useEffect } from 'react';
import { useCocktailContext } from '../context/CocktailsContext';

const Search = () => {
  const { setName, name } = useCocktailContext();
  const searchName = useRef('');

  useEffect(() => {
    searchName.current.focus();
  });

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={evt => evt.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktails</label>
          <input
            type='text'
            id='name'
            ref={searchName}
            onChange={() => setName(searchName.current.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
