import { useEffect, useRef, useState } from 'react';

interface ObserverResult {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
}

export function useIntersectionObserver(threshold = 0.15): ObserverResult {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
