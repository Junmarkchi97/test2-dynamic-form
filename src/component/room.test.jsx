import { fireEvent, render, screen } from "@testing-library/react";
import Room from "./room";

describe(Room, () => {
  it("room 2 should be disabled on inital render", () => {
    render(<Room />);
    const room2 = document.getElementById("1");
    expect(room2).toHaveAttribute("data-selected", "false");
  });

  it("room 3 should be disabled on inital render", () => {
    render(<Room />);
    const room3 = document.getElementById("2");
    expect(room3).toHaveAttribute("data-selected", "false");
  });

  it("room 4 should be disabled on inital render", () => {
    render(<Room />);
    const room4 = document.getElementById("3");
    expect(room4).toHaveAttribute("data-selected", "false");
  });
});
