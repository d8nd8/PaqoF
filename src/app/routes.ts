export type RoutePath = '/' | '/main' | '/profile' | '/referral';

export const ROUTES = {
  HOME: '/' as RoutePath,
  MAIN: '/main' as RoutePath,
  PROFILE: '/profile' as RoutePath,
  REFERRAL: '/referral' as RoutePath,
} as const;
