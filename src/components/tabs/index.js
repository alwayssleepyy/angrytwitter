import React from 'react';

import TabHead from "./TabHead";
import TabHeadItem from "./TabHeadItem";
import TabBody from "./TabBody";
import Icon from "../icon";

const Tabs = ({children, icon, active, onChange, className="", tabs = [], ...rest}) => {
    return (
        <div className={`tabs ${className}`} {...rest}>
            <TabHead>
                <Icon className="twitter-bird" name="twitter"/>
                {tabs.map((tab, i) => (
                    <TabHeadItem onClick={onChange && onChange.bind(null, i)} key={i} icon={tab.icon}>
                        {tab.label}          
                    </TabHeadItem>
                ))}    
            </TabHead>   
            <TabBody>
                {/* {tabs[active] ? tabs[active].component : children} */}
            </TabBody>
        </div>
    );
};

export default Tabs;