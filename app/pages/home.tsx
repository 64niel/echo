// home.tsx
import React from 'react';
import MainCard from '../components/MainCard';

// Interface with game parameters for filtering
interface HomeProps {
    searchParams: { game?: string };
}

// Home page
const Home: React.FC<HomeProps> = ({ searchParams }) => {
    return (
      <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
        {/* Display the MainCard component */}
        <MainCard searchParams={searchParams} />
      </div>
    );
};

export default Home;