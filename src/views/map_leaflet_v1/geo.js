// Export a named function
export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude }); // Return the coordinates
          },
          (error) => {
            reject(`Error fetching location: ${error.message}`); // Handle errors
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        reject("Geolocation is not supported by this browser");
      }
    });
  };
  