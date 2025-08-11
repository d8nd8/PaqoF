import { createBrowserRouter } from 'react-router-dom';

import { BaseLayout } from './layouts/BaseLayout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HydrateFallback } from './components/HydrateFallback';
import { RouteHandler } from './components/RouteHandler';
import { WelcomeScreen } from '@/pages/WelcomeScreen'
import { TelegramTest } from '@/pages/TelegramTest'
import { BotControlPage } from '@/pages/BotControlPage'


export const router = createBrowserRouter([
  {
    path: '/', // ✅ теперь это WelcomeScreen
    element: <WelcomeScreen />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin',
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
]);
