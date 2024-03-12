import styled from "styled-components";
import { colorLowGray } from "../../config/constants";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
  @media (max-width: 1100px) {
    grid-template-columns: 30% 70%;
  }
  @media (max-width: 650px) {
    grid-template-columns: 100%;
  }
`;

export const DetailCardPodcastContainer = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${colorLowGray};
  border-radius: 5px;
  box-shadow: rgba(0.5, 0.25, 0.25, 0.25) 1px 2px 3px 0px;
  .img-content {
    width: 200px;
    height: 200px;
    text-decoration: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .title-content {
    width: 100%;
    border-bottom: solid 1px ${colorLowGray};
    border-top: solid 1px ${colorLowGray};
    padding: 20px 0px;
    margin: 20px 0px;
    h3 {
      margin: 0;
      font-size: 18px;
    }
    p {
      margin: 10px 0px 0px 0px;
      font-size: 15px;
    }
  }
  .description-content {
    p {
      margin: 0;
      font-size: 15px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 20; /* number of lines to show */
      line-clamp: 20;
      -webkit-box-orient: vertical;
    }
  }
  @media (max-width: 900px) {
    .img-content {
      width: 100%;
      height: 130px;
      img {
        object-fit: scale-down;
      }
    }
  }
  @media (max-width: 650px) {
    margin-bottom: 20px;
  }
`;

export const DetailTableEpisodesContainer = styled.div`
  margin-left: 40px;
  width: calc(100% - 80px);
  height: max-content;
  .episode-number-content {
    padding: 20px;
    margin-bottom: 20px;
    border: solid 1px ${colorLowGray};
    border-radius: 5px;
    box-shadow: rgba(0.5, 0.25, 0.25, 0.25) 1px 2px 3px 0px;
    h2 {
      font-size: 25px;
      margin: 0;
    }
  }
  .episode-table-content {
    width: calc(100% - 40px);
    overflow: scroll;
    padding: 20px;
    border: solid 1px ${colorLowGray};
    border-radius: 5px;
    box-shadow: rgba(0.5, 0.25, 0.25, 0.25) 1px 2px 3px 0px;
    table {
      border-collapse: collapse;
      width: 100%;
      tr {
        text-align: start;
        border-bottom: 1px solid #dddddd;
        &:nth-child(even) {
          background-color: #dddddd;
        }
        td,
        th {
          text-align: left;
          border: none;
          padding: 15px 5px;
        }
      }
    }
  }
  @media (max-width: 1100px) {
    margin-left: 20px;
    width: calc(100% - 20px);
  }
  @media (max-width: 650px) {
    width: 100%;
    margin: 0;
  }
`;

export const DetailCardEpisodeContainer = styled.div`
  margin-left: 40px;
  width: calc(100% - 80px);
  height: max-content;
  padding: 20px;
  margin-bottom: 20px;
  border: solid 1px ${colorLowGray};
  border-radius: 5px;
  box-shadow: rgba(0.5, 0.25, 0.25, 0.25) 1px 2px 3px 0px;
  h3 {
    margin: 0;
    font-size: 18px;
  }
  p {
    margin: 20px 0px;
    font-size: 15px;
  }
  .audio-content {
    border-top: solid 1px ${colorLowGray};
    padding: 20px 0px;
    audio {
      width: 100%;
      height: 30px;
    }
  }
  @media (max-width: 1100px) {
    margin-left: 20px;
    width: calc(100% - 60px);
  }
  @media (max-width: 650px) {
    width: calc(100% - 40px);
    margin: 0;
  }
`;
