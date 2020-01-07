import React from 'react';

import Button from "../button";

const InfoMenuBody = ({children, className="", ...rest}) => {
    return (
        <div className={`infomenu__body ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default InfoMenuBody;

//ask how to take optionala rguement by default like imagesrc and button
//TODO: two more comps for button and image