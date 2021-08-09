import React from "react";
import { screen, render, fireEvent } from "../../../tests/test-utils";
import "@testing-library/jest-dom";
import { history } from "../../components/History";
import Register from "./index";
import Urls from "../../utils/urls.js";

describe("RegisterForm", () => {
    it("should render the basic fields", () => {
        render(<Register />);
        expect(
            screen.getByRole("heading", { name: "Sign up" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Enter your first name/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Enter your last name/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Enter your email address/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Enter password/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("textbox", { name: /Enter confirm password/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /Signup Button/i })
        ).toBeInTheDocument();
    });
});

describe("Signup Input Change", () => {
    it("should check input changes", () => {
        const { getByTestId } = render(<Register />);

        const firstNameInput = getByTestId("firstName");

        fireEvent.change(firstNameInput, { target: { value: "John" } });

        expect(firstNameInput.value).toBe("John");
    });
});

describe("Signup form submit", () => {
    beforeEach(() => {
        history.push(Urls.Register);
    });
    it("should submit form successfully", () => {
        const historyMock = { push: jest.fn() };
        const { getByTestId } = render(<Register history={historyMock} />);

        const firstNameInput = getByTestId("firstName");
        fireEvent.change(firstNameInput, { target: { value: "John" } });

        const lastNameInput = getByTestId("lastName");
        fireEvent.change(lastNameInput, { target: { value: "Doe" } });

        const emailInput = getByTestId("email");
        fireEvent.change(emailInput, { target: { value: "abc@example.com" } });

        const pwdInput = getByTestId("password");
        fireEvent.change(pwdInput, { target: { value: "Abcd@1234" } });

        const cnfPwdInput = getByTestId("confirmPassword");
        fireEvent.change(cnfPwdInput, { target: { value: "Abcd@1234" } });

        const signupBtn = getByTestId("btn-signup");

        fireEvent.click(signupBtn);
        expect(history.location.pathname).toBe(Urls.Home);
    });

    it("should fail submit form", () => {
        const historyMock = { push: jest.fn() };
        const { getByTestId } = render(<Register history={historyMock} />);

        const signupBtn = getByTestId("btn-signup");

        fireEvent.click(signupBtn);
        expect(screen.getAllByTestId("error-msg").length).toBe(5);
        expect(history.location.pathname).toBe(Urls.Register);
    });
});
