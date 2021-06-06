export default [
  {
    name: 'home',
    path: '/',
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
