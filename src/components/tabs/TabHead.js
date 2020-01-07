import React from 'react';

const TabHead = ({children, className="", ...rest}) => {
    return (
        <div className={`tabs__head ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default TabHead;