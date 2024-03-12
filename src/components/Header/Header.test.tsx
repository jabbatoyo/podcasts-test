import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

//component
import Header from "./index";

describe("Header test container", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header state="loading" />
      </BrowserRouter>
    );
  });

  test("Render component header container", async () => {
    expect(screen.getByTestId("header-container")).toBeTruthy();
  });

  test("Show component loading if state = loading", async () => {
    expect(screen.getByTestId("loading-content")).toBeTruthy();
  });
});

describe("Header test container", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header state="" />
      </BrowserRouter>
    );
  });

  test("Hidden component loading if state diferent to loading", async () => {
    expect(screen.queryByTestId("loading-content")).toBeNull();
  });
});
