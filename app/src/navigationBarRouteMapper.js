import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default navigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return index > 0 ?
        <View>
        <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigator.pop()}
            >
          <Text style={[styles.text]}>
            <Icon name="chevron-left"
                  size={20}
            />
          </Text>
        </TouchableOpacity>
        </View>
        :
        null
  },
  Title: function( route, navigator, index, navState ){
    return <View style={[styles.cell, styles.title]}>
        <Text style={styles.text}>{ route.title }</Text>
    </View>
  },
  RightButton: function( route, navigator, index, navState ){
    return null;
  }
};

const styles = StyleSheet.create({
  text: {
    color: '#ddd',
    fontSize: 20,
    fontWeight: 'bold'
  },
  title: {
    padding: 13,
    marginLeft: 50
  },
  touchable: {
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

