import React from "react";

import "./style.scss";
import { useHistory } from "react-router";

const Dropdown = ({
    ariaLabel = "",
    ariaHidden = false,
    className = "",
    disabled = false,
    options = [],
    value = "",
    ...otherProps
}) => {
    const history=useHistory();
    const changeHandlerDropdown = (e) => {
        e.target.selectedIndex ? history.push(`/products/${options[e.target.selectedIndex - 1].id}`) : history.push("/products")
    };
    return (
        // eslint-disable-next-line jsx-a11y/no-onchange
        <select
            aria-label={ariaLabel}
            aria-hidden={ariaHidden}
            className={`select-dropdown ${className}`}
            disabled={disabled}
            onChange={changeHandlerDropdown}
            value={value}
            {...otherProps}
        >
            <option className="select-dropdown__option" value={""}>All Products</option>
            {options.map((option) => (
                <option className="select-dropdown__option" key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
