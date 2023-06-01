import { getWeather } from "../assets/getWeather"

export function WeatherBox() {
    const currentTemp = getWeather();
    return (
        <div>Current Temperature: {currentTemp}</div>
    )
}