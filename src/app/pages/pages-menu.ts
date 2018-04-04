import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Personnel',
    icon: 'nb-star',
    link: '/pages/dashboard',
    home: false,
  },
  {
    title: 'Owners',
    icon: 'nb-person',
    link: '/pages/dashboard',
    home: false,
  },
  {
    title: 'Treatments',
    icon: 'nb-list',
    link: '/pages/dashboard',
    home: false,
  },
  {
    title: 'Clinics',
    icon: 'nb-location',
    link: '/pages/dashboard',
    home: false,
  }
];
