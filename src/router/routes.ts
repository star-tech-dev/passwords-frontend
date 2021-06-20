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
    name: 'profile',
    path: '/profile',
    private: true
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
    name: 'settings',
    path: '/settings'
  },
  {
    name: 'settings.profile',
    path: '/profile'
  },
  {
    name: 'settings.appearance',
    path: '/appearance'
  },
  {
    name: 'settings.language',
    path: '/language'
  },
  {
    name: 'settings.about',
    path: '/about'
  },

  {
    name: '@@router5/UNKNOWN_ROUTE',
    path: '/404'
  }
]
