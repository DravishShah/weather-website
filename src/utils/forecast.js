const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c06e42ed1b066e1292efa1186d0518ac&query=" +
    latitude +
    "," +
    longitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(
        "Unable to get weather service! Please try again later 😊",
        undefined
      );
    } else if (response.body.error) {
      callback(
        "Unable to find location. Please provide valid input!🥺",
        undefined
      );
    } else {
      //   callback(undefined, {
      //     temperature: response.body.current.temperature,
      //     feelsLike: response.body.current.feelslike,
      //     weatherDescription: response.body.current.weather_descriptions,
      //   });
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} out, although it feels like ${response.body.current.feelslike}. It is ${response.body.current.weather_descriptions} outside.`
      );
    }
  });
};

module.exports = forecast;
