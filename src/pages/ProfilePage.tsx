import React from "react";
import { BaseLayout } from "@/widgets/base-layout";
import { ProfileWidget } from "@/widgets/profile/profile-widget/ProfileWidget";
import { useAppNavigation } from '@/shared/hooks/useAppNavigation'


export const ProfilePage: React.FC = () => {
  const { goToReferral } = useAppNavigation();

  return (
    <BaseLayout showNavbar>
      <ProfileWidget
        username="@twixmaster"
        avatarSrc="src/assets/images/profile/user-picture.png"
        onReferralClick={goToReferral}
      />
    </BaseLayout>
  );
};

export default ProfilePage;
