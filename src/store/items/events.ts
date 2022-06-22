import { ItemsDomain } from './domain'
import { sendRequest } from '../../api'
import { ItemId, Item, ItemPayload, ItemFavouriteStatusProps, DeleteItemPayload } from './types'
import { GroupID } from '../groups/types'

export const getItems = ItemsDomain.createEffect<void, Array<Item>>().use(() => {
  return sendRequest({
    url: '/items'
  }).catch(() => [])
})

export const getItem = ItemsDomain.createEffect<ItemId, Item>().use(id => {
  return sendRequest({
    data: { id },
    url: '/item'
  })
})

export const createItem = ItemsDomain.createEffect<ItemPayload, Item>().use(payload => {
  return sendRequest({
    method: 'post',
    data: payload,
    url: '/items'
  })
})

export const updateItem = ItemsDomain.createEffect<ItemPayload, Item>().use(payload => {
  return sendRequest({
    method: 'put',
    data: payload,
    url: '/items'
  })
})

export const toggleItemFavouriteStatus = ItemsDomain.createEffect<ItemFavouriteStatusProps, void>().use(payload => {
  return sendRequest({
    method: 'post',
    data: payload,
    url: '/favourites'
  })
})

export const deleteItem = ItemsDomain.createEffect<DeleteItemPayload, void>().use(payload => {
  return sendRequest({
    method: 'delete',
    data: payload,
    url: '/items'
  })
})

export const onGroupDelete = ItemsDomain.createEvent<GroupID>()
