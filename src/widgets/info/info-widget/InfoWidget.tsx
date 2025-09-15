import React from "react";
import { ChevronRight } from "lucide-react";

import {
  InfoWrapper,
  Header,
  Title,
  SectionTitle,
  InfoList,
  InfoItem,
  InfoText,
  RightIcon,
} from "./InfoWidget.styled";

const documents = [
  { id: "aml", title: "AML" },
  { id: "terms", title: "Условия пользования" },
  { id: "privacy", title: "Политика конфиденциальности" },
];

export const InfoWidget: React.FC = () => {
  const handleClick = (id: string) => {
    console.log("Открыть документ:", id);
  };

  return (
    <InfoWrapper>
      <Header>
        <Title>Информация</Title>
      </Header>

      <SectionTitle>Документы</SectionTitle>

      <InfoList>
        {documents.map((doc) => (
          <InfoItem
            key={doc.id}
            onClick={() => handleClick(doc.id)}
          >
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
