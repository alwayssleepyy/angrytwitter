import React from 'react';

const FeedFloor = ({children, className="", ...rest}) => {
    return (
        <div className={`feed__item__floor ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default FeedFloor;