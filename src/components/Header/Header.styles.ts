import styled from "styled-components";
//constant
import { colorBlue, colorLowGray } from "../../config/constants";

export const Container = styled.div`
  padding: 0px 20px;
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    border-bottom: solid 2px ${colorLowGray};
    .title-logo {
      text-decoration: none;
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      color: ${colorBlue};
    }
    .loading-content {
      width: 40px;
    }
  }
`;
