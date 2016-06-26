import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class GeoLocation extends Component {
  render() {
    let coordinates = {
      latitude: parseFloat(this.props.position.latitude),
      longitude: parseFloat(this.props.position.longitude)
    }
    const timestamp = new Date(parseFloat(this.props.position.timestamp)).toLocaleString();
    return (
      <View style={styles.container}>
        <MapView
            style={styles.map}
            region={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.025, //0.015,
              longitudeDelta: 0.025// 0.0121,
            }}
        >
          <MapView.Marker
              coordinate={coordinates}
              title={this.props.position.username}
              description={timestamp}
          />
        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});