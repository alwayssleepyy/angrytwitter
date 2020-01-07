import React from 'react';

const Icon = ({name, className="", ...rest}) => {
    return (
        <svg className={`icon ${className}`} {...rest}>
            <use xlinkHref={`/sprite.svg#icon-${name}`}/>
        </svg>
    );
};

export default Icon;