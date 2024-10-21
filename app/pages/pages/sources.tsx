// sources.tsx
import React from 'react';

// Sources page
const Sources: React.FC = () => {
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            {/* Header */}
            <h1 className='mt-4 px-5 text-lg md:text-2xl text-center font-semibold'>Thanks to the following for providing resources Echo is based on:</h1>
            <div className='w-full mx-auto my-5 p-2 bg-cardbackground max-w-[70%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[35%]'>
                {/* List of sources Echo has used */}
                <ul className='my-2 list-inside list-disc text-medium md:text-lg'>
                    <li><a className='hover:font-bold' href='https://pandascore.co/'>Pandascore API</a></li>
                    <li>Built with <a className='text-third hover:text-objbw hover:font-bold' href='https://react.dev/'>React</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sources;