import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-top: 10%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 0 90px;

  img {
    width: 300px;
  }
`;

export const SectionHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 45px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    max-width: 1200px;
    font-size: 1.1rem;
  }
`;
