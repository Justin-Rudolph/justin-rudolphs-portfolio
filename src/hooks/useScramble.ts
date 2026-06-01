import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?';

interface ScrambleResult {
  display: string;
  isComplete: boolean;
}

export function useScramble(target: string, startDelay = 400): ScrambleResult {
  const [display, setDisplay] = useState<string>(() =>
    target
      .split('')
      .map(c => (c === '\n' ? '\n' : CHARS[Math.floor(Math.random() * CHARS.length)]))
      .join('')
  );
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const letters = target.split('');
    let resolved = 0;

    function resolveNext() {
      if (resolved >= letters.length) {
        setIsComplete(true);
        return;
      }

      if (letters[resolved] === '\n') {
        resolved++;
        resolveNext();
        return;
      }

      let ticks = 0;
      const maxTicks = 5 + Math.floor(Math.random() * 3);

      function tick() {
        ticks++;
        setDisplay(
          letters
            .map((c, i) => {
              if (c === '\n') return '\n';
              if (i < resolved) return c;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (ticks >= maxTicks) {
          resolved++;
          timerRef.current = setTimeout(resolveNext, 28);
        } else {
          timerRef.current = setTimeout(tick, 38);
        }
      }

      tick();
    }

    timerRef.current = setTimeout(resolveNext, startDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [target, startDelay]);

  return { display, isComplete };
}
