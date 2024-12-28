'use client';
import { useState, useEffect } from 'react';

export const useScroll = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 检测是否超过阈值
      if (currentScrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 检测滚动方向
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, lastScrollY]);

  return { scrolled, scrollDirection, scrollY: lastScrollY };
};

export const useScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return scrollToTop;
};

export const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLocked ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);

  const toggleLock = () => setIsLocked(prev => !prev);

  return [isLocked, toggleLock];
};

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, options]);

  return [setElement, isIntersecting];
}; 