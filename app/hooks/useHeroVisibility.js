import { useState, useCallback, useEffect } from 'react';

export function useHeroVisibility() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const heroSection = document.querySelector('[data-hero]');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setIsHeroVisible(rect.bottom > 0);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isHeroVisible;
} 