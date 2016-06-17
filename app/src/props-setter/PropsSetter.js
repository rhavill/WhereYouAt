import LoginProps from './LoginProps';
import UserListProps from './UserListProps';
import GeoLocationProps from './GeoLocationProps';

export default class PropsSetter {
  constructor(componentName) {
    const classes = {
      'GeoLocation': GeoLocationProps,
      'Login': LoginProps,
      'UserList': UserListProps
    };
    this.strategy = new classes[componentName];
  }

  setProps(navigator, props) {
    return this.strategy.setProps(navigator, props);
  }
}