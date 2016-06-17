export default class LoginProps {
  setProps(navigator, props) {
    return {
      userLocation: props.userLocation,
      onPress: this.onLoginPress.bind(this, navigator, props)
    }
  }

  onLoginPress(navigator, props, username) {
    props.requestLogin(username, props.userLocation);
    props.requestPositions();
    navigator.push({ name: 'userList' });
  }
}