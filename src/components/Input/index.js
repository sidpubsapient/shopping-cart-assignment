import React from "react";

import "./style.scss";

const Input = ({
    ariaLabel,
    ariaHidden = false,
    changeHandler,
    htmlFor,
    error = "",
    label,
    name,
    ...otherProps
}) => {
    return (
        <div className="input-container">
            <input
                aria-label={ariaLabel}
                aria-hidden={ariaHidden}
                className="form-group-input"
                id={htmlFor}
                name={name}
                onChange={changeHandler}
                {...otherProps}
            />
            {label ? (
                <label
                    className={`input-label ${
                        otherProps.value.length ? "top-label" : ""
                    }`}
                    htmlFor={htmlFor}
                >
                    {label}
                </label>
            ) : null}
            <div className="err-msg" role="alert">
                {error ? error : ""}
            </div>
        </div>
    );
};

export default Input;
