'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const floatingElements = useRef<HTMLDivElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const themeVariant = resolvedTheme ?? 'light';

  // Handle mouse movement for parallax effect (desktop only)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || typeof window === 'undefined' || window.innerWidth < 1024) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  }, []);

  // Handle mouse enter/leave for interactive elements
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  const rebuildGrid = useCallback(() => {
    if (!gridRef.current) return;
    const grid = gridRef.current;

    // Guard for non-browser environments
    if (typeof window === 'undefined') return;

    const width = window.innerWidth;
    const isSmall = width < 640;
    const isMedium = width >= 640 && width < 1024;

    const gridSize = isSmall ? 8 : isMedium ? 12 : 18;
    const totalCells = gridSize * gridSize;

    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < totalCells; i++) {
      fragment.appendChild(document.createElement('div'));
    }
    grid.appendChild(fragment);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      window.requestAnimationFrame(rebuildGrid);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [rebuildGrid]);

  useEffect(() => {
    rebuildGrid();
  }, [rebuildGrid, themeVariant]);

  // Create floating elements with responsive sizing
  const createFloatingElements = useCallback(() => {
    // Skip if not in browser or container not available
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    // Clear existing elements
    floatingElements.current.forEach((el: HTMLElement | null) => el?.remove());
    floatingElements.current = [];
    
    const width = window.innerWidth;
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;
    const count = isMobile ? 2 : isTablet ? 3 : 5;
    const colors =
      themeVariant === 'dark'
        ? [
            'hsl(330 100% 70% / 0.85)',
            'hsl(315 95% 68% / 0.75)',
            'hsl(340 100% 72% / 0.65)'
          ]
        : [
            'hsl(var(--primary) / 0.4)',
            'hsl(var(--accent) / 0.35)',
            'hsl(var(--secondary) / 0.25)'
          ];

    for (let i = 0; i < count; i++) {
      const baseSize = isMobile ? 72 : isTablet ? 130 : 220;
      const size = Math.random() * baseSize * 0.45 + baseSize;
      const duration = (Math.random() * 18 + 18) * (isMobile ? 1.35 : 1);
      const delay = Math.random() * 5;
      
      const el = document.createElement('div');
      el.className = 'floating-element';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.opacity = themeVariant === 'dark' ? '0.32' : '0.2';
      el.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      // Random position
      el.style.position = 'absolute';
      el.style.left = `${Math.random() * 80 + 10}%`;
      el.style.top = `${Math.random() * 80 + 10}%`;
      
      containerRef.current.appendChild(el);
      floatingElements.current.push(el);
    }
  }, [themeVariant]);

  useEffect(() => {
    // Skip if not in browser
    if (typeof window === 'undefined') return;

    // Initial creation
    createFloatingElements();

    // Recreate on window resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(createFloatingElements, 200);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      floatingElements.current.forEach(el => el?.remove());
    };
  }, [createFloatingElements]);

  // Parallax effect for floating elements (desktop only)
  const getParallaxStyle = useCallback((depth = 1) => {
    // Return default style during SSR or if not a desktop
    if (typeof window === 'undefined' || window.innerWidth < 1024) {
      return { transform: 'none' } as React.CSSProperties;
    }
    return {
      transform: `translate(${mousePosition.x * 20 * depth}px, ${mousePosition.y * 20 * depth}px)`,
      transition: 'transform 0.3s ease-out'
    } as React.CSSProperties;
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div
      aria-hidden="true"
      className="interactive-bg"
      data-theme={themeVariant}
      ref={containerRef}
      style={{
        '--mouse-x': `${mousePosition.x * 20}px`,
        '--mouse-y': `${mousePosition.y * 20}px`,
      } as React.CSSProperties}
    >
      <div className="gradient-overlay" style={getParallaxStyle(0.5)} />
      <div className="interactive-grid" ref={gridRef} />
      
      {/* Animated cursor highlight */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
              left: `calc(50% + var(--mouse-x, 0px))`,
              top: `calc(50% + var(--mouse-y, 0px))`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
