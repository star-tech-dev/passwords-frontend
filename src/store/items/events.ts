import { ItemsDomain } from './domain'
import { sendRequest } from '../../api'
import { ItemId, Item, ItemPayload } from './types'

export const getItems = ItemsDomain.createEffect<null, Array<Item>>().use(() => {
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
