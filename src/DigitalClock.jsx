import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    // only start a timer when the component mounts for the first time
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // update the date every 1000 ms
        }, 1000);

        // it's a good practice to remove the timer when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // change from military time to standard time:
        // extended way
        hours = hours % 12;
        if (hours === 0) hours = 12;

        // compact way
        // hours =  hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock;