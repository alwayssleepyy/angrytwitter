import React from 'react';

const Avatar = ({imageSrc, className="",...rest}) => {
    return (
        <img src={imageSrc} className={`avatar ${className}`} {...rest}/>
    );
};

export default Avatar;