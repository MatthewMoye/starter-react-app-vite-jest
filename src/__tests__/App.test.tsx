import { render, screen } from "./__util__/test-util";
import App from "App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const appContainer = screen.getByTestId("app-container");
    expect(appContainer).toBeDefined();
  });
});
