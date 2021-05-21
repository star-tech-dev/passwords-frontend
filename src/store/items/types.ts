export type ItemId = string

export interface Item {
  _id?: ItemId,
  name?: string,
  url?: string,
  username?: string,
  password?: string,
  note?: string
}

export interface ItemPayload {
  name: string
}

export type State = Item[]
