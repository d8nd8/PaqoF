import AccountsPage from '@/pages/AccountsPage';
import BonusPage from '@/pages/BonusPage';
import CurrencyPage from '@/pages/CurrencyPage';
import HistoryPage from '@/pages/HistoryPage';
import InfoPage from '@/pages/InfoPage';
import LanguagePage from '@/pages/LanguagePage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ReferralProgramPage } from '@/pages/ReferralProgramPage';
import { WelcomePage } from '@/pages/WelcomePage';
import { createBrowserRouter } from 'react-router-dom'



import { ErrorBoundary } from './components/ErrorBoundary';
import SecurityPage from '@/pages/SecurityPage'
import KycPage from '@/pages/KycPage'
import FaqPage from '@/pages/FaqPage'





export const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
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
  },
  {
    path: '/bonus',
    element: <BonusPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/info',
    element: <InfoPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/accounts',
    element: <AccountsPage />,
    errorElement: <ErrorBoundary />
  },
  {
    path: "/language",
    element: <LanguagePage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/security",
    element: <SecurityPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/kyc",
    element: <KycPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
    errorElement: <ErrorBoundary />,
  }
]);