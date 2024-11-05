import React from "react";
import { Info, Maximize2, ChevronDown } from "lucide-react";

const countryData = [
  { name: 'India', isoCode: 'IN', population: '1,324,171,354', size: '3,287,263', density: '402.82' },
  { name: 'China', isoCode: 'CN', population: '1,403,500,365', size: '9,596,961', density: '146.24' },
  { name: 'Italy', isoCode: 'IT', population: '60,483,973', size: '301,340', density: '200.72' },
  { name: 'United States', isoCode: 'US', population: '327,167,434', size: '9,833,520', density: '33.27' }
];

const Dashboard = () => {
  return (
    <div className="h-full w-full bg-gray-900">
      <div className="w-full p-4 text-gray-100 grid grid-rows-2 grid-cols-2 gap-4 auto-rows-fr">
        {/* div1 */}
        <div>
          <div className="h-full bg-gray-900 text-gray-100 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Total Potential Savings */}
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-200 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-200 text-sm font-medium">
                    Total Potential Savings
                  </span>
                  <Info size={14} className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors" />
                </div>
                <div className="text-3xl font-semibold text-white tracking-tight">$0.00</div>
                <div className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                  Autopilot is{" "}
                  <span className="text-purple-400 font-medium bg-purple-400/10 px-2 py-0.5 rounded">OFF</span>
                </div>
              </div>

              {/* September Savings */}
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-200 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-200 text-sm font-medium">September Savings</span>
                  <Info size={14} className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors" />
                </div>
                <div className="text-3xl font-semibold text-white tracking-tight">$0.00</div>
              </div>
            </div>

            {/* Service Breakdown */}
            <div className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-gray-200">Service Breakdown</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 bg-gray-700 px-4 py-2 rounded-lg text-xs text-gray-200 hover:bg-gray-600 transition-colors">
                    AWS
                    <ChevronDown size={14} />
                  </button>
                  <button className="flex items-center gap-1.5 bg-gray-700 px-4 py-2 rounded-lg text-xs text-gray-200 hover:bg-gray-600 transition-colors">
                    EC2 Reservation
                    <ChevronDown size={14} />
                  </button>
                  <button className="flex items-center gap-1.5 bg-gray-700 px-4 py-2 rounded-lg text-xs text-gray-200 hover:bg-gray-600 transition-colors">
                    August 2024
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] text-gray-400 text-sm">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <p className="mt-4 text-gray-400">No data available to display.</p>
              </div>
            </div>
          </div>
        </div>

        {/* div2 */}
        <div className="h-full bg-gray-800 rounded-xl shadow-lg">
          <div className="p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-200 text-sm font-medium">Savings Per Service</h2>
              <button className="flex items-center gap-1.5 bg-gray-700 px-4 py-2 rounded-lg text-xs text-gray-200 hover:bg-gray-600 transition-colors">
                August 2024
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-xs text-gray-400">
                    <th className="font-medium text-left py-2">Name</th>
                    <th className="font-medium text-left py-2">ISO Code</th>
                    <th className="font-medium text-right py-2">Population</th>
                    <th className="font-medium text-right py-2">Size (km²)</th>
                    <th className="font-medium text-right py-2">Density</th>
                  </tr>
                </thead>
                <tbody>
                  {countryData.map((country) => (
                    <tr 
                      key={country.isoCode} 
                      className="bg-gray-700/50 text-gray-200 text-sm hover:bg-gray-700 transition-colors"
                    >
                      <td className="py-3 px-4 rounded-l-lg font-medium">{country.name}</td>
                      <td className="py-3 px-4">{country.isoCode}</td>
                      <td className="py-3 px-4 text-right">{country.population}</td>
                      <td className="py-3 px-4 text-right">{country.size}</td>
                      <td className="py-3 px-4 text-right rounded-r-lg">{country.density}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* div3 */}
        <div className="h-[300px] bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-200 font-medium">Gross Savings</span>
              <Info size={16} className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors" />
            </div>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Maximize2 size={16} className="text-gray-400 hover:text-gray-200" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm bg-gray-700/50 rounded-xl">
            No data available to display.
          </div>
        </div>

        {/* div4 */}
        <div className="h-[300px] bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-200 font-medium">Computer Ledger</span>
              <Info size={16} className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors" />
            </div>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Maximize2 size={16} className="text-gray-400 hover:text-gray-200" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm bg-gray-700/50 rounded-xl">
            No Recent activity
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;