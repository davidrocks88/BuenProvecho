/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
var React = require('react');
var ReactNative = require('react-native');
var OpeningPage = require('./OpeningPage.js');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class BuenProvechoApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
       style={styles.container}
       initialRoute = {{
        title: 'Buen Provecho',
        component: OpeningPage,
      }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('BuenProvecho', function() { return BuenProvechoApp });