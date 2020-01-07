import React from 'react';

const InfoMenuHead = ({children, className="", ...rest}) => {
    return (
        <div className={`infomenu__head ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default InfoMenuHead;