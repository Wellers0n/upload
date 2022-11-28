import { render, screen } from '@testing-library/react';
import Home from "../Home";


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}))


describe("Home", () => {
  it('should render home screen', () => {
    render(<Home />)

    expect(screen.getByTitle("file")).toBeInTheDocument()
  });
})