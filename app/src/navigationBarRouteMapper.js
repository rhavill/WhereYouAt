import React from 'react';
import {
  Text
} from 'react-native';

export default navigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return index > 0 ?
        <Text>left</Text>
        :
        null

  },
  Title: function( route, navigator, index, navState ){
    return(
        <Text>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return null;
  }
};

//var NavigationBarRouteMapper = {
//  LeftButton: function(route, navigator, index, navState) {
//    if (index === 0) {
//      return null
//    }
//    var previousRoute = navState.routeStack[index - 1]
//    return (
//        <TouchableOpacity
//            onPress={() => navigator.pop()}
//            style={styles.navBarLeftButton}>
//          <Text style={[styles.navBarText, styles.navBarButtonText]}>
//            <Icon name="chevron-left"
//                  size={18}/>
//            {previousRoute.title}
//          </Text>
//        </TouchableOpacity>
//    )
//  },
//  RightButton: function(route, navigator, index, navState) {
//    switch(route.id){
//      case 'master':
//        return (
//            <TouchableOpacity
//                onPress={() => navigator.push({id: 'detail', title:"New", props\
//:{ navEvents }}) }
//                style={styles.navBarRightButton}>
//              <Icon style={[styles.navBarText, styles.navBarButtonText]}
//                    name="plus"
//                    size={18}/>
//            </TouchableOpacity>
//        )
//      case 'detail':
//        return (
//            <TouchableOpacity
//                onPress={() => route.props.navEvents.emit("save") }
//                style={styles.navBarRightButton}>
//              <Text style={[styles.navBarText, styles.navBarButtonText]}>
//                Save
//              </Text>
//            </TouchableOpacity>
//        )
//    }
//  },
//  Title: function(route, navigator, index, navState) {
//    return <Text style={[styles.navBarText, styles.navBarTitleText]}>{route.t\
//      itle}</Text>
//  },
//};