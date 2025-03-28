import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕하세요!"
    },
    {
        message: "반갑읍니다!"
    },
    {
        message: "또 만나요!"
    }
];

var timer;

class NotificationLists extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notifications: []
        };
    };

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => 
        {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            }
            else clearInterval(timer);
        }, 3000)
    };

    render() {
        return (
            <div>
                {
                    this.state.notifications.map((notifications) => {
                        return <Notification message={notifications.message}></Notification>;
                    })
                }
            </div>
        );
    };
}

export default NotificationLists;