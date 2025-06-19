import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Analytics Chart Section
const AnalyticsChart = () => {
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState('all');

  const data = [
    { project: 'Website A', refurbishment: 45, newBuild: 65, complete: 55, estimate: 35 },
    { project: 'App B', refurbishment: 38, newBuild: 78, complete: 60, estimate: 40 },
    { project: 'Platform C', refurbishment: 52, newBuild: 45, complete: 48, estimate: 52 },
    { project: 'System D', refurbishment: 35, newBuild: 88, complete: 70, estimate: 45 },
    { project: 'Portal E', refurbishment: 48, newBuild: 55, complete: 52, estimate: 38 }
  ];

  const getFilteredData = () => {
    return data.map(item => {
      let value = 0;
      if (filter === 'all') {
        value = status === 'all' ? (item.complete + item.estimate) / 2 :
                status === 'complete' ? item.complete : item.estimate;
      } else if (filter === 'refurbishment') {
        value = item.refurbishment;
      } else if (filter === 'newBuild') {
        value = item.newBuild;
      }
      return { ...item, value };
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Analytics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Detailed analysis of project emissions and performance metrics
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">Project Type:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="all">All</option>
                <option value="refurbishment">Refurbishment</option>
                <option value="newBuild">New Build</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">Status:</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="estimate">Estimate</option>
              </select>
            </div>
          </div>

          {/* Chart */}
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getFilteredData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="project" 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280' }}
                />
                <YAxis 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280' }}
                  label={{ value: 'Emissions (tCO2e)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B7280' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">2025 Target</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">2030 Target</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsChart;