import { normalizeBackendUrl } from './utils';

export default {
  url: normalizeBackendUrl(import.meta.env.VITE_APP_BACKEND_URL || 'VITE_APP_BACKEND_URL'),
  developmentMode: (import.meta.env.VITE_APP_DEVELOPMENT_MODE || 'VITE_APP_DEVELOPMENT_MODE') === 'true',
};
