
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    updateTheme(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 bg-void-black dark:bg-static-white rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gilded-parchment"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={cn(
        "sr-only",
        "WCAG-compliant screen reader text"
      )}>
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      <div className="relative w-6 h-6">
        {/* Sun icon for light mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "w-6 h-6 transition-all duration-300 absolute top-0 left-0",
            darkMode ? "opacity-100 text-void-black rotate-0" : "opacity-0 rotate-90 text-static-white"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        {/* Moon icon for dark mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "w-6 h-6 transition-all duration-300 absolute top-0 left-0",
            darkMode ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
};

export default DarkModeToggle;
