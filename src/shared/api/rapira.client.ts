import axios from 'axios';
import type { ZodSchema } from 'zod';

const instance = axios.create({
  baseURL: 'https://api.rapira.net',
  timeout: 10000,
});


const request =
  (method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE') =>
    async <T>(url: string, schema?: ZodSchema<T>) => {
      const response = await instance.request({ method, url });
      if (schema) {
        return schema.parse(response.data) as T;
      }
      return response.data as T;
    };

export const rapiraClient = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  patch: request('PATCH'),
  delete: request('DELETE'),
};
