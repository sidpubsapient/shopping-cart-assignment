import React,{useState} from "react";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Input from "../../components/Input";
import { useHistory } from "react-router";
import { registerFormValidation } from "../../utils/formValidation";

import "./style.scss";

const RegisterForm = () => {
    const history = useHistory();
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: {},
    });

    const validateEmail = (field) => {
        let emailError = {...signupData.errors[field]};
        const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(signupData[field]).toLowerCase())) {
            emailError = "Please enter a valid email";
        } else {
            emailError = null;
        }
        setSignupData((prevState) => ({
            ...prevState,
            errors : {...prevState.errors, email: emailError},
        }));
    };

    const validatePassword = (field) => {
        let pwdError = {...signupData.errors[field]};
        const passwordRegex =
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,}$/;
        if (!passwordRegex.test(String(signupData[field]))) {
            pwdError = "Please enter a valid password having atleast 6 Characters (inlcuding a number and an alphabet) and spaces are not allowed";
        } else {
            pwdError = null;
        }
        setSignupData((prevState) => ({
            ...prevState,
            errors : {...prevState.errors, password: pwdError},
        }));
    };

    const validateCnfPwd = () => {
        let cnfPwdError = {...signupData.errors["confirmPassword"]};
        if (signupData["password"] != signupData["confirmPassword"]) {
            cnfPwdError = "Passwords don't match";
        }
        setSignupData((prevState) => ({
            ...prevState,
            errors : {...prevState.errors, confirmPassword: cnfPwdError},
        }));
    }

    const inputFields = [{
        ariaLabel:"Enter your first name",
        htmlFor:"firstNameInput",
        label:"First Name",
        name:"firstName",
        role:"textbox",
        tabIndex:"0",
        type:"text"
    },
    {ariaLabel:"Enter your last name",
        htmlFor:"lastNameInput",
        label:"Last Name",
        name:"lastName",
        role:"textbox",
        tabIndex:"0",
        type:"text"},
    {
        ariaLabel:"Enter your email address",
        htmlFor:"emailInput",
        label:"Email",
        name:"email",
        role:"textbox",
        tabIndex:"0",
        type:"text",
        onBlur: () => validateEmail("email")
    },{
        ariaLabel:"Enter password",
        htmlFor:"passwordInput",
        label:"Password",
        name:"password",
        role:"textbox",
        tabIndex:"0",
        type:"password",
        onBlur: () => validatePassword("password")
    },{
        ariaLabel:"Enter confirm password",
        htmlFor:"confirmPasswordInput",
        label:"Confirm Password",
        name:"confirmPassword",
        onBlur: () => validateCnfPwd(),
        role:"textbox",
        tabIndex:"0",
        type:"password",
    }];
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setSignupData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const formValidate = () => {
        const { errors, isFormValid } = registerFormValidation(signupData);
        setSignupData((prevState) => ({
            ...prevState,
            errors: errors,
        }));
        return isFormValid;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        formValidate() && history.push("/");
    };
    return (
        <section className="register-section">
            <div className="register-section__left">
                <Text className="register-section__left__title">Signup</Text>
                <Text className="register-section__left__description">
          We do not share your personal details with anyone.
                </Text>
            </div>
            <div className="register-section__right">
                <form
                    className="register-section__right__form"
                    onSubmit={submitHandler}
                >
                    {inputFields.map(field => <Input
                        key= {field.name}
                        ariaLabel={field.ariaLabel}
                        error={signupData.errors[field.name]}
                        htmlFor={field.htmlFor}
                        label={field.label}
                        name={field.name}
                        onChange={changeHandler}
                        onBlur={field.onBlur}
                        role={field.role}
                        tabIndex="0"
                        type={field.type}
                        value={signupData[field.name]}
                    />)}
                    <Button
                        ariaLabel="Signup Button"
                        role="button"
                        tabIndex="0"
                        type="submit"
                    >
            Signup
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default RegisterForm;