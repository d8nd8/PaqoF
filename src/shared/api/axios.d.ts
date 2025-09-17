import 'axios'
import { ZodSchema } from 'zod'

declare module 'axios' {
  export interface AxiosRequestConfig {
    model?: ZodSchema
    modelDictionary?: boolean
    flattenDictionary?: boolean
    hideError?: boolean;
    requestSchema?: ZodSchema;
    performAuth?: boolean
  }
}
