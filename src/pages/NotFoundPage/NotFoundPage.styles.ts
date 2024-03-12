import styled from "styled-components";
import { colorBlue, colorWhite } from "../../config/constants";

export const Container = styled.div`
  height: 100%;
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    background: ${colorBlue};
    color: ${colorWhite};
    border: none;
    font-weight: 700;
    bottom: 50px;
    left: 10.8%;
  }
`;
