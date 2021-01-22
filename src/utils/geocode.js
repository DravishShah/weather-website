const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    "hbv.json?access_token=pk.eyJ1IjoiZHJhdnV1dSIsImEiOiJja2p0cXEyZ2YwMjJqMnhvYjRlM2I2aTdlIn0.82vUu-VxNt9L-0B05z57Ww&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to get service! Please try again later 😊", undefined);
    } else if (response.body.features.length === 0) {
      callback(
        "Unable to find location. Please provide valid input!🥺",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
