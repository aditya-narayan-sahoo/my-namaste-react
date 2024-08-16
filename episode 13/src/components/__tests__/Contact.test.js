import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact component", () => {
  it("renders the contact form", () => {
    render(<Contact />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Message:")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Message" })
    ).toBeInTheDocument();
  });

  it("updates form data on input change", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");

    fireEvent.change(nameInput, { target: { value: "Your Name" } });
    fireEvent.change(emailInput, { target: { value: "name@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, world!" } });

    expect(nameInput.value).toBe("Your Name");
    expect(emailInput.value).toBe("name@example.com");
    expect(messageInput.value).toBe("Hello, world!");
  });

  it("submits the form and displays a success message", () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText("Name:");
    const emailInput = screen.getByLabelText("Email:");
    const messageInput = screen.getByLabelText("Message:");
    const submitButton = screen.getByRole("button", { name: "Send Message" });
    fireEvent.change(nameInput, { target: { value: "Your Name" } });
    fireEvent.change(emailInput, { target: { value: "name@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, world!" } });
    fireEvent.click(submitButton);

    expect(
      screen.getByText(
        "Thank you for your message! We will get back to you soon."
      )
    ).toBeInTheDocument();
  });
});
