import React from 'react';

const InfoMenuBodyContent = ({children, className="", ...rest}) => {
    return (
        <div className={`infomenu__body__content ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default InfoMenuBodyContent;