import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//component
import Card from "./index";

describe("Card test container", () => {
  const podcast = {
    id: 1,
    img: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/23/af/d5/23afd583-d4a1-a5a5-024f-9a8556aa4aa1/mza_10050319290971063684.jpg/170x170bb.png",
    title: "test title",
    author: "author testing podcast",
  };
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Card podcast={podcast} />
      </BrowserRouter>
    );
  });

  test("Render component card", () => {
    const card = screen.getByTestId("card-podcast-content");
    expect(card).toBeTruthy();
  });

  test("Card contain correct podcast title (test title)", () => {
    expect(screen.getByText("test title")).toBe;
  });

  test("Card contain correct podcast author (author testing podcast)", () => {
    expect(screen.getByText("Author: author testing podcast")).toBe;
  });
});
