import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';
import Loading from './Loading';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return this.props.userLocation ?
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <TextInput
                style={styles.input}
                value={this.state.username}
                onChangeText={(text) => this.setState({username: text})}
                placeholder={'Enter Nickname'}
                maxLength={12}
                multiline={false}
            />
            <TouchableHighlight
                style={styles.button}
                underlayColor={'#666666'}
                onPress={this.props.onPress.bind(null, this.state.username)}
            >
              <Text style={styles.label}>LOGIN</Text>
            </TouchableHighlight>
          </View>
        </View>
        :
        <Loading />
    ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#555'
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#777'
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ddd'
  }
});