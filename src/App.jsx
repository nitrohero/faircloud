import React, { useState, useEffect } from "react";
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="relative h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile and Desktop Nav */}
      <div className={`fixed inset-y-0 left-0 transform ${isNavExpanded ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} transition-transform duration-300 ease-in-out z-30`}>
        <Nav isExpanded={isNavExpanded} toggleNav={toggleNav} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main Content */}
      <main className={`h-full overflow-auto transition-all duration-300 ease-in-out ${isNavExpanded ? 'ml-64' : 'ml-0 md:ml-16'}`}>
        <div className="md:hidden p-4">
          <button 
            onClick={toggleNav}
            className="text-gray-600 dark:text-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Dashboard />
      </main>

      {/* Overlay for mobile */}
      {isNavExpanded && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleNav}
        ></div>
      )}
    </div>
  );
}