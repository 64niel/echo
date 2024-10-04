'use client'
// handleNav.tsx
import { useRouter } from 'next/navigation';
import { useLoading } from './loadingContent';

const useHandleNavigation = () => {
  const router = useRouter();
  const { setIsLoading } = useLoading();

  // Actual navigation handling
  const handleNavigation = (path: string, query?: Record<string, string>) => {
    setIsLoading(true);

    // Construct URL string
    let url = path;
    if (query) {
      const queryString = new URLSearchParams(query).toString();
      url += `?${queryString}`;
    }

    router.push(url);
    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 2000);
  };

  return handleNavigation;
};

export default useHandleNavigation;