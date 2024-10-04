// contact.tsx
import React from 'react';

const Legal: React.FC = () => {
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <h1 className='mt-4 px-5 text-lg md:text-2xl text-center font-semibold'>Contact Options:</h1>
            <div className='w-full mx-auto my-5 p-2 bg-cardbackground max-w-[70%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[35%]'>
                <ul className='my-2 list-inside list-disc text-medium md:text-lg'>
                    <li><a className='text-third hover:text-objbw hover:font-bold' href='mailto:timothy.oxlee@kingsway.school.nz'>Issues/Bugs via Email</a></li>
                    <li>...More options will be available in the future</li>
                </ul>
            </div>
        </div>
    );
};

export default Legal;