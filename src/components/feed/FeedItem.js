import React from 'react';

const FeedItem = ({children, className="", ...rest}) => {
    return (
        <div className={`feed__item ${className}`} {...rest}> 
            {children}
        </div>
    );
};

export default FeedItem;

//ask about imagesrc/tweetcontent default state
//also ask about how i layouted tweetimage/image 