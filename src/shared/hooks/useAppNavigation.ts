import { useNavigate } from 'react-router-dom';
import { type RoutePath, ROUTES } from '@/app/routes'

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: RoutePath) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  const goToHome = () => {
    navigate(ROUTES.HOME);
  };

  const goToMain = () => {
    navigate(ROUTES.MAIN);
  };

  const goToProfile = () => {
    navigate(ROUTES.PROFILE);
  };

  const goToReferral = () => {
    navigate(ROUTES.REFERRAL);
  };

  const goToInfo = () => {
    navigate(ROUTES.INFO);
  };

  const goToAccounts = () => {
    navigate(ROUTES.ACCOUNTS);
  };

  const goToLang = () => {
    navigate(ROUTES.LANGUAGES);
  }

  const goToSecurity = () => {
    navigate(ROUTES.SECURITY)
  }



  return {
    goTo,
    goToAccounts,
    goToSecurity,
    goToLang,
    goBack,
    goToHome,
    goToMain,
    goToProfile,
    goToReferral,
    goToInfo
  };
};
