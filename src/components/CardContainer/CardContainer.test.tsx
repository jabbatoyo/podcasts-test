import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//component
import CardContainer from "./index";

describe("CardContainer test", () => {
  const podcasts = [
    {
      id: 1,
      author: "author 1",
      title: "title podcast 1",
      description: " test descripcion podcast",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/170x170bb.png",
    },
    {
      id: 2,
      author: "author 2",
      title: "title podcast 2",
      description: " test descripcion podcast",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/170x170bb.png",
    },
    {
      id: 3,
      author: "author 3",
      title: "title podcast 3",
      description: " test descripcion podcast",
      img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/170x170bb.png",
    },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <CardContainer podcasts={podcasts} />
      </BrowserRouter>
    );
  });

  test("Render component card container", () => {
    expect(screen.getByTestId("card-container")).toBeTruthy();
  });

  test("Render component card container render all element 3 card", () => {
    expect(screen.getAllByTestId("card-podcast-content")).toHaveLength(3);
  });
});
