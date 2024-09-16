'use client'
// calendar.tsx
import useHandleNavigation from '../components/components/handleNav';

// Calendar page
const Calendar: React.FC = () => {
  const handleNavigation = useHandleNavigation();

  return (
    <div className='w-full h-full mx-3 md:mx-6 mt-10 bg-pagebackground'>
      <div className='flex flex-col items-center justify-center m-3 md:m-10 mx-3 md:mx-10 p-1.5 bg-cardbackground'>
        {/* Message  */}
        <h1 className='mt-1 sm:mt-2 md:mt-3.5 -mb-1 sm:-mb-1.5 md:-mb-1 text-center text-[15px] sm:text-lg md:text-2xl font-semibold'>
          Calendar is unavailable at this time.
        </h1>
        <div className='mt-4'>
          <button onClick={() => handleNavigation('/')} className="group transition duration-300 my-3 relative text-lg">
            Back to HOME
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
          </button>
        </div>
        <div className='mb-2'>
        <button onClick={() => handleNavigation('/?page=status')} className="group transition duration-300 my-3 relative text-lg">
            Learn More
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fifth scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;