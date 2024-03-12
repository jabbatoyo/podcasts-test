import styled from "styled-components";
import { colorBlue, colorGray, colorWhite } from "../../config/constants";

export const Container = styled.div`
  .search-container {
    margin-bottom: 30px;
    display: flex;
    justify-content: end;
    .search-content {
      width: 280px;
      display: flex;
      align-items: center;
      span {
        display: block;
        padding: 2px;
        background: ${colorBlue};
        color: ${colorWhite};
        border-radius: 5px;
        font-size: 12px;
        font-weight: 700;
        width: 30px;
        height: 14px;
        text-align: center;
        margin-right: 5px;
      }
    }
    input {
      padding: 4px;
      width: calc(100% - 34px);
      border-radius: 5px;
      border: solid 1px ${colorGray};
    }
  }
`;
