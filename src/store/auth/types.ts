export type SecurityCode = string

export interface User {
  _id?: string,
  username: string,
  hasSecurityCode: boolean,
  passwordUpdated?: Date
}

export interface UserFull extends User {
  password?: string
}

export interface UserProps {
  username?: string
}

export interface AuthState {
  user: User | null
}

export interface RegisterPayload {
  username: string,
  email?: string,
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

export interface ChangePasswordPayload {
  currentPassword: string,
  newPassword: string,
  repeatPassword: string
}
