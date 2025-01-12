import React from 'react';
import Timeline from './Timeline';
import { TimelineTime } from './types';
import { containers } from './containers';

const App: React.FC = () => {
  // Create 24 hours timeline
  const generateTimeline = (): TimelineTime[] => {
    const times: TimelineTime[] = [];
    const baseDate = new Date();
    baseDate.setMinutes(0);
    baseDate.setSeconds(0);
    baseDate.setMilliseconds(0);

    for (let i = 0; i < 24; i++) {
      const time = new Date(baseDate);
      time.setHours(i);
      times.push({ time });
    }

    return times;
  };

  return (
    <div className="min-h-screen w-screen p-4 flex items-center justify-center bg-gray-100">
      <div className="w-[80vw] h-[60vh] bg-white rounded-lg shadow-lg">
        <Timeline 
          times={generateTimeline()} 
          containers={containers}
          rowHeight={48}
        />
      </div>
    </div>
  );
};

export default App;