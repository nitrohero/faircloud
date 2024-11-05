import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Workflow, Users, Store, GitCommitHorizontal, LayoutGrid, WalletMinimal } from "lucide-react";

const NavItem = ({ icon, label, isExpanded }) => (
  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
    {icon}
    {isExpanded && <span className="text-sm">{label}</span>}
  </a>
);

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`bg-slate-800 h-screen flex flex-col justify-between p-3 transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="space-y-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 p-2">
          <div className="w-8 h-8 bg-gray-700 rounded-lg flex-shrink-0"></div>
          {isExpanded && <span className="text-white text-lg">AutoCloud</span>}
          <button 
            className={`ml-auto text-gray-400 transition-transform duration-300 ${
              isExpanded ? '' : 'rotate-180'
            }`}
            onClick={toggleNav}
          >
            {isExpanded ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="space-y-6">
          {/* CoPilot Section */}
          <div className="space-y-1">
            {isExpanded && <span className="px-3 text-white font-bold text-m">CoPilot</span>}
            <nav className="space-y-1">
              <NavItem icon={<LayoutGrid className="w-5 h-5" />} label="OVERVIEW" isExpanded={isExpanded} />
              <NavItem icon={<Store className="w-5 h-5" />} label="RECOMMENDATION" isExpanded={isExpanded} />
              <NavItem icon={<GitCommitHorizontal className="w-5 h-5" />} label="COMMITMENTS" isExpanded={isExpanded} />
            </nav>
          </div>
          <div className="space-y-1">
            {isExpanded && <span className="px-3 text-white font-bold text-m">Clear Costs</span>}
            <nav className="space-y-1">
              <NavItem icon={<LayoutGrid className="w-5 h-5" />} label="OVERVIEW" isExpanded={isExpanded} />
            </nav>
          </div>
          <div className="space-y-1">
            {isExpanded && <span className="px-3 text-white font-bold text-m">Settings</span>}
            <nav className="space-y-1">
              <NavItem icon={<Users className="w-5 h-5" />} label="USER MANAGEMENT" isExpanded={isExpanded} />
              <NavItem icon={<Workflow className="w-5 h-5" />} label="INTEGRATIONS" isExpanded={isExpanded} />
              <NavItem icon={<WalletMinimal className="w-5 h-5" />} label="BILLINGS" isExpanded={isExpanded} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;