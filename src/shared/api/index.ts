import { AxiosError } from 'axios'
import type { AxiosRequestConfig } from 'axios'

import { createClient } from './client'
import { DEFAULT_ERROR_TITLE, DEFAULT_ERROR_MESSAGE } from './consts'
import useNotificationStore from '@/shared/stores/notification'

const { instance } = createClient()

const request =
  (method: string) =>
    async (
      endpoint: string,
      data: unknown,
      options: AxiosRequestConfig = {},
    ) => {
      let response
      try {
        if (options.requestSchema) {
          data = options.requestSchema.parse(data)
        }

        response = await instance.request({
          method,
          url: endpoint,
          ...(method.toUpperCase() === 'GET' ? { params: data } : { data }),
          ...options,
        })
      } catch (error) {
        if (!options.hideError) {
          let message = DEFAULT_ERROR_MESSAGE

          if (error instanceof AxiosError) {
            const { data } = error.response || {}
            if (data && typeof data === 'object' && 'message' in data) {
              message = data.message
            }
          }

          useNotificationStore.getState().show({
            title: DEFAULT_ERROR_TITLE,
            message,
            type: 'error',
          })
        }

        throw error
      }

      return response.data
    }

const apiClient = {
  get: request('GET'),
  post: request('POST'),
  patch: request('PATCH'),
  put: request('PUT'),
  delete: request('DELETE'),
}

export { apiClient }
