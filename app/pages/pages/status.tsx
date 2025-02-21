// status.tsx
import React from 'react';

// Status page
const Status: React.FC = () => {
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            {/* Main header */}
            <h1 className='mt-4 text-lg md:text-2xl text-center font-semibold'>Echo Status</h1>
            <div className='w-full mx-auto my-5 p-2 bg-cardbackground max-w-[70%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[35%]'>
                {/* News header */}
                <h2 className='my-2 text-lg md:text-xl text-center font-semibold'>News:</h2> 
                {/* List of app news/updates */}
                <ul className='my-2 list-inside list-disc text-medium md:text-lg'>
                    <li>...</li>
                </ul>  
            </div>
            <div className='w-full mx-auto my-5 p-2 bg-cardbackground max-w-[70%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[35%]'>    
                {/* Features header */}
                <h2 className='my-2 text-lg md:text-xl text-center font-semibold'>Features Not Available Yet:</h2>
                {/* List of features not available yet */}   
                <ul className='my-2 list-inside list-disc text-medium md:text-lg'>
                    <li>Signing Up/Logging In</li>
                    <li>Advanced Filtering Methods</li>
                    <li>Search Bar</li>
                    <li>Full Mobile Support</li>
                </ul>
            </div>
            <div className='w-full mx-auto my-5 p-2 bg-cardbackground max-w-[70%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[35%]'>
                {/* Bugs header */}    
                <h2 className='my-2 text-lg md:text-xl text-center font-semibold'>Bugs We Are Aware Of:</h2> 
                {/* List of recognised bugs/issues */}
                <ul className='my-2 list-inside list-disc text-medium md:text-lg'>
                    <li>...</li>
                </ul>  
            </div>
        </div>
    );
};

export default Status;