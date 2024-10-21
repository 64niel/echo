// legal.tsx
import React from 'react';

// Legal page
const Legal: React.FC = () => {
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            {/* Header */}
            <h1 className='my-4 text-lg md:text-2xl text-center font-semibold'>&copy; 2024 Echo. All rights reserved.</h1>
        </div>
    );
};

export default Legal;