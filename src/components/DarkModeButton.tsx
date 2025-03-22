import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeButton = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-50"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default DarkModeButton;
