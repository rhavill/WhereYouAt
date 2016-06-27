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
        (error) => {
          return dispatch(setErrorMessage('Error detecting device location.'));
        },
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

export function setErrorMessage(errorMessage) {
  return {
    type: 'SET_ERROR_MESSAGE',
    errorMessage
  }
}

export function clearErrorMessage() {
  return dispatch => {
    return dispatch({type: 'SET_ERROR_MESSAGE', message: null});
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
    var res = null;
    fetch('http://whereyouat.net/user.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      res = response;
      if (response.ok) {
        dispatch(setUsername((username)));
        return response.json();
      }
      else {
        return dispatch(setErrorMessage('Error with login.'));
      }
    })
    .then((data) => {
      if (res.ok && data) {
        return dispatch(setPositions(data));
      }
      else {
        return dispatch(setErrorMessage('Error retrieving locations during login attempt.'));
      }
    })
    .catch((error) => {
      return dispatch(setErrorMessage('Error connecting to server for login.'));
    });
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
    let res = null;
    fetch('http://whereyouat.net/user.php')
      .then((response) => {
        res = response;
        return response.json();
      })
      .then((data) => {
        if (res.ok && data) {
          return dispatch(setPositions(data));
        }
        else {
          return dispatch(setErrorMessage('Error retrieving locations.'));
        }
      })
      .catch((error) => {
        return dispatch(setErrorMessage('Error connecting to server for positions.'));
      });
  }
}

export function setCurrentLocation(currentLocation) {
  return {
    type: 'SET_CURRENT_LOCATION',
    currentLocation
  }
}