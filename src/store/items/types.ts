export type ItemId = string

export type ItemGroupType = string

export enum ItemType {
  account = 'account'
}

export interface Item {
  _id: ItemId,
  type?: ItemType,
  group?: ItemGroupType | null,

  name: string,
  url?: string,
  username?: string,
  password?: string,
  note?: string,

  color?: string,
  image?: string,
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
