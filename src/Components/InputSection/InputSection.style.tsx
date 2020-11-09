import styled from "styled-components";

import { Colors } from "../../global/styles";

export const InputsWrapper = styled.div`
  background-color: ${Colors.redBackground.color};
  opacity: ${Colors.redBackground.opacity};
  width: 450px;
  height: 250px;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .ant-select-selector,
  .ant-input-number {
    border-radius: 5px !important;
  }
`;

export const LocationTimeInputsContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const AppButton = styled.button`
  height: 30px;
  width: 130px;
  background-color: white;
  border-color: "#4E4E4E";
  border-width: 0.5px;
  border-radius: 10px;
  margin-left: 20px;
  transition: 0.3s all ease;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.buttonHover.color};
  }

  p {
    margin: 0;
    font-weight: 600;
    color: black;
  }
`;
