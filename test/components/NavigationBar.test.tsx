import React from "react";
import { render, screen } from "../testUtils";
import "@testing-library/jest-dom/extend-expect";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";

// Just testing how to test (which style fits)
describe("NavigationBar", () => {
  const { asFragment } = render(<NavigationBar />, {});
  it("matches the snapshot", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});

test("should show the title and the subtitle", () => {
  render(<NavigationBar />);
  const title = "APOD";
  const subTitle = "(astronomy picture of the day)";

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(subTitle)).toBeInTheDocument();
});
