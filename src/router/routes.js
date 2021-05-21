export default [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'auth',
    path: '/auth',
    forGuests: true
  },
  {
    name: 'item',
    path: '/item/:id',
    private: true
  },
  {
    name: 'profile',
    path: '/profile',
    private: true
  },
  {
    name: 'add',
    path: '/add',
    private: true
  },
  {
    name: '404',
    path: '/404'
  }
]
