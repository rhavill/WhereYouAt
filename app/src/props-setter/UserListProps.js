export default class UserListProps {
  setProps(navigator, routes, props) {
    return {
      userList: props.positions,
      onRowPress: this.onRowPress.bind(this, navigator, routes, props)
    }
  }

  onRowPress(navigator, routes, props, data) {
    props.setCurrentLocation(data);
    navigator.push(routes.location);
  }
}