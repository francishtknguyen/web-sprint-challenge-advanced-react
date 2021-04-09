import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
import { createPublicKey } from "crypto";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const first = screen.getByLabelText(/first name:/i)
    userEvent.type(first, "Francis")
    const last = screen.getByLabelText(/last name:/i)
    userEvent.type(last, "Nguyen")
    const address = screen.getByLabelText(/address:/i)
    userEvent.type(address, "713 nowhere")
    const city = screen.getByLabelText(/city:/i)
    userEvent.type(city, "H-Town")
    const state = screen.getByLabelText(/state:/i)
    userEvent.type(state, "Texas")
    const zip = screen.getByLabelText(/zip:/i)
    userEvent.type(zip, "1234")
    const button = screen.getByRole("button")
    userEvent.click(button);


    const success = screen.queryByTestId("successMessage")
    expect(success).toBeInTheDocument();

});
