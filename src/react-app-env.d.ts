/// <reference types="react-scripts" />

import { AxiosError } from 'axios'

export module Api {
  export interface ApiErrorData {
    message?: string,
    code?: number
  }

  export interface Error extends AxiosError {
    data: ApiErrorData
  }
}
