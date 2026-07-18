import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme, switchable } = useTheme();

  if (!switchable) {
    return null;
  }

  const isDark = theme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary transition-all duration-300"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
