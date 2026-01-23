import { normalizeBackendUrl } from './utils';

const backendUrl = import.meta.env.VITE_API_URL;

if (!backendUrl || backendUrl === 'VITE_API_URL') {
  console.warn('⚠️ VITE_API_URL is not set! API requests may fail.');
  console.warn('Please set VITE_API_URL in your .env file');
  console.warn('Example: VITE_API_URL=https://api.dev.paqo.ru');
}

export default {
  url: normalizeBackendUrl(backendUrl || ''),
  developmentMode: (import.meta.env.VITE_APP_DEVELOPMENT_MODE || 'VITE_APP_DEVELOPMENT_MODE') === 'true',
};
