const initialState = {
  username: null,
  userLocation: null,
  positions: [],
  currentLocation:null,
  errorMessage: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_LOCATION':
      return Object.assign({}, state, {
        userLocation: action.location
      });
    case 'SET_USERNAME':
      return Object.assign({}, state, {
        username: action.username
      });
    case 'SET_POSITIONS':
      return Object.assign({}, state, {
        positions: action.positions
      });
    case 'SET_CURRENT_LOCATION':
      return Object.assign({}, state, {
        currentLocation: action.currentLocation
      })
    case 'SET_ERROR_MESSAGE':
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      });
    default:
      return state;
  }
  return state;
}