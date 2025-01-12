// types.ts
export type Utility = {
  id: string;
  name: string;
  icon: string; // Lucide icon name
};

export type BarProps = {
  utilityIds: string[];
  color: string;
  style?: React.CSSProperties;
};

// Timeline related types
export type TimelineTime = {
  time: Date;
};

export type Container = {
  lineName: string;
  startTime: Date;
  endTime: Date;
  utilityIds: string[];
  color: string;
};

export interface TimelineProps {
  times: TimelineTime[];
  containers: Container[];
  rowHeight?: number;
}