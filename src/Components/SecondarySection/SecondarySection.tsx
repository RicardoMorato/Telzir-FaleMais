import React from "react";

import {
  SectionContainer,
  InfoContainer,
  TextContainer,
  SectionHeader,
} from "./SecondarySection.style";

export default function SecondarySection({
  imgSrc,
  headerText,
  firstText,
  secondText,
  reverse,
}: {
  imgSrc: string;
  headerText: string;
  firstText: any;
  secondText: any;
  reverse: boolean;
}) {
  return (
    <SectionContainer>
      <SectionHeader reverse={reverse}>{headerText}</SectionHeader>
      {reverse ? (
        <InfoContainer>
          <TextContainer reverse={reverse}>
            <p>{firstText}</p>
            <p>{secondText}</p>
          </TextContainer>
          <img src={imgSrc} alt="Logo da empresa" />
        </InfoContainer>
      ) : (
        <InfoContainer>
          <img src={imgSrc} alt="Logo da empresa" />

          <TextContainer reverse={reverse}>
            <p>{firstText}</p>
            <p>{secondText}</p>
          </TextContainer>
        </InfoContainer>
      )}
    </SectionContainer>
  );
}
