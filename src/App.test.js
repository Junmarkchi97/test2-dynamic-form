import { render } from "@testing-library/react";
import App from "./App";

test("Check if Room component is rendered in the App component", () => {
  const { getByText } = render(<App />);
  expect(getByText("Room 1")).toBeInTheDocument();
});
