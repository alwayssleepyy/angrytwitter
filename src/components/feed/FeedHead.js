import React from 'react';

const FeedHead = ({children, className="", ...rest}) => {
    return (
        <div className={`feed__item__head ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default FeedHead;