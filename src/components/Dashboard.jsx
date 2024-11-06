import React, { useState } from "react";
import { Info, Maximize2, ChevronDown } from "lucide-react";

const countryData = [
  {
    name: "India",
    isoCode: "IN",
    population: "1,324,171,354",
    size: "3,287,263",
    density: "402.82",
  },
  {
    name: "China",
    isoCode: "CN",
    population: "1,403,500,365",
    size: "9,596,961",
    density: "146.24",
  },
  {
    name: "Italy",
    isoCode: "IT",
    population: "60,483,973",
    size: "301,340",
    density: "200.72",
  },
  {
    name: "United States",
    isoCode: "US",
    population: "327,167,434",
    size: "9,833,520",
    density: "33.27",
  },
];

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("August 2024");
  const [selectedMonthBreakDown, setSelectedMonthBreakDown] =
    useState("August 2024");
  const [selectedCloud, setSelectedCloud] = useState("AWS");
  const [isExpandedDiv1, setisExpandedDiv1] = useState(false);
  const [isExpandedDiv2, setIsExpandedDiv2] = useState(false);

  const handleMaximizeClickDiv1 = () => {
    setisExpandedDiv1(true);
  };

  const handleClosePopupDiv1 = () => {
    setisExpandedDiv1(false);
  };

  const handleMaximizeClickDiv2 = () => {
    setIsExpandedDiv2(true);
  };

  const handleClosePopupDiv2 = () => {
    setIsExpandedDiv2(false);
  };

  return (
    <div className="h-full w-full bg-gray-100 dark:bg-gray-900">
      <div className="w-full p-3 text-gray-800 dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-max">
        {/* div1 */}
        <div>
          <div className="h-auto text-gray-800 dark:text-gray-100 flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Total Potential Savings */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-750 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                    Total Potential Savings
                  </span>
                  <Info
                    size={14}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
                  />
                </div>
                <div className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
                  $0.00
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2">
                  Autopilot is{" "}
                  <span className="text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-400/10 px-2 py-0.5 rounded">
                    OFF
                  </span>
                </div>
              </div>

              {/* September Savings */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-750 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">
                    September Savings
                  </span>
                  <Info
                    size={14}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
                  />
                </div>
                <div className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
                  $0.00
                </div>
              </div>
            </div>

            {/* Service Breakdown */}
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 sm:mb-0">
                  Service Breakdown
                </h2>
                <div className="flex flex-wrap gap-3">
                  <div className="relative inline-block">
                    <select
                      className="flex items-center gap-3 focus:outline-none focus:border-none mr-2 w-full bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-xs dark:text-gray-200 appearance-none"
                      value={selectedCloud}
                      onChange={(e) => setSelectedCloud(e.target.value)}
                    >
                      <option value="AWS">AWS</option>
                      <option value="GCP">GCP</option>
                      <option value="Azure">Azure</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-2 top-2 pointer-events-none"
                    />
                  </div>
                  <button className="flex items-center gap-1.5 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-xs dark:text-gray-200 hover:bg-gray-300">
                    EC2 Reservation
                    <ChevronDown size={14} />
                  </button>
                  <div className="relative inline-block">
                    <select
                      className="flex items-center gap-1.5 focus:outline-none focus:border-none bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-xs dark:text-gray-200 appearance-none"
                      value={selectedMonthBreakDown}
                      onChange={(e) =>
                        setSelectedMonthBreakDown(e.target.value)
                      }
                    >
                      <option value="January 2024">January 2024</option>
                      <option value="February 2024">February 2024</option>
                      <option value="March 2024">March 2024</option>
                      <option value="April 2024">April 2024</option>
                      <option value="May 2024">May 2024</option>
                      <option value="June 2024">June 2024</option>
                      <option value="July 2024">July 2024</option>
                      <option value="August 2024">August 2024</option>
                      <option value="September 2024">September 2024</option>
                      <option value="October 2024">October 2024</option>
                      <option value="November 2024">November 2024</option>
                      <option value="December 2024">December 2024</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-2 top-2 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] text-gray-400 text-sm">
                <div className="dark:bg-gray-700/50 p-4 rounded-xl">
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
                <p className="mt-4 text-gray-400">
                  No data available to display.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* div2 */}
        <div className="h-full bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="p-6 h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="dark:text-gray-200 text-sm font-medium mb-2 sm:mb-0">
                Savings Per Service
              </h2>
              <div className="relative inline-block">
                <select
                  className="flex items-center gap-1.5 focus:outline-none focus:border-none bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-xs dark:text-gray-200 hover:bg-gray-300 appearance-none"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="January 2024">January 2024</option>
                  <option value="February 2024">February 2024</option>
                  <option value="March 2024">March 2024</option>
                  <option value="April 2024">April 2024</option>
                  <option value="May 2024">May 2024</option>
                  <option value="June 2024">June 2024</option>
                  <option value="July 2024">July 2024</option>
                  <option value="August 2024">August 2024</option>
                  <option value="September 2024">September 2024</option>
                  <option value="October 2024">October 2024</option>
                  <option value="November 2024">November 2024</option>
                  <option value="December 2024">December 2024</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-2 top-2 pointer-events-none"
                />
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">
              {/* Mobile version */}
              <div className="sm:hidden">
                {countryData.map((country) => (
                  <div
                    key={country.isoCode}
                    className="mb-4 bg-gray-200 dark:bg-gray-700/50 rounded-lg p-4 text-sm dark:text-gray-200"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{country.name}</h3>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.isoCode}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">
                          Population
                        </p>
                        <p className="text-right">{country.population}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">
                          Size (km²)
                        </p>
                        <p className="text-right">{country.size}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-600 dark:text-gray-400">
                          Density
                        </p>
                        <p className="text-right">{country.density}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop version */}
              <table className="w-full border-separate border-spacing-y-2 hidden sm:table">
                <thead>
                  <tr className="text-xs dark:text-gray-400">
                    <th className="font-medium text-left py-2">Name</th>
                    <th className="font-medium text-left py-2">ISO Code</th>
                    <th className="font-medium text-right py-2">Population</th>
                    <th className="font-medium text-right py-2 hidden sm:table-cell">
                      Size (km²)
                    </th>
                    <th className="font-medium text-right py-2 hidden sm:table-cell">
                      Density
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {countryData.map((country) => (
                    <tr
                      key={country.isoCode}
                      className="bg-gray-200 dark:bg-gray-700/50 dark:text-gray-200 text-sm"
                    >
                      <td className="py-3 px-4 rounded-l-lg font-medium">
                        {country.name}
                      </td>
                      <td className="py-3 px-4">{country.isoCode}</td>
                      <td className="py-3 px-4 text-right">
                        {country.population}
                      </td>
                      <td className="py-3 px-4 text-right hidden sm:table-cell">
                        {country.size}
                      </td>
                      <td className="py-3 px-4 text-right rounded-r-lg hidden sm:table-cell">
                        {country.density}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* div3 */}
        <div className={`relative ${isExpandedDiv1 ? "overflow-hidden" : ""}`}>
          {isExpandedDiv1 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
          )}
          <div
            className={`${
              isExpandedDiv1
                ? "fixed inset-0 z-50 w-[90%] h-[90vh] m-auto sm:w-[90%] sm:h-[80vh] sm:m-auto"
                : "h-[40vh]"
            } bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="dark:text-gray-200 font-sm">
                  Gross Savings
                </span>
                <Info
                  size={16}
                  className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
                />
              </div>
              <button
                className="p-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-lg transition-colors"
                onClick={
                  isExpandedDiv1
                    ? handleClosePopupDiv1
                    : handleMaximizeClickDiv1
                }
              >
                <Maximize2
                  size={16}
                  className={`text-gray-400 hover:text-gray-600 ${
                    isExpandedDiv1 ? "rotate-45" : ""
                  }`}
                />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm dark:bg-gray-700/50 rounded-xl">
              No data available to display.
            </div>
          </div>
        </div>

        {/* div4 */}
        <div className={`relative ${isExpandedDiv2 ? "overflow-hidden" : ""}`}>
          {isExpandedDiv2 && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          )}
          <div
            className={`${
              isExpandedDiv2
                ? "fixed inset-0 z-50 w-[90%] h-[90vh] m-auto sm:w-[90%] sm:h-[80vh] sm:m-auto"
                : "h-[40vh]"
            } bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="dark:text-gray-200 font-sm">
                  Computer Ledger
                </span>
                <Info
                  size={16}
                  className="text-gray-400 hover:text-gray-200 cursor-pointer transition-colors"
                />
              </div>
              <button
                className="p-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-lg transition-colors"
                onClick={
                  isExpandedDiv2
                    ? handleClosePopupDiv2
                    : handleMaximizeClickDiv2
                }
              >
                <Maximize2
                  size={16}
                  className={`text-gray-400 hover:text-gray-600 ${
                    isExpandedDiv2 ? "rotate-45" : ""
                  }`}
                />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm dark:bg-gray-700/50 rounded-xl">
              No Recent activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
