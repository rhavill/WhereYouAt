import React, { Component } from 'react';
import {
  BackAndroid,
  Text,
  View,
  Navigator,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import Login from './Login';
import GeoLocation from './GeoLocation';
import UserList from './UserList';
import PropsSetter from '../props-setter/PropsSetter';
import * as actionCreators from '../action-creators';

const routes = {
  userList: {
    component: UserList,
    componentName: 'UserList'
  },
  login: {
    component: Login,
    componentName: 'Login'
  },
  location: {
    component: GeoLocation,
    componentName: 'GeoLocation'
  }
};

function stateToProps(state) {
  return {
    username: state.username,
    userLocation: state.userLocation,
    positions: state.positions,
    currentLocation: state.currentLocation
  }
}

class App extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.hardwareBackPress.bind(this));
    this.props.requestUserLocation();
  }

  componentWillUnMount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  hardwareBackPress() {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
      this.navigator.pop();
      return true;
    }
    return false;
  }

  renderScene(route, navigator) {
    const componentName = routes[route.name].componentName;
    const Component = routes[route.name].component;
    const propsSetter = new PropsSetter(componentName);
    let props = propsSetter.setProps(navigator, this.props);
    return <Component {...props}/>;
  }

  render() {
    return <Navigator
      style={ styles.container }
      initialRoute={ {name: 'login'} }
      renderScene={this.renderScene.bind(this)}
      configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
      navigator={this.navigator}
      ref={(nav) => {this.navigator = nav; }}
    />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#555'
  }
});

export default connect(stateToProps, actionCreators)(App);