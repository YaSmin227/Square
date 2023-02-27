import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";


const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  isDarkMode ?
    document.body.classList.add('dark') :
    document.body.classList.remove('dark');

  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
      speed={1.1}
    />
  )
}

export default DarkMode