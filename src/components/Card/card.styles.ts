import styled from "styled-components";
import { Link } from "react-router-dom";
//constant
import { colorBlack, colorGray, colorLowGray } from "../../config/constants";

export const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 200px;
  .img-container {
    position: relative;
    width: 100%;
    height: calc(100% - 140px);
    img {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 100%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 60px;
    padding: 70px 20px 10px 20px;
    border: solid 1px ${colorLowGray};
    border-radius: 5px;
    box-shadow: rgba(0.5, 0.25, 0.25, 0.25) 1px 2px 3px 0px;
    h2 {
      font-size: 14px;
      text-align: center;
      color: ${colorBlack};
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      font-size: 12px;
      text-align: center;
      color: ${colorGray};
      margin: 10px 0px 0px 0px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;
