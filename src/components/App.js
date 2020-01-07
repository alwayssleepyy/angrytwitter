import React, {useState} from "react";
import {withRouter} from "react-router-dom";

import Tabs from "./tabs";
import RouteTabs from "./routetabs/RouteTabs";
import Icon from "./icon";
import Button from "./button";
import Avatar from "./Avatar";
import Feed from "./feed";
import FeedItem from "./feed/FeedItem";
import FeedHead from "./feed/FeedHead";
import FeedMain from "./feed/FeedMain";
import FeedFloor from "./feed/FeedFloor";
import FeedImage from "./feed/FeedImage";
import InfoMenu from "./infomenu";
import InfoMenuHead from "./infomenu/InfoMenuHead";
import InfoMenuBodyContent from "./infomenu/InfoMenuBodyContent";
import InfoMenuBody from "./infomenu/InfoMenuBody";

const tabs = [
    {label: "Home", component: "Home", icon:"home2"},
    {label: "Expore", component: "Explore", icon:"align-justified"},
    {label: "Notifications", component: "Notifications", icon:"bell"},
    {label: "Messages", component: "messages", icon:"message"},
    {label: "Bookmarks", component: "bookmarks", icon:"bookmark"},
    {label: "Lists", component: "lists", icon:"file-text2"},
    {label: "Profile", component: "profile", icon:"user-solid-circle"},
    {label: "More", component: "more", icon:"navigation-more"}
]

const tabsWithRoutes = [
    {label: "Home", component: "Home", routeInfo: {path:"/home", render: () => "home"}},
    {label: "Expore", component: "Explore", routeInfo:{path:"/explore", render: () => "explore"}},
    {label: "Notifications", component: "Notifications", routeInfo:{path:"/notifications", render: () =>  "notifications"}},
    {label: "Messages", component: "Messages", routeInfo:{path:"/messages", render: () => "messages"}},
    {label: "Bookmarks", component: "Bookmarks", routeInfo:{path:"/bookmarks", render: () => "bookmarks"}},
    {label: "Lists", component: "Lists", routeInfo:{path:"/lists", render: () => "lists"}},
    {label: "Profile", component: "Profile", routeInfo:{path:"/profile", render: () => "profile"}},
    {label: "More", component: "More", routeInfo:{path:"/more", render: () => "more"}}
]

const App = (props) => {
    const [active, setActive] = useState(0);
    const [followButton, setFollowButton] = useState(false);

    const handleChange = i => {
        setActive(i);
    }

    const handleRouteChange = i => {
        setActive(i);
        props.history.push(tabsWithRoutes[i].routeInfo.path);
    }

    const handleFollowClick = () => {
        setFollowButton(!followButton);
    }

    return (
        <div className="container">
            <div className="container__navigation">
                <Tabs tabs={tabs} onChange={handleChange}/>
                <Button color="primary">Tweet</Button>
            </div>

            <div className="container__main">
                
                <Feed>
                    <FeedItem>
                            <div className="feed__item__avatar">
                                <Avatar imageSrc="https://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg"/>
                            </div>
                            <div className="feed__item__container">
                                <FeedHead>
                                    Angry dog
                                </FeedHead>
                                <FeedMain>
                                     Maecenas ut nunc sodales, pretium mi eget, tempus nunc. Proin porttitor elit ligula, ac lacinia turpis blandit a. Donec rhoncus sapien et odio ornare posuere. Aenean feugiat massa nec cursus pretium. Nunc turpis arcu, imperdiet sit amet sollicitudin molestie, sollicitudin vitae leo.
                                </FeedMain>
                                <FeedImage imageSrc="https://www.cdc.gov/features/dog-bite-prevention/dog-bite-prevention_456px.jpg"/>
                                <FeedFloor className="feed__item__floor__icon">
                                    <Icon name="message"/>
                                    <Icon name="retweet"/>
                                    <Icon name="heart-outlined"/>
                                    <Icon name="upload"/>
                                    <Icon/>
                                </FeedFloor>
                        </div>       
                    </FeedItem>
                    <FeedItem>
                            <div className="feed__item__avatar">
                                <Avatar imageSrc="https://i.ytimg.com/vi/9FuBQiBH2mg/maxresdefault.jpg"/>
                            </div>
                            <div className="feed__item__container">
                                <FeedHead>
                                    Angry cat
                                </FeedHead>
                                <FeedMain>
                                     Donec rhoncus sapien et odio ornare posuere. Aenean feugiat massa nec cursus pretium. Nunc turpis arcu, imperdiet sit amet sollicitudin molestie, sollicitudin vitae leo.
                                </FeedMain>
                                <FeedImage imageSrc="https://i.ytimg.com/vi/9FuBQiBH2mg/maxresdefault.jpg"/>
                                <FeedFloor className="feed__item__floor__icon">
                                    <Icon name="message"/>
                                    <Icon name="retweet"/>
                                    <Icon name="heart-outlined"/>
                                    <Icon name="upload"/>
                                    <Icon/>
                                </FeedFloor>
                        </div>       
                    </FeedItem>
                </Feed>
            </div>
            <div className="container__dashboard">
                <InfoMenu>
                    <InfoMenuHead>
                        Who to follow
                    </InfoMenuHead>
                    <InfoMenuBody>
                        <Avatar className="infomenu__body__avatar" src="https://i.pinimg.com/originals/a6/b8/52/a6b8525cee4b4f6e387e5e612dc30e28.jpg"/>
                        <InfoMenuBodyContent>
                            <div className="infomenu__body__content__heading1">
                                Angry cow
                            </div>
                            <div className="infomenu__body__content__heading2">
                                @angrycow
                            </div>
                        </InfoMenuBodyContent>
                        <Button onClick={handleFollowClick}>{followButton ? "Following" : "Follow"}</Button>
                    </InfoMenuBody>
                    <InfoMenuBody>
                        <Avatar className="infomenu__body__avatar"  src="https://i.dailymail.co.uk/i/pix/2016/04/07/11/32EDFB2C00000578-0-image-m-71_1460024701111.jpg"/>
                        <InfoMenuBodyContent>
                            <div className="infomenu__body__content__heading1">
                                Angry midha 
                            </div>
                            <div className="infomenu__body__content__heading2">
                                @angrymidha
                            </div>
                        </InfoMenuBodyContent>
                    </InfoMenuBody>
                </InfoMenu>
            </div>
        </div>
    )
}

export default withRouter(App);

//IMPORTANT: how do i keep button size constant regardless of content
//is button naming ok?
//ask about better way to layout my feed