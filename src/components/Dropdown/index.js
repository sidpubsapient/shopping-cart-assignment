import React from "react";

import "./style.scss";

const Dropdown = ({
    options,
    ariaLabel,
    changeHandlerDropdown,
    className = "",
    value = "",
    ...otherProps
}) => {
    return (
        // eslint-disable-next-line jsx-a11y/no-onchange
        <select
            aria-label={ariaLabel}
            name="Categories"
            className={`select-dropdown ${className}`}
            id="categories"
            onChange={changeHandlerDropdown}
            value={value}
            {...otherProps}
        >
            <option className="select-dropdown__option" value={""}>
                All Products
            </option>
            {options.map((option) => (
                <option
                    className="select-option"
                    key={option.id}
                    value={option.id}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
