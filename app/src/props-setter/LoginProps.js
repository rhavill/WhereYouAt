export default class LoginProps {
  setProps(navigator, routes, props) {
    return {
      userLocation: props.userLocation,
      onPress: this.onLoginPress.bind(this, navigator, routes, props)
    }
  }

  onLoginPress(navigator, routes, props, username) {
    props.requestLogin(username, props.userLocation);
    props.requestPositions();
    navigator.push(routes.userList);
  }
}