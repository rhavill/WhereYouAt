export default class UserListProps {
  setProps(navigator, props) {
    return {
      userList: props.positions,
      onRowPress: this.onRowPress.bind(this, navigator, props)
    }
  }

  onRowPress(navigator, props, data) {
    props.setCurrentLocation(data);
    navigator.push({ name: 'location' });
  }
}