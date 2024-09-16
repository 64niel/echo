'use client'
// handleNav.tsx
import { useRouter } from 'next/navigation';
import { useLoading } from './loadingContent';

const useHandleNavigation = () => {
  const router = useRouter();
  const { setIsLoading } = useLoading();

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    router.push(path);
    setTimeout(() => {
      window.location.reload(); // Reload the page after navigation
    }, 1000);
  };

  return handleNavigation;
};

export default useHandleNavigation;