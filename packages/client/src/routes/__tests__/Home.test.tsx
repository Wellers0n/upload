import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from "../Home";

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}))

describe("Home", () => {
  it('should render home screen', () => {
    render(<Home />)

    expect(screen.getByTitle("file")).toBeInTheDocument()
  });

  it('should render download test file', () => {
    render(<Home />)

    expect(screen.getByText("Download test file")).toBeInTheDocument()
    expect(screen.getByText("Download test file")).toHaveAttribute("href", "./sales.txt")

  });

  it('should render file selected', async () => {
    render(<Home />)

    const input = screen.getByTitle("file")


    const file = new File(["test"], "test.txt", { type: "text/plain" });


    await waitFor(() => {
      fireEvent.change(input, {
        target: { files: { item: () => file, length: 1, 0: file } },
      });
    })

    expect(screen.getByText("Download test file")).toBeInTheDocument()
    expect(screen.getByText("Download test file")).toHaveAttribute("href", "./sales.txt")
    expect(screen.getByText("File: test.txt")).toBeInTheDocument()

  });
})