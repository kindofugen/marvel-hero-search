import { useEffect } from 'react';

export const useClickOutside = (callback) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.tagName !== 'BUTTON') {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });
};
