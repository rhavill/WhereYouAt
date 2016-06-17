import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Loading from './Loading';

export default class UserList extends Component {

  constructor(props) {
    super(props);
    this.dataSource = null;
  }

  onRowPress(username) {
    this.props.onRowPress(username);
  }

  renderRow(rowData) {
    return <TouchableHighlight
        underlayColor={'#666666'}
        onPress={this.onRowPress.bind(this, rowData)}
    >
      <View style={styles.row}>
        <Text style={styles.text}>
          {rowData.username}
        </Text>
      </View>
    </TouchableHighlight>
  }

  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(this.props.userList);
    return this.props.userList.length ?
        <View>
          <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow.bind(this)}
          />
        </View>
        :
        <Loading/>
    ;
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ddd'
  },
  row: {
    borderColor: '#fff',
    height: 65,
    borderBottomWidth: 1
  }
});