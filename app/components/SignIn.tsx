"use client";

export function SignInButton() {
  return (
    <div className="float-right flex items-center h-10 md:h-12 mr-2 md:mr-5 bg-primary rounded-full hover:cursor-pointer hover:bg-third duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="size-8 md:size-10 p-1.5 -mr-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
      <h1 className="text-medium md:text-xl px-4">SIGN IN</h1>
    </div>
  );
}