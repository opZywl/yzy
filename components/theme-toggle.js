'use client';

import clsx from 'clsx';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-9 w-9 rounded-full !border-none bg-transparent"
    >
      <p
        className={clsx(
          'relative w-[1.2rem] scale-100 transition-all duration-100 text-dark-4 dark:text-zinc-500 font-bold hover:[box-shadow:1px_1px_30px_-4px_#111] bg-none rounded-full',
          'dark:scale-0'
        )}
      >
        夜
      </p>
      <p
        className={clsx(
          'absolute w-[1.2rem] scale-0 transition-all duration-100 text-zinc-500 dark:text-white font-bold hover:[box-shadow:1px_1px_50px_20px_#c6c6c650] bg-none rounded-full',
          'dark:scale-100'
        )}
      >
        朝
      </p>
    </button>
  );
}
