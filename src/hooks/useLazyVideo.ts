import { useEffect, useRef, useState } from 'react';

interface UseLazyVideoOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useLazyVideo = (options: UseLazyVideoOptions = {}) => {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasLoaded]);

  return { elementRef, isVisible, hasLoaded };
};