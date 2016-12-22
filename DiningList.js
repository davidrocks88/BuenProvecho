'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text,
  SegmentedControlIOS,

} from 'react-native';

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  container: {
    justifyContent: 'center',
    padding: 5,
    marginTop: 75,
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row'
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',

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
  },
  control: {
    height: 30,
    flex: 1,
    flexDirection: 'row'
  }
});

class DiningList extends Component {
  constructor(props) {
      super(props);
      console.log('in constructor');

      this.state = {
        diningData: this.props.diningData,
        selectedIndex: 0
      };
    }

  render() { 
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          style={styles.control}
          values={['Breakfast', 'Lunch', 'Dinner']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }} />
          <View style={styles.textContainer}>
            <Text>
              {JSON.stringify(this.state.diningData)}
            </Text>
          </View>
      </View>
      );
  }
}

module.exports = DiningList;
