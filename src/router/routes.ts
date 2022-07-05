export default [
  {
    name: 'auth',
    path: '/auth',
    forGuests: true
  },

  {
    name: 'landing',
    path: '/'
  },

  {
    name: 'home',
    path: '/app',
    private: true
  },
  {
    name: 'favourites',
    path: '/app/favourites',
    private: true
  },
  {
    name: 'unlock',
    path: '/app/unlock',
    private: true
  },

  {
    name: 'item',
    path: '/app/item/:id',
    private: true
  },
  {
    name: 'item.edit',
    path: '/app/edit',
    private: true
  },
  {
    name: 'add',
    path: '/app/add',
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
    path: '/app/settings',
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
