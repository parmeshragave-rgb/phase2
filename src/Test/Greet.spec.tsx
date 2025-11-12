
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import Greet from './Greet'
describe('Greet component in .spec',() => {

    let name:string;

    beforeEach(() => {
        name='Dhoni'
    })

    afterEach(() => {
        cleanup();
    })
    it("renders correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

it("renders with a name prop",() => {
    render(<Greet name={name}/>)
    const textElement=screen.getByText(/hello dhoni/i)
    expect(textElement).toBeInTheDocument()
})
})
