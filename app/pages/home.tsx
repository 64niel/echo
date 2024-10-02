import React from 'react';
import MainCard from '../components/MainCard';

interface HomeProps {
    searchParams: { game?: string };
}

const Home: React.FC<HomeProps> = ({ searchParams }) => {
    return (
      <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
        <MainCard searchParams={searchParams} />
      </div>
    );
};

export default Home;