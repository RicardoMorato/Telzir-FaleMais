import styled from "styled-components";

import { Colors } from "../../global/styles";

export const FooterContainer = styled.section`
  height: 80%;
  width: 100%;
  background-color: ${Colors.redBackground.color};
  opacity: ${Colors.redBackground.opacity};
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${Colors.white.color};
    font-weight: 300;
  }

  h2 {
    color: ${Colors.white.color};
    font-size: 1.2rem;
  }
`;

export const MainInformationContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
`;

export const CompanyInfo = styled.div`
  p {
    margin-top: 45px;
    cursor: pointer;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 150px;
  display: flex;
  flex-wrap: wrap;

  img {
    margin: 10px;
    cursor: pointer;
  }
`;

export const MiscInfoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 75px;

  p {
    max-width: 420px;
  }
`;

export const PrivacyPoliticsContainer = styled.div`
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

export const LastInfo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
`;
