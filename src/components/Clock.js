import { useEffect, useState } from "react";

export function Clock() {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDateTime(new Date());
        }, 1000);
    });

    const tempHours = dateTime.getHours();

    const pm = (tempHours > 12) ? (tempHours - 12) : tempHours;

    const suffix = pm ? 'PM' : 'AM';
    var hours;
    if (pm) {
        hours = tempHours - 12;
    } else {
        hours = tempHours;
    }
    const minutes = dateTime.getMinutes() < 10 ? '0' + String(dateTime.getMinutes()) : dateTime.getMinutes()
    const time = hours + ':' + minutes + suffix;

    const date = dateTime.getMonth() + '-' + dateTime.getDate() + '-' + dateTime.getFullYear();
    return (
        <>
            <h1>{time}</h1>
            <h2>{date}</h2>
        </>

    )
}