
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter, { counterReducer } from "../Test/TestCounter"

function renderWithStore(ui) {
  const store = createStore(counterReducer);
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("Counter Redux Component", () => {
  test("renders initial count", () => {
    renderWithStore(<Counter />);

    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("increments count", () => {
    renderWithStore(<Counter />);

    fireEvent.click(screen.getByText(/increment/i));

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test("decrements count", () => {
    renderWithStore(<Counter />);

    fireEvent.click(screen.getByText(/increment/i)); 
    fireEvent.click(screen.getByText(/decrement/i)); 

    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
