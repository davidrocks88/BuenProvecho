'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class DiningList extends Component {
  constructor(props) {
      super(props);
      console.log('in constructor');

      this.state = {
        diningData: this.props.diningData
      };
    }

  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          {JSON.stringify(this.state.diningData)}
        </Text>
      </View>
      );
  }
}

module.exports = DiningList;
