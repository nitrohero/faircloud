import React from "react";
import { ChevronLeft, ChevronRight, Workflow, Users, Store, GitCommitHorizontal, LayoutGrid, WalletMinimal, Menu, Sun, Moon } from "lucide-react";

const NavItem = ({ icon, label, isExpanded }) => (
  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white rounded-lg">
    {icon}
    {isExpanded && <span className="text-sm">{label}</span>}
  </a>
);

export default function Nav({ isExpanded, toggleNav, isDarkMode, toggleDarkMode }) {
  return (
    <nav className={`bg-white dark:bg-slate-800 h-full transition-transform duration-300 ease-in-out ${
      isExpanded ? 'w-64' : 'w-16'
    }`}>
      <div className="flex flex-col h-full p-3 ">
        <div className="flex items-center justify-between mb-6 pb-3 border-b-[1px] dark:border-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5  rounded-lg flex-shrink-0">
            <img src="https://faircloud.ai/static/media/logo.1976bc073fb3e76813163c2e1f97a0ae.svg" alt="" /></div>
            {isExpanded && <span className="font-semibold text-gray-800 dark:text-white text-lg ">AutoCloud</span>}
          </div>
          <button 
            className="text-gray-600 dark:text-gray-400 md:hidden"
            onClick={toggleNav}
          >
            <Menu className="w-6 h-6" />
          </button>
          <button 
            className={`hidden md:block text-gray-600 dark:text-gray-400 ${
              isExpanded ? '' : 'rotate-270'
            }`}
            onClick={toggleNav}
          >
            {isExpanded ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        <div className="space-y-6 flex-1 overflow-y-auto ">
          {/* CoPilot Section */}
          <div className="space-y-1 border-b-[2px] dark:border-b-[1px] dark:border-gray-600">
            {isExpanded && <span className="px-3 text-gray-600 dark:text-white font-bold text-m">CoPilot</span>}
            <nav className="space-y-1">
              <NavItem icon={<LayoutGrid className="w-5 h-5" />} label="OVERVIEW" isExpanded={isExpanded} />
              <NavItem icon={<Store className="w-5 h-5" />} label="RECOMMENDATION" isExpanded={isExpanded} />
              <NavItem icon={<GitCommitHorizontal className="w-5 h-5" />} label="COMMITMENTS" isExpanded={isExpanded} />
            </nav>
          </div>
          <div className="space-y-1 border-b-[2px] dark:border-b-[1px] dark:border-gray-600">
            {isExpanded && <span className="px-3 text-gray-600 dark:text-white font-bold text-m">Clear Costs</span>}
            <nav className="space-y-1">
              <NavItem icon={<LayoutGrid className="w-5 h-5" />} label="OVERVIEW" isExpanded={isExpanded} />
            </nav>
          </div>
          <div className="space-y-1 border-b-[2px] dark:border-b-[1px] dark:border-gray-600">
            {isExpanded && <span className="px-3 text-gray-600 dark:text-white font-bold text-m">Settings</span>}
            <nav className="space-y-1">
              <NavItem icon={<Users className="w-5 h-5" />} label="USER MANAGEMENT" isExpanded={isExpanded} />
              <NavItem icon={<Workflow className="w-5 h-5" />} label="INTEGRATIONS" isExpanded={isExpanded} />
              <NavItem icon={<WalletMinimal className="w-5 h-5" />} label="BILLINGS" isExpanded={isExpanded} />
            </nav>
          </div>
          <button 
          onClick={toggleDarkMode}
          className="border border-b-2 dark:border-b-[1px] dark:border-gray-600 mt-auto flex items-center justify-center w-full py-2 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {isExpanded && <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
      </div>
    </div>
    </nav>
  );
}