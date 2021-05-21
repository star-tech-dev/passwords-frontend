export type SecurityCode = string

export interface User {
  _id?: string,
  username: string,
  hasSecurityCode: boolean
}

export interface AuthState {
  user: User | null
}

export interface RegisterPayload {
  username: string,
  password: string
}

export interface LoginPayload {
  username: string,
  password: string
}

export interface LoginResponse {
  user: User,
  isAppLocked: boolean
}

export interface AuthCheckResponse {
  user: User,
  isAppLocked: boolean
}
