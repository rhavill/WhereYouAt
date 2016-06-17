import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Loading extends Component {

  render() {
    return (
        <View>
          <Text style={styles.text}>
            Loading...
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ddd'
  }
});