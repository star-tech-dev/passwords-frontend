export default [
  {
    name: 'home',
    path: '/',
    private: true
  },
  {
    name: 'favourites',
    path: '/favourites',
    private: true
  },

  {
    name: 'auth',
    path: '/auth',
    forGuests: true
  },
  {
    name: 'unlock',
    path: '/unlock',
    private: true
  },

  {
    name: 'item',
    path: '/item/:id',
    private: true
  },
  {
    name: 'item.edit',
    path: '/edit',
    private: true
  },
  {
    name: 'add',
    path: '/add',
    private: true
  },

  {
    name: 'group',
    path: '/group/:id',
    private: true
  },
  {
    name: 'group.edit',
    path: '/edit',
    private: true
  },

  {
    name: 'settings',
    path: '/settings',
    private: true
  },
  {
    name: 'settings.profile',
    path: '/profile',
    private: true
  },
  {
    name: 'settings.general',
    path: '/general',
    private: true
  },
  {
    name: 'settings.security',
    path: '/security',
    private: true
  },
  {
    name: 'settings.about',
    path: '/about',
    private: true
  },

  {
    name: '@@router5/UNKNOWN_ROUTE',
    path: '/404'
  }
]
