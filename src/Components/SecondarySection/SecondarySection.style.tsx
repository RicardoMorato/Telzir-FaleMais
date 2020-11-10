import styled from "styled-components";

interface ReverseText {
  reverse: boolean;
}

export const SectionContainer = styled.section<ReverseText>`
  margin-top: 10%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 0 90px;
  img {
    width: 250px;
    margin-right: ${(props) => (props.reverse ? "50px" : "0px")};
  }

  @media only screen and (max-width: 1360px) {
    img {
      width: 200px;
    }
  }
`;

export const SectionHeader = styled.h1<ReverseText>`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 45px;
  align-self: ${(props) => (props.reverse ? "flex-end" : "flex-start")};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90%;
`;

export const TextContainer = styled.div<ReverseText>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    max-width: 1200px;
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 1600px) {
    p {
      max-width: 1000px;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 1440px) {
    p {
      max-width: 900px;
    }
  }

  @media only screen and (max-width: 1360px) {
    p {
      max-width: 800px;
      font-size: 0.9rem;
    }
  }
`;
