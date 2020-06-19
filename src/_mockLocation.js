import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {

  const lat = 80.6751577 + increment * tenMetersWithDegrees;
  const long = 109.567519 + increment * tenMetersWithDegrees;

  console.log('Mock:', lat, long);

  return {
    timestamp: 100000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: lat,
      longitude: long
    }
  };
};

let counter = 0;

setInterval(() => {
  const locData = {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  };
  Location.EventEmitter.emit('Expo.locationChanged', locData);
  counter++;
}, 5000)