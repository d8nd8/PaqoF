import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WelcomeScreen } from '@/pages/WelcomeScreen';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ReferralProgramPage } from '@/pages/ReferralProgramPage';
import HistoryPage from '@/pages/HistoryPage'
import CurrencyPage from '@/pages/CurrencyPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/main',
    element: <MainPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/referral',
    element: <ReferralProgramPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/history',
    element: <HistoryPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/currency',
    element: <CurrencyPage />,
    errorElement: <ErrorBoundary />
  }
]);