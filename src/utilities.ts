import { Utility } from './types';

// Registry of all available utilities
export const UTILITIES: Record<string, Utility> = {
  'wifi': {
    id: 'wifi',
    name: 'WiFi',
    icon: 'Wifi'
  },
  'accessible': {
    id: 'accessible',
    name: 'Accessible',
    icon: 'Wheelchair'
  },
  'ac': {
    id: 'ac',
    name: 'Air Conditioning',
    icon: 'Wind'
  },
  'usb': {
    id: 'usb',
    name: 'USB Charging',
    icon: 'Battery'
  },
  'camera': {
    id: 'camera',
    name: 'Security Camera',
    icon: 'Camera'
  }
  // Add more utilities as needed
};