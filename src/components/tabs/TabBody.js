import React from 'react';

const TabBody = ({children, className="", ...rest}) => {
    return (
        <div className={`tabs__body ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default TabBody;