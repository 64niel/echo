export function NotificationButton() {
  return (
    <div className="float-right h-12 w-12 mr-2 md:mr-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFBF00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" 
          className="size-10 md:size-12 p-1 float-right bg-primary rounded-full hover:cursor-pointer hover:bg-third duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    </div>
  );
}