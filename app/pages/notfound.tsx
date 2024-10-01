'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import useHandleNavigation from "../components/components/handleNav";

const notFound: React.FC = () => {
    const handleNavigation = useHandleNavigation();

    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground text-center'>
            <h1 className='mt-10 text-xl sm:text-3xl font-semibold'><span className='text-red-500'>Error:</span> Could not find the page you were looking for.</h1>
            <button className='mt-10 p-3 bg-background hover:bg-third rounded-full text-lg sm:text-2xl duration-300' onClick={() => handleNavigation('/')}>Back To Home</button>
        </div>
    );
};

export default notFound;