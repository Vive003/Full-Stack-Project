import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Recupera tema salvato (opzionale)
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Applica classe al body
    const classList = document.body.classList;
    if (darkMode) {
      classList.add('bg-dark', 'text-light');
      classList.remove('bg-white', 'text-dark');
    } else {
      classList.add('bg-white', 'text-dark');
      classList.remove('bg-dark', 'text-light');
    }

    // Salva in localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Hook per usare il contesto facilmente
export function useDarkMode() {
  return useContext(DarkModeContext);
}
