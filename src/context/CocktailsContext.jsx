import React, { useState, useContext, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CocktailsContext = React.createContext();

const CocktailsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchDrinks();
  }, [name]);

  const fetchDrinks = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}${name}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map(drink => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            drink: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <CocktailsContext.Provider
      value={{
        isLoading,
        setIsLoading,
        name,
        cocktails,
        setName,
      }}
    >
      {children}
    </CocktailsContext.Provider>
  );
};

export { CocktailsContext, CocktailsProvider };

// make sure use
export const useCocktailContext = () => {
  return useContext(CocktailsContext);
};
