import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import VideoBanner from "../../components/VideoBanner.js";
import { MemoryRouter } from "react-router-dom";
import RecipeSingle from "../../components/RecipeSingle";

test("should render a recipeSingle component", async () => {
    render(<RecipeSingle/>);
    const ingredient = await screen.findAllByRole("listitem")
    expect(ingredient.length).toBe(6);
})

test("check wether element renders correctly", () => {
    render(<MemoryRouter><VideoBanner/></MemoryRouter>);
    const element = screen.getByText("World of recepies");
    expect(element).toBeInTheDocument();
})

test("check the h1 text content", () => {
    render(<MemoryRouter><VideoBanner/></MemoryRouter>)
    const banner = screen.getByTestId("bannerContainer");
    const videoH1 = banner.querySelector("#welcomeMessage");
    expect(videoH1).toHaveTextContent("World of recepies");
});

