export function setUserLocation(location) {
  return {
    type: 'SET_USER_LOCATION',
    location
  }
}

export function requestUserLocation() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          return dispatch(setUserLocation((position)));
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

export function setUsername(username) {
  return {
    type: 'SET_USERNAME',
    username
  }
}

export function requestLogin(username, location) {
  return dispatch => {
      let data = {
        username,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: location.timestamp
      };
      fetch('http://whereyouat.net/user.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
          .then((response) => dispatch(setUsername((username))))
          .catch((error) => { alert(error); });
  }
}

export function setPositions(positions) {
  return {
    type: 'SET_POSITIONS',
    positions
  }
}

export function requestPositions() {
  return dispatch => {
    fetch('http://whereyouat.net/user.php')
        .then((response) => response.text())
        .then((responseText) => {
          dispatch(setPositions(JSON.parse(responseText)));
        })
        .catch((error) => {
          alert(error);
        });  }
}

export function setCurrentLocation(currentLocation) {
  return {
    type: 'SET_CURRENT_LOCATION',
    currentLocation
  }
}