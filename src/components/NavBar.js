import React from 'react';
import { Link } from 'react-router-dom';

const NabVar = () => {
    return (
        <div className=' p-2 mb-3 back '>
            <ul className='container pt-3'>
                <Link to='/' className='text-decoration-none text-dark link-me ' > Take Me Home</Link>
            </ul>
        </div>
    );
}

export default NabVar;