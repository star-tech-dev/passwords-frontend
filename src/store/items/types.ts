export type ItemId = string

export interface Item {
  _id: ItemId,
  name: string,
  url?: string,
  username?: string,
  password?: string,
  note?: string,
  isFavourite?: boolean
}

export interface ItemPayload {
  name: string
}

export type State = Item[]

export interface ItemFavouriteStatusProps {
  id: ItemId | null
}

export interface DeleteItemPayload {
  id: ItemId | null
}
