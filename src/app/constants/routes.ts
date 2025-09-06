export type Routes = 'home' | 'profile'

export type IRoute = {
  /** Translation key for the route title (document title) */
  titleKey: string
  /** URL for the route */
  url: () => string
}

export const routes: Record<Routes, IRoute> = {
  home: {
    titleKey: 'Home',
    url: () => '/',
  },
  profile: {
    titleKey: 'Profile',
    url: () => '/profile',
  },
}
