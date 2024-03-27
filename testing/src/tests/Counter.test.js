import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe('Counter component test', () => {

  test('renders with initial count 0', () => {
    render(<Counter/>)
    const countElement = screen.getAllByText(/Contador: 0/)
    expect(countElement.length).toBe(1)
  });


  test("increments count when button clicked", ()=>{
    render(<Counter/>)
    const incrementButton = screen.getByText("Incrementar")
    fireEvent.click(incrementButton);
    const countElement = screen.getAllByText(/Contador: 1/)
    expect(countElement.length).toBe(1)
  })



});
