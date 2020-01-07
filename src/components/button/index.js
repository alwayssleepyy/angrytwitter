import React from 'react';

const Button = ({children, className="", color="primary", ...rest}) => {
    return (
        <button className={`btn btn--${color} ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
//ask about implementation of this component