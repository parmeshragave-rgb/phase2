import { cleanup, render, screen } from '@testing-library/react'
import Greet from './Greet'
describe('Greet component',() => {

    let name:string;

    beforeEach(() => {
        name='Dhoni'
    })

    afterEach(() => {
        cleanup();
    })
    test("renders correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

test.only("renders with a name prop",() => {
    render(<Greet name={name}/>)
    const textElement=screen.getByText(/hello dhoni/i)
    expect(textElement).toBeInTheDocument()
})
})
