import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from './layouts/BaseLayout.tsx'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { HydrateFallback } from './components/HydrateFallback.tsx'
import { RouteHandler } from './components/RouteHandler.tsx'
import { TelegramTest } from '../pages/TelegramTest.tsx'
import { BotControlPage } from "../pages/BotControlPage.tsx"

export const router = createBrowserRouter([
  {
    path: '/', // Корневой путь - прямо TelegramTest
    element: <TelegramTest />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin', // Перенесем административные роуты на другой путь
    element: (
        <RouteHandler>
          <BaseLayout />
        </RouteHandler>
    ),
    errorElement: <ErrorBoundary />,
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      {
        index: true,
        element: <div>Admin Home</div>
      },
      {
        path: 'telegram-test',
        element: <TelegramTest />
      },
      {
        path: 'bot-control',
        element: <BotControlPage />
      }
    ],
  },
])