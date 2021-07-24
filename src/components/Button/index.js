import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = ({
    ariaLabel = "",
    ariaHidden = false,
    children,
    className = "",
    clickHandler,
    disabled = false,
    type = "submit",
    ...otherProps
}) => {
    return (
        <button
            aria-label={ariaLabel}
            aria-hidden={ariaHidden}
            className={`button ${className}`}
            disabled={disabled}
            onClick={clickHandler}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    ariaLabel: PropTypes.string,
    ariaHidden: PropTypes.bool,
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.string,
        PropTypes.element
    ])
}

export default Button;
