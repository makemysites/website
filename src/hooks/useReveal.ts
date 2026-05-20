import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    let batch: HTMLElement[] = [];
    let frameId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement);

        if (intersecting.length > 0) {
          batch.push(...intersecting);
          
          if (!frameId) {
            frameId = requestAnimationFrame(() => {
              // Stagger elements that entered the viewport at the same time
              batch.forEach((el, index) => {
                // Cap the stagger to 300ms max so fast scrolling doesn't cause huge delays
                const delay = Math.min(index * 75, 300);
                el.style.transitionDelay = `${delay}ms`;
                el.classList.add('revealed');
                observer.unobserve(el);
              });
              
              batch = [];
              frameId = null;
            });
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-element');
    elements.forEach((el) => {
      // Clear any global delay that might have been set previously
      (el as HTMLElement).style.transitionDelay = '';
      observer.observe(el);
    });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
