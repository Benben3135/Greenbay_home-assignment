// containers.ts
import { Container } from './types';

export const containers: Container[] = [
  // Morning containers (existing)
  {
    lineName: "Line 1",
    startTime: new Date(new Date().setHours(8, 0)),
    endTime: new Date(new Date().setHours(10, 30)),
    utilityIds: ['wifi', 'accessible', 'ac'],
    color: '#dbeafe'  // blue-100
  },
  {
    lineName: "Line 1",
    startTime: new Date(new Date().setHours(11, 0)),
    endTime: new Date(new Date().setHours(13, 30)),
    utilityIds: ['wifi', 'usb'],
    color: '#bbf7d0'  // green-200
  },
  {
    lineName: "Line 2",
    startTime: new Date(new Date().setHours(9, 30)),
    endTime: new Date(new Date().setHours(12, 0)),
    utilityIds: ['wifi', 'usb', 'camera'],
    color: '#fae8ff'  // purple-100
  },
  {
    lineName: "Line 3",
    startTime: new Date(new Date().setHours(3, 0)),
    endTime: new Date(new Date().setHours(5, 45)),
    utilityIds: ['wifi', 'ac', 'camera'],
    color: '#fed7aa'  // orange-200
  },
  {
    lineName: "Line 3",
    startTime: new Date(new Date().setHours(10, 30)),
    endTime: new Date(new Date().setHours(14, 0)),
    utilityIds: ['wifi', 'usb', 'accessible'],
    color: '#bfdbfe'  // blue-200
  },
  {
    lineName: "Line 4",
    startTime: new Date(new Date().setHours(8, 30)),
    endTime: new Date(new Date().setHours(11, 15)),
    utilityIds: ['wifi', 'camera'],
    color: '#d8b4fe'  // purple-300
  },
  {
    lineName: "Line 5",
    startTime: new Date(new Date().setHours(9, 0)),
    endTime: new Date(new Date().setHours(12, 30)),
    utilityIds: ['wifi', 'ac', 'usb'],
    color: '#86efac'  // green-300
  },
  {
    lineName: "Line 1",
    startTime: new Date(new Date().setHours(0, 0)),
    endTime: new Date(new Date().setHours(1, 0)),
    utilityIds: ['wifi', 'accessible', 'camera'],
    color: '#fca5a5'  // red-300
  },
  {
    lineName: "Line 2",
    startTime: new Date(new Date().setHours(1, 0)),
    endTime: new Date(new Date().setHours(3, 30)),
    utilityIds: ['wifi', 'accessible', 'ac'],
    color: '#dbeafe'  // blue-100
  },
  {
    lineName: "Line 1",
    startTime: new Date(new Date().setHours(11, 0)),
    endTime: new Date(new Date().setHours(13, 30)),
    utilityIds: ['wifi', 'usb'],
    color: '#bbf7d0'  // green-200
  },
  {
    lineName: "Line 2",
    startTime: new Date(new Date().setHours(9, 30)),
    endTime: new Date(new Date().setHours(12, 0)),
    utilityIds: ['wifi', 'usb', 'camera'],
    color: '#fae8ff'  // purple-100
  },
  {
    lineName: "Line 3",
    startTime: new Date(new Date().setHours(7, 0)),
    endTime: new Date(new Date().setHours(9, 45)),
    utilityIds: ['wifi', 'ac', 'camera'],
    color: '#fed7aa'  // orange-200
  },
  
  // Afternoon and evening containers (new)
  {
    lineName: "Line 1",
    startTime: new Date(new Date().setHours(14, 0)),
    endTime: new Date(new Date().setHours(16, 30)),
    utilityIds: ['wifi', 'ac', 'usb'],
    color: '#dbeafe'  // blue-100
  },
  {
    lineName: "Line 2",
    startTime: new Date(new Date().setHours(15, 0)),
    endTime: new Date(new Date().setHours(17, 45)),
    utilityIds: ['wifi', 'camera', 'accessible'],
    color: '#fae8ff'  // purple-100
  },
  {
    lineName: "Line 3",
    startTime: new Date(new Date().setHours(16, 30)),
    endTime: new Date(new Date().setHours(19, 0)),
    utilityIds: ['wifi', 'ac'],
    color: '#fed7aa'  // orange-200
  },
  {
    lineName: "Line 4",
    startTime: new Date(new Date().setHours(17, 0)),
    endTime: new Date(new Date().setHours(20, 30)),
    utilityIds: ['wifi', 'usb', 'camera'],
    color: '#d8b4fe'  // purple-300
  },
  {
    lineName: "Line 5",
    startTime: new Date(new Date().setHours(18, 30)),
    endTime: new Date(new Date().setHours(21, 0)),
    utilityIds: ['wifi', 'ac', 'accessible'],
    color: '#86efac'  // green-300
  },
  {
    lineName: "Line 1",
    startTime: new Date(new Date().setHours(19, 0)),
    endTime: new Date(new Date().setHours(22, 30)),
    utilityIds: ['wifi', 'camera'],
    color: '#bbf7d0'  // green-200
  },
  {
    lineName: "Line 2",
    startTime: new Date(new Date().setHours(20, 0)),
    endTime: new Date(new Date().setHours(23, 0)),
    utilityIds: ['wifi', 'usb', 'ac'],
    color: '#fae8ff'  // purple-100
  },
  {
    lineName: "Line 3",
    startTime: new Date(new Date().setHours(21, 30)),
    endTime: new Date(new Date().setHours(23, 45)),
    utilityIds: ['wifi', 'camera', 'accessible'],
    color: '#bfdbfe'  // blue-200
  }
];