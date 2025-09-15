export type RoutePath = '/' | '/main' | '/profile' | '/referral' | '/info' | '/accounts' |'/language' | '/security'

export const ROUTES = {
  HOME: '/' as RoutePath,
  MAIN: '/main' as RoutePath,
  PROFILE: '/profile' as RoutePath,
  REFERRAL: '/referral' as RoutePath,
  INFO: '/info' as RoutePath,
  ACCOUNTS: '/accounts' as RoutePath,
  LANGUAGES: '/language' as RoutePath,
  SECURITY: '/security' as RoutePath,
} as const;
