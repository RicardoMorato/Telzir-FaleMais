import styled from "styled-components";

import { Colors } from "../../global/styles";

export const TableContainer = styled.div`
  max-width: 900px;
  background-color: ${Colors.redBackground.color};
  opacity: ${Colors.redBackground.opacity};
  padding: 25px 15px;
  border-radius: 10px;

  .ant-table-thead > tr > th {
    font-weight: 600;
  }
`;
