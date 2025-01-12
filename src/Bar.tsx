import React, { useRef, useEffect, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { BarProps } from './types';
import { UTILITIES } from './utilities';

const Bar: React.FC<BarProps> = ({ utilityIds, color, style }) => {
  const [showLabels, setShowLabels] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (barRef.current) {
        setShowLabels(barRef.current.offsetWidth > 200);
      }
    };

    checkWidth();
    
    const resizeObserver = new ResizeObserver(checkWidth);
    if (barRef.current) {
      resizeObserver.observe(barRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        ...style,
        backgroundColor: color,
      }}
      className="absolute h-10 rounded-lg border border-gray-200 shadow-sm flex items-center hover:border-gray-500 transition-all ease-in-out cursor-pointer"
    >
      <div className="h-full px-2 flex gap-2 items-center">
        {utilityIds.map(id => {
          const utility = UTILITIES[id];
          if (!utility) return null;

          const IconComponent = (LucideIcons as any)[utility.icon];
          
          return (
            <div
              key={utility.id}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-white/90 
                ${!showLabels ? 'p-1.5' : ''}`}
              title={utility.name}
            >
              {IconComponent && (
                <IconComponent size={14} className="shrink-0" />
              )}
              {showLabels && (
                <span className="truncate">{utility.name}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bar;