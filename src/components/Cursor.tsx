import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    const checkIsMobile = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (isDesktop) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      width: 8,
      height: 8,
      backgroundColor: 'var(--color-primary)',
      border: '0px solid var(--color-primary)',
      mixBlendMode: 'normal' as const,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      border: '2px solid var(--color-primary)',
      mixBlendMode: 'multiply' as const,
    },
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.08,
      }}
    />
  );
};

export default Cursor;
