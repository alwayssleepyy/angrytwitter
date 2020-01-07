import React from 'react';

const FeedMain = ({children, className="", ...rest}) => {
    return (
        <div className={`feed__item__main ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default FeedMain;