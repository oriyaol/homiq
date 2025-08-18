// src/components/_tests_/Header.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

test("renders app name and nav links", () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

    expect(screen.getByText(/Homiq/i)).toBeInTheDocument();

    // היה "Home" – מחליפים ל-"Dashboard"
    expect(screen.getByRole('link', { name: /Dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Devices/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Settings/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Updates/i })).toBeInTheDocument();
});
