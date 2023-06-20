const About = () => {
  return (
    <section className='section about-section'>
      <h1>About Us</h1>
      <p>
        Visiting a cocktail party! Know about all kinds of cocktails with a
        simple search instantly. Built with
        <a
          href='https://www.thecocktaildb.com/api.php'
          target='_blank'
          rel='noreferrer'
          className='rgb-text'
        >
          {' '}
          CocktailDB API{' '}
        </a>
        and{' '}
        <a
          href='https://www.youtube.com/@CodingAddict'
          target='_blank'
          rel='noreferrer'
          className='rgb-text'
        >
          Coding Addict
        </a>
        {'. '}
        You can find me on{' '}
        <a
          href='https://github.com/varbees'
          target='_blank'
          rel='noreferrer'
          className='rgb-text'
        >
          {' '}
          Github{' '}
        </a>
      </p>
    </section>
  );
};

export default About;
