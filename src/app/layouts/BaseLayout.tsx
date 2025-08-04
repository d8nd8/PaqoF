import { Outlet, ScrollRestoration } from 'react-router-dom'

export const BaseLayout = () => {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto px-12">
      <div className="min-h-screen">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <ScrollRestoration />
    </div>
  )
}
