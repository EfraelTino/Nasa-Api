import React from 'react';
import { Link } from 'react-router-dom';
import nasa from '../img/efrael.png'


const Home = () => {

    return (
        <div className='container-home justify-content-center container align-items-center align-self-center'>
            <img src={nasa} alt='logo_nasa' className='img-nasa' />
            <Link to='/nasafoto' className=' my-btn border border-white  text-decoration-none text-center py-3 my-0 btn btn btn-outline-dark '> <span className='h3 sm-h5'>Discover the image o video of the day!</span></Link>

        </div>

    );
}

export default Home;