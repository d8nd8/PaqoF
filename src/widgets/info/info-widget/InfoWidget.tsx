import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  InfoWrapper,
  Header,
  Title,
  BackButton,
  SectionTitle,
  InfoList,
  InfoItem,
  InfoText,
  RightIcon,
} from "./InfoWidget.styled";

import ChevronLeft from "@/assets/icons/chevron-left.svg?react";

const documents = [
  { id: "aml", title: "AML" },
  { id: "terms", title: "Условия пользования" },
  { id: "privacy", title: "Политика конфиденциальности" },
];

type Props = {
  onBack?: () => void;
};

export const InfoWidget: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    console.log("Открыть документ:", id);
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <InfoWrapper>
      <Header>
        <BackButton onClick={handleBack}>
          <ChevronLeft />
        </BackButton>
        <Title>Информация</Title>
      </Header>

      <SectionTitle>Документы</SectionTitle>

      <InfoList>
        {documents.map((doc) => (
          <InfoItem key={doc.id} onClick={() => handleClick(doc.id)}>
            <InfoText>{doc.title}</InfoText>
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
