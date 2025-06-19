import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

// Count Up Animation Component
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Stats Section with Progress Bars
const StatsSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { label: "Projects Completed", value: 250, suffix: "+" },
    { label: "Happy Clients", value: 150, suffix: "+" },
    { label: "Years Experience", value: 8, suffix: "" },
    { label: "Team Members", value: 25, suffix: "" }
  ];

  const yearlyData = [
    { year: "2019", carbonFootprint: 45, energyIntensity: 30, energyConsumption: 85, change: -5 },
    { year: "2020", carbonFootprint: 38, energyIntensity: 25, energyConsumption: 78, change: -12 },
    { year: "2021", carbonFootprint: 32, energyIntensity: 22, energyConsumption: 70, change: -18 },
    { year: "2022", carbonFootprint: 28, energyIntensity: 18, energyConsumption: 65, change: -25 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Impact & Statistics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence and sustainability drives measurable results
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {animated ? (
                  <CountUp end={stat.value} duration={2} />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Yearly Progress Data */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sustainability Metrics
            </h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Download className="h-4 w-4" />
              Download Data
            </button>
          </div>

          <div className="space-y-8">
            {yearlyData.map((data, index) => (
              <div key={data.year} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {data.year}
                  </h4>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    data.change < 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {data.change}% vs 2019
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Carbon Footprint</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{data.carbonFootprint}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: animated ? `${data.carbonFootprint}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Energy Intensity</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{data.energyIntensity}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: animated ? `${data.energyIntensity}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Energy Consumption</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{data.energyConsumption}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: animated ? `${data.energyConsumption}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;