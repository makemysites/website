'use client';

import { useEffect, useRef } from 'react';

/** Scroll-triggered fade-up animation using Intersection Observer */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.fade-up:not(.animate-in)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observe after a short delay to ensure hydration is complete
    const timer = setTimeout(observeAll, 100);

    // Watch for dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

/** Animated counter for stats */
export function animateCounter(
  element: HTMLElement,
  target: number,
  duration: number = 1500,
  prefix: string = '',
  suffix: string = ''
) {
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    element.textContent = `${prefix}${Math.floor(eased * target)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

/** Scroll progress tracker */
export function useScrollProgress() {
  useEffect(() => {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

/** Mouse tilt effect for hero mockup */
export function useMouseTilt(ref: React.RefObject<HTMLElement | null>, maxDeg: number = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      el.style.transition = 'transform 400ms ease';
      setTimeout(() => { el.style.transition = ''; }, 400);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, maxDeg]);
}
