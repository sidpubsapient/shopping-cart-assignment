
export const registerFormValidation = ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
}) => {
    let errors = {};
    let isFormValid = true;
    if (!firstName) {
        isFormValid = false;
        errors.firstName = "Please enter first name";
    }
    if (!lastName) {
        isFormValid = false;
        errors.lastName = "Please enter last name";
    }
    if (!email) {
        isFormValid = false;
        errors.email = "Please enter email";
    } else {
        const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(email).toLowerCase())) {
            isFormValid = false;
            errors.email = "Please enter a valid email";
        }
    }
    if (!password) {
        isFormValid = false;
        errors.password = "Please enter password";
    } else {
        const passwordRegex =
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{6,}$/;
        if (!passwordRegex.test(String(password))) {
            isFormValid = false;
            errors.password = "Please enter a valid password having atleast 6 Characters (inlcuding a number and an alphabet) and spaces are not allowed";
        }
    }
    if (!confirmPassword) {
        isFormValid = false;
        errors.confirmPassword = "Please enter confirm password";
    } else {
        if (password != confirmPassword) {
            isFormValid = false;
            errors.confirmPassword = "Passwords don't match";
        }
    }
    return {
        errors,
        isFormValid,
    };
};

export const signinFormValidation = ({ email, password }) => {
    let errors = {};
    let isFormValid = true;
    if (!email) {
        isFormValid = false;
        errors.email = "Please enter your email address";
    } else {
        const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(email).toLowerCase())) {
            isFormValid = false;
            errors.email = "Please enter your email address";
        }
    }
    if (!password) {
        isFormValid = false;
        errors.password = "Please enter the password";
    }
    return {
        errors,
        isFormValid,
    };
};
