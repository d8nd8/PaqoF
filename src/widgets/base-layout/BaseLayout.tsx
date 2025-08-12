import { useEffect, useMemo } from "react";
import { Navbar } from "@/features/navbar";
import useApplicationStore from "@/shared/stores/application";
import { useTransition } from "@react-spring/web";
import { backButton, viewport } from '@telegram-apps/sdk-react'
import { useLocation, useNavigate } from 'react-router-dom'



import { WrapperPage } from "./BaseLayout.styled";
import { type IBaseLayoutProps, NavbarItems } from './BaseLayout.types'


const BaseLayout = ({
                      children,
                      className,
                      shortBottomPadding = false,
                      headerOffset = true,
                      disableBackButton = false,
                      showNavbar = true,
                      centered = false,
                    }: IBaseLayoutProps) => {
  const location = useLocation();
  const { modal, setHeaderOffset, setFullscreenCentered } =
    useApplicationStore();
  const navigate = useNavigate();
  const isModalOpened = useMemo(() => modal !== null, [modal]);
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 280, friction: 60 },
    key: location.pathname,
    immediate: false,
    trail: 0,
    reset: false,
  });

  const handleItemClick = (itemId: string) => {
    switch (itemId) {
      case "home":
        navigate("/");
        break;
      case "wallet":
        navigate("/wallet");
        break;
      case "settings":
        navigate("/settings");
        break;
      default:
        console.warn(`Неизвестный пункт меню: ${itemId}`);
    }
  };


  useEffect(() => {
    setHeaderOffset(headerOffset);
  }, [headerOffset, setHeaderOffset]);

  useEffect(() => {
    setFullscreenCentered(centered);
  }, [centered, setFullscreenCentered]);

  if (disableBackButton && viewport.mount.isAvailable()) {
    if (!backButton.isMounted()) {
      backButton.mount();
    }
    backButton.hide();
  }

  return (
    <>
      {transitions((style) => (
        <WrapperPage
          style={style}
          shortBottomPadding={shortBottomPadding}
          className={`wrapper-page ${className || ""}`.trim()}
        >
          {children}
        </WrapperPage>
      ))}
      {showNavbar && !isModalOpened && <Navbar items={NavbarItems}
                                               onItemClick={handleItemClick} />}

    </>
  )
};

export default BaseLayout;
