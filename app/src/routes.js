import Login from './components/Login';
import GeoLocation from './components/GeoLocation';
import UserList from './components/UserList';

export default routes = {
  userList: {
    component: UserList,
    componentName: 'UserList',
    title: 'Users'
  },
  login: {
    component: Login,
    componentName: 'Login',
    title: 'Login'
  },
  location: {
    component: GeoLocation,
    componentName: 'GeoLocation',
    title: 'Location'
  }
};
