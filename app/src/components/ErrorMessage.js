import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.01);
    this.maxValue = 0.7;
    this.listenerId = null;
  }
  componentDidMount() {
    let animation = Animated.sequence([
      Animated.timing(this.animatedValue, {
        toValue: this.maxValue,
        duration: 2000
      }),
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 2000,
        delay: 2000
      })
    ]);
    this.listenerId = this.animatedValue.addListener((x) => {
      if (x.value === 0) {
        this.props.clear();
      }
    });
    animation.start();
  }
  componentWillUnmount() {
    this.animatedValue.removeListener(this.listenerId);
  }
  render() {
    let style = {
      opacity: this.animatedValue
    };
    return (
        <Animated.View style={[styles.container, style]}>
          <Text style={styles.text}>
            {this.props.message}
          </Text>
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(185, 74, 72)',
    opacity: 1
  },
  container: {
    borderWidth: 1,
    borderColor: 'rgb(185, 74, 72)',
    borderRadius: 5,
    backgroundColor: 'rgb(242, 222, 222)',
    padding: 6
  }
});