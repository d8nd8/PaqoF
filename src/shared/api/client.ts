import axios, { HttpStatusCode } from 'axios'
import config from './config'
import { transformKeysToCamelCase, transformKeysToSnakeCase } from '@/shared/utils/transform-keys.utils'

export const createClient = () => {
  console.log('🔧 Creating API client with baseURL:', config.url);
  const instance = axios.create({ baseURL: config.url })

  const clearAuthentication = () => {
    localStorage.removeItem('access-token')
    localStorage.removeItem('authentication-method')
  }

  const getAuthentication = () => ({
    accessToken: localStorage.getItem('access-token'),
    authenticationMethod: localStorage.getItem('authentication-method'),
  })

  instance.interceptors.request.use((config) => {
    console.log('📤 API Request:', config.method?.toUpperCase(), config.url);
    config.performAuth = config.performAuth ?? true

    if (config.performAuth) {
      const { accessToken, authenticationMethod } = getAuthentication()
      if (accessToken && authenticationMethod === 'Bearer') {
        config.headers.Authorization = `Bearer ${accessToken}`
        console.log('🔐 Using authentication token');
      } else {
        console.warn('⚠️ No authentication token found');
      }
    }

    if (config.data && typeof config.data === 'object' && !(config.data instanceof FormData)) {
      config.data = transformKeysToSnakeCase(config.data)
    }

    if (config.params && typeof config.params === 'object') {
      config.params = transformKeysToSnakeCase(config.params)
    }

    return config
  })

  instance.interceptors.response.use(
    async (response) => {
      console.log('✅ API Response:', response.config.method?.toUpperCase(), response.config.url, response.status);
      const { model, modelDictionary, flattenDictionary } = response.config

      if (model) {
        const rawData = 'data' in response.data ? response.data.data : response.data
        const normalizedData = transformKeysToCamelCase(rawData)

        let dataForValidation: unknown = normalizedData

        if (flattenDictionary && !Array.isArray(normalizedData)) {
          dataForValidation = Object.values(normalizedData).flat()
        }

        if (modelDictionary && !flattenDictionary) {
          const result: Record<string, unknown> = {}
          for (const key in normalizedData) {
            if (Object.prototype.hasOwnProperty.call(normalizedData, key)) {
              const value = normalizedData[key as keyof typeof normalizedData]
              result[key] = model.parse(value)
            }
          }
          response.data = result
        } else {
          response.data = model.parse(dataForValidation)
        }
      } else {
        response.data = transformKeysToCamelCase(response.data)
      }

      return response
    },
    async (error) => {
      if (!error.response) {
        console.error('❌ API Request failed (no response):', error.message);
        if (error.code === 'ERR_NETWORK') {
          console.error('🌐 Network error - check if backend is running and URL is correct:', config.url);
        }
        throw error
      }
      console.error('❌ API Error:', error.config?.method?.toUpperCase(), error.config?.url, error.response.status, error.response.data);
      if (error.response.status === HttpStatusCode.Unauthorized) {
        window.dispatchEvent(new Event('unauthorized'))
      }
      throw error
    }
  )

  return { instance }
}
