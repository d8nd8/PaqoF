import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WelcomeScreen } from '@/pages/WelcomeScreen';
import { MainPage } from '@/pages/MainPage';

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
  }
]);
