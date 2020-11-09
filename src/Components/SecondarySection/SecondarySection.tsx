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
      <SectionHeader>{headerText}</SectionHeader>
      {reverse ? (
        <InfoContainer>
          <img src={imgSrc} alt="Logo da empresa" />

          <TextContainer>
            <p>{firstText}</p>
            <p>{secondText}</p>
          </TextContainer>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <TextContainer>
            <p>{firstText}</p>
            <p>{secondText}</p>
          </TextContainer>
          <img src={imgSrc} alt="Logo da empresa" />
        </InfoContainer>
      )}
    </SectionContainer>
  );
}
