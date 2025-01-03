// src/components/ThemeSwitch.tsx

import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: theme === 'light' ? '#333' : '#fff',
        fontSize: '24px',
      }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitch;
