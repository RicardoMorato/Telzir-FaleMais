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

  @media only screen and (max-width: 1024px) {
    margin-top: 200px;
  }
`;

export const SectionHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 45px;
`;

export const CalculatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90%;

  @media only screen and (max-width: 1024px) {
    height: 600px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
