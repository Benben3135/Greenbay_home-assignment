// Timeline.tsx
import React from 'react';
import { TimelineProps } from './types';
import Bar from './Bar';

const Timeline: React.FC<TimelineProps> = ({ 
  times, 
  containers,
  rowHeight = 48
}) => {
  const hourWidth = 200;
  const totalWidth = times.length * hourWidth;

  const getTimeLabel = (time: Date): string => {
    return time.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
  };

  const calculatePosition = (time: Date): number => {
    const startTime = times[0].time;
    const diffInHours = (time.getTime() - startTime.getTime()) / (1000 * 60 * 60);
    return diffInHours * hourWidth;
  };

  // Get unique line names to display in left column
  const lines = Array.from(new Set(containers.map(c => c.lineName)));

  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 overflow-auto">
        <div className="flex" style={{ width: `${totalWidth + 96}px` }}>
          {/* Fixed left column */}
          <div className="sticky left-0 w-24 bg-white shadow-md z-50">
            {/* Header */}
            <div 
              className="h-12 border-b bg-white flex items-center justify-center font-bold"
            >
              lines
            </div>
            {/* Line names */}
            {lines.map((lineName, idx) => (
              <div 
                key={idx} 
                className="flex items-center px-3 border-b bg-white"
                style={{ height: `${rowHeight}px` }}
              >
                <span className="text-sm font-medium text-gray-600">
                  {lineName}
                </span>
              </div>
            ))}
          </div>

          {/* Timeline content */}
          <div style={{ width: `${totalWidth}px` }}>
            {/* Time headers */}
            <div className="sticky top-0 flex bg-white border-b z-40">
              {times.map((timeObj, index) => (
                <div
                  key={index}
                  style={{ width: `${hourWidth}px` }}
                  className="h-12 flex items-center px-4 border-r text-sm"
                >
                  {getTimeLabel(timeObj.time)}
                </div>
              ))}
            </div>

            {/* Grid and Bars */}
            <div className="relative">
              {/* Grid background */}
              {lines.map((lineName, lineIdx) => (
                <div 
                  key={lineIdx}
                  className="relative flex border-b"
                  style={{ height: `${rowHeight}px` }}
                >
                  {times.map((_, index) => (
                    <div
                      key={index}
                      style={{ width: `${hourWidth}px` }}
                      className={`h-full border-r ${
                        index % 2 === 0 ? 'bg-green-50' : 'bg-white'
                      }`}
                    />
                  ))}
                  
                  {/* Bars for this line */}
                  {containers
                    .filter(container => container.lineName === lineName)
                    .map((container, containerIdx) => {
                      const left = calculatePosition(container.startTime);
                      const width = calculatePosition(container.endTime) - left;

                      return (
                        <Bar
                          key={containerIdx}
                          utilityIds={container.utilityIds}
                          color={container.color}
                          style={{
                            position: 'absolute',
                            left: `${left}px`,
                            width: `${width}px`,
                            top: '50%',
                            transform: 'translateY(-50%)',
                          }}
                        />
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;