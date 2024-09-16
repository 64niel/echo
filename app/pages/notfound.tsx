import React from 'react';
import { useRouter } from 'next/navigation';

const notFound: React.FC = () => {
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <h1>Error: Could not find the page you were looking for.</h1>
            <button className='bg-primary' onClick={() => handleNavigation('/')}>Back To Home</button>
        </div>
    );
};

export default notFound;