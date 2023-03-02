import { render, screen, cleanup, waitFor, getByTestId } from "@testing-library/react";
import '@testing-library/jest-dom'
import RecipeEntry from "./components/RecipeEntry";
import VideoBanner from "./components/VideoBanner";
import { MemoryRouter } from "react-router-dom";
import RecipeList from "./components/RecipeList";

test("should render a card" , async () => {    
    render(<MemoryRouter><RecipeList/></MemoryRouter>)
    const entryElement = await screen.findByTestId("recipeEntry1");
    expect(entryElement).toBeInTheDocument();
})

// test("check if the contents are not null", () => {
//     const entryElement = screen.getByTestId("recipeEntry1");
//     expect(entryElement.getAttribute("name")).not.toEqual(null);
//     expect(entryElement.getAttribute("name")).not.toBeUndefined();
// })

test("check the h1 text content", () => {
    render(<MemoryRouter><VideoBanner/></MemoryRouter>)
    const banner = screen.getByTestId("bannerContainer");
    const videoH1 = banner.querySelector("#welcomeMessage");
    expect(videoH1).toHaveTextContent("World of recepies");
});