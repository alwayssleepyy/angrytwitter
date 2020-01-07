import React from 'react';

const InfoMenu = ({children, className="", ...rest}) => {
    return (
        <div className={`infomenu ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default InfoMenu;