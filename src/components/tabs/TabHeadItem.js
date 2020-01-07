import React from 'react';
import Icon from "../icon";

const TabHeadItem = ({children, icon, className="", ...rest}) => {
    return (
        <div className={`tabs__head__item ${className}`} {...rest}>
            {icon ? <Icon name={icon}/> : null}
            <div className="tabs__head__item__heading">
                {children}
            </div>   
        </div>
    );
};

export default TabHeadItem;