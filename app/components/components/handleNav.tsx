'use client'
// handleNav.tsx
import { useRouter } from 'next/navigation';

const useHandleNavigation = () => {
  const router = useRouter();

  // Actual navigation handling
  const handleNavigation = (path: string, query?: Record<string, string>) => {

    // Construct URL string
    let url = path;
    if (query) {
      const queryString = new URLSearchParams(query).toString();
      url += `?${queryString}`;
    }

    router.push(url);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    router.push(url)
  };

  return handleNavigation;
};

export default useHandleNavigation;