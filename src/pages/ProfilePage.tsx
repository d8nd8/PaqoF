import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import { ProfileWidget } from "@/widgets/profile/profile-widget/ProfileWidget";
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'


export const ProfilePage: React.FC = () => {
  const { goToReferral, goToInfo, goToAccounts, goToLang,goToSecurity, goToKyc, goToFaq } = useAppNavigation();

  return (
    <BaseLayout showNavbar>
      <ProfileWidget
        username="@twixmaster"
        //avatarSrc="src/assets/images/profile/user-picture.png"
        onReferralClick={goToReferral}
        onInfoClick={goToInfo}
        onOfficialClick={goToAccounts}
        onLanguageClick={goToLang}
        onSecurityClick={goToSecurity}
        onKycClick={goToKyc}
        onFaqClick={goToFaq}
      />
    </BaseLayout>
  );
};

export default ProfilePage;
