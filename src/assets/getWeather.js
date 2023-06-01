export function getWeatherData() {
    const response = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Omaha?unitGroup=us&key=S6GVCVAXEFFZ45D6RNJH38RKM&contentType=json")

    return response;



}

export async function getWeather() {
    const data = await getWeatherData();
    const json = await data.json()

    return json.currentConditions.temp;


}
