import React from 'react';

const Feed = ({children, className="", ...rest}) => {
    return (
        <div className={`feed ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default Feed;