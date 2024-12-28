import { useState, useEffect } from 'react';

export function useMenuState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return [isMenuOpen, setIsMenuOpen];
} 