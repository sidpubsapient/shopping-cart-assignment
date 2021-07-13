import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text from "../../components/Text";

import { signinFormValidation } from "../../utils/formValidation";

import "./style.scss";

const SigninForm = () => {
    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        errors: {},
    });

    const validateEmail = (field) => {
        let emailError = {...loginData.errors[field]};
        const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(loginData[field]).toLowerCase())) {
            emailError = "Please enter a valid email";
        } else {
            emailError = null;
        }
        setLoginData((prevState) => ({
            ...prevState,
            errors : {...prevState.errors, email: emailError},
        }));
    };
    
    const inputFields = [{
        ariaLabel:"Enter your email address",
        htmlFor:"emailInput",
        label:"Email",
        name:"email",
        role:"textbox",
        tabIndex:"0",
        type:"email",
        onBlur: () => validateEmail("email")
    },{
        ariaLabel:"Enter your password",
        htmlFor:"passwordInput",
        label:"Password",
        name:"password",
        role:"textbox",
        tabIndex:"0",
        type:"password",
    }]
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const formValidate = () => {
        const { errors, isFormValid } = signinFormValidation(loginData);
        setLoginData((prevState) => ({
            ...prevState,
            errors: errors,
        }));
        return isFormValid;
    };
      
    const submitHandler = (e) => {
        e.preventDefault();
        if (formValidate()) {
            localStorage.setItem("isLoggedIn", true);
            history.push("/");
        }
    };
    return (
        <section className="login-section">
            <div className="login-section__left">
                <Text className="login-section__left__title">Login</Text>
                <Text className="login-section__left__description">
          Get access to your Orders, Wishlist and Recommendations
                </Text>
            </div>
            <div className="login-section__right">
                <form
                    aria-label="This is the login form for users to log into sabka bazaar"
                    className="login-section__right__form"
                    onSubmit={submitHandler}
                >
                    {inputFields.map(field => <Input
                        key= {field.name}
                        ariaLabel={field.ariaLabel}
                        error={loginData.errors[field.name]}
                        htmlFor={field.htmlFor}
                        label={field.label}
                        name={field.name}
                        onChange={changeHandler}
                        onBlur={field.onBlur}
                        role={field.role}
                        tabIndex="0"
                        type={field.type}
                        value={loginData[field.name]}
                    />)}
                    <Button
                        ariaLabel="Login Button"
                        role="button"
                        tabIndex="0"
                        type="submit"
                    >
            Login
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default SigninForm;
