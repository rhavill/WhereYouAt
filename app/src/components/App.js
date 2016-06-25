import React, { Component } from 'react';
import {
  BackAndroid,
  Navigator,
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';

import PropsSetter from '../props-setter/PropsSetter';
import * as actionCreators from '../action-creators';
import routes from '../routes';
import navigationBarRouteMapper from '../navigationBarRouteMapper';
import ErrorMessage from './ErrorMessage';

function stateToProps(state) {
  return {
    username: state.username,
    userLocation: state.userLocation,
    positions: state.positions,
    currentLocation: state.currentLocation,
    errorMessage: state.errorMessage
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.backAndroidListener = null;
  }
  componentDidMount() {
    this.backAndroidListener = BackAndroid.addEventListener('hardwareBackPress', this.hardwareBackPress.bind(this));
    this.props.requestUserLocation();
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener(this.backAndroidListener);
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
    return <View style={styles.scene}>{
      this.props.errorMessage ?
        <ErrorMessage message={this.props.errorMessage}
          clear={this.props.clearErrorMessage}/>
        : null
      }
      <Component {...props}/>
    </View>
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
          style={styles.navigationBar}
        />
      }
      sceneStyle={styles.sceneContainer}
    />;
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#777'
  },
  navigationBar: {
    backgroundColor: '#555'
  },
  scene: {
    flex:1,
    flexDirection:'column'
  },
  sceneContainer: {
    position: 'absolute',
    top: 57
  }
});

export default connect(stateToProps, actionCreators)(App);