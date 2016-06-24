import React, { Component } from 'react';
import {
  BackAndroid,
  Navigator,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import PropsSetter from '../props-setter/PropsSetter';
import * as actionCreators from '../action-creators';
import routes from '../routes';
import navigationBarRouteMapper from '../navigationBarRouteMapper';

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
    const componentName = route.componentName;
    const Component = route.component;
    const propsSetter = new PropsSetter(componentName);
    let props = propsSetter.setProps(navigator, routes, this.props);
    return <Component {...props}/>;
  }

  render() {
    return <Navigator
      style={styles.navigator}
      initialRoute={routes.login}
      renderScene={this.renderScene.bind(this)}
      configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
      navigator={this.navigator}
      ref={(nav) => {this.navigator = nav; }}
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={navigationBarRouteMapper}
        />
      }
      sceneStyle={styles.scene}
    />;
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#555'
  },
  scene: {
    position: 'absolute',
    top: 57,
    //borderWidth: 1,
    //borderColor: '#fff',
  }
});

export default connect(stateToProps, actionCreators)(App);