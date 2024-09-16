import React from 'react';

const gamesSupported: React.FC = () => {
    return (
        <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
            <div className='w-full mx-auto my-5 p-2 bg-cardbackground max-w-[80%] sm:max-w-[55%] md:max-w-[50%] lg:max-w-[40%]'>
                <h1 className='my-2 text-lg md:text-xl text-center font-semibold'>Games Echo Supports:</h1>
                <ul className='my-2 list-inside list-disc text-medium md:text-lg'>
                    <li className='my-1'>League of Legends</li>
                    <li className='my-1'>Counter-Strike 2</li>
                    <li className='my-1'>Valorant</li>
                    <li className='my-1'>Dota 2</li>
                    <li className='my-1'>Mobile Legends: Bang Bang</li>
                    <li className='my-1'>PUBG</li>
                    <li className='my-1'>Rainbow 6 Siege</li>
                    <li className='my-1'>Overwatch</li>
                    <li className='my-1'>Rocket League</li>
                    <li className='my-1'>EA SPorts FC</li>
                    <li className='my-1'>Call of Duty</li>
                    <li className='my-1'>League of Legends: Wild Rift</li>
                    <li className='my-1'>King of Glory</li>
                    <li className='my-1'>Starcraft 2</li>
                    <li className='my-1'>Starcraft: Brood War</li>
                </ul>
            </div>
        </div>
    );
};

export default gamesSupported;