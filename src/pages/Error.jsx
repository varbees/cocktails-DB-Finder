import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Looks like you took a wrong turn!</h1>
        <Link to='/' className='btn btn-primary'>
          Find your way back
        </Link>
      </div>
    </section>
  );
};

export default Error;
