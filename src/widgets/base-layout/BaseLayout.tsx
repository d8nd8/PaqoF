import { useEffect, useMemo, useState } from "react";
import { Navbar, type NavbarItemConfig } from "@/features/navbar";
import useApplicationStore from "@/shared/stores/application";
import { useTransition } from "@react-spring/web";
import { backButton, viewport } from "@telegram-apps/sdk-react";
import { useLocation, useNavigate } from "react-router-dom";
import { WrapperPage } from "./BaseLayout.styled";
import { type IBaseLayoutProps, NavbarItems, type NavbarItemState } from "./BaseLayout.types";
import { useSafeAreaInsets } from "@/shared/hooks/useSafeAreaInsets";
import QRScanner from "@/features/qr-scanner/QRScanner";
import { useTranslation } from "react-i18next";

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
  const { modal, setHeaderOffset, setFullscreenCentered } = useApplicationStore();
  const navigate = useNavigate();
  const { top, bottom } = useSafeAreaInsets();
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const { t } = useTranslation();

  const isModalOpened = useMemo(() => modal !== null, [modal]);

  const navbarItemsWithActive = useMemo<NavbarItemConfig[]>(() => {
    return NavbarItems.map((item) => {
      let state: NavbarItemState = "default";

      if (item.id === "home" && location.pathname === "/main") state = "active";
      if (item.id === "history" && location.pathname.startsWith("/history")) state = "active";
      if (item.id === "bonus" && location.pathname.startsWith("/bonus")) state = "active";
      if (item.id === "profile" && location.pathname.startsWith("/profile")) state = "active";

      return {
        ...item,
        label: item.label ? t(item.label) : "",
        state,
      };
    });
  }, [location.pathname, t]);

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

  const handleItemClick = (itemId: string): void => {
    switch (itemId) {
      case "home":
        navigate("/main");
        break;
      case "history":
        navigate("/history");
        break;
      case "qr":
        setIsScannerOpen(true);
        break;
      case "bonus":
        navigate("/bonus");
        break;
      case "profile":
        navigate("/profile");
        break;
      default:
        console.warn(t("common.unknownNavItem", { id: itemId }));
    }
  };

  const handleCloseScanner = (): void => {
    setIsScannerOpen(false);
  };

  const handlePay = (qrValue: string): void => {
    console.log("QR-code for payment:", qrValue);
    setIsScannerOpen(false);
  };

  useEffect(() => {
    setHeaderOffset(headerOffset);
  }, [headerOffset, setHeaderOffset]);

  useEffect(() => {
    setFullscreenCentered(centered);
  }, [centered, setFullscreenCentered]);

  useEffect(() => {
    if (disableBackButton && viewport.mount.isAvailable()) {
      if (!backButton.isMounted()) {
        backButton.mount();
      }
      backButton.hide();
    }
  }, [disableBackButton]);

  const navbarHeight = showNavbar ? 81 : 0;
  const bottomPadding = shortBottomPadding ? bottom : bottom + navbarHeight;

  return (
    <>
      {transitions((style) => (
        <WrapperPage
          style={style}
          shortBottomPadding={shortBottomPadding}
          styleExtra={{
            paddingTop: `${top}px`,
            paddingBottom: `${bottomPadding}px`,
          }}
          className={`wrapper-page ${className || ""}`.trim()}
        >
          {children}
        </WrapperPage>
      ))}

      {showNavbar && !isModalOpened && !isScannerOpen && (
        <Navbar items={navbarItemsWithActive} onItemClick={handleItemClick} />
      )}

      <QRScanner
        isVisible={isScannerOpen}
        onScan={handlePay}
        onClose={handleCloseScanner}
      />
    </>
  );
};

export default BaseLayout;
