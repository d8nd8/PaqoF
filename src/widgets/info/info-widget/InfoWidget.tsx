import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  InfoWrapper,
  SectionTitle,
  InfoList,
  InfoItem,
  InfoText,
  RightIcon,
} from "./InfoWidget.styled";

import { PageHeader } from "@/shared/components/PageHeader/PageHeader";

const documents = [
  { id: "aml", token: "info.documents.aml" },
  { id: "terms", token: "info.documents.terms" },
  { id: "privacy", token: "info.documents.privacy" },
];

type Props = {
  onBack?: () => void;
};

export const InfoWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (id: string) => {
    console.log("Открыть документ:", id);
  };

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  return (
    <InfoWrapper>
      <PageHeader title={t("info.title")} onBack={handleBack} />

      <SectionTitle>{t("info.sectionTitle")}</SectionTitle>

      <InfoList>
        {documents.map((doc) => (
          <InfoItem key={doc.id} onClick={() => handleClick(doc.id)}>
            <InfoText>{t(doc.token)}</InfoText>
            <RightIcon>
              <ChevronRight size={18} strokeWidth={1.5} />
            </RightIcon>
          </InfoItem>
        ))}
      </InfoList>
    </InfoWrapper>
  );
};

export default InfoWidget;
