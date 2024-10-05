'use client'
// handleNav.tsx
import { useRouter } from 'next/navigation';
import { showSplashScreen } from '../SplashScreen';

const useHandleNavigation = () => {
  const router = useRouter();

  // Actual navigation handling
  const handleNavigation = (path: string, query?: Record<string, string>) => {
    const pageContent = document.getElementById('page-content')
    if (pageContent) {
      pageContent.classList.add('hidden');
    }

    // Show splash screen
    showSplashScreen();

    // Construct URL string
    let url = path;
    if (query) {
      const queryString = new URLSearchParams(query).toString();
      url += `?${queryString}`;
    }

    router.push(url);
    setTimeout(() => {
      if (pageContent) {
        pageContent.classList.remove('hidden');
        window.location.reload();
      }
    }, 3000);
    router.push(url)
  };

  return handleNavigation;
};

export default useHandleNavigation;