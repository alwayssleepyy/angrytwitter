import React from 'react';

const FeedImage = ({imageSrc, className="", ...rest}) => {
    return (
        <img src={imageSrc} className={`feed__item__image ${className}`} {...rest}/>
    );
};

export default FeedImage;