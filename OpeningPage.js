'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  DatePickerIOS,
  Image
} from 'react-native';

var DiningList = require('./DiningList');



var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
flowDown: {
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},

button: {
  height: 36,
  flex: 0,
  flexDirection: 'row',

  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 10,
  borderRadius: 8,
  marginBottom: 10,
  marginTop: 20,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
},
datePicker: {
flex: 1,
width: 300,
  },
image: {
        width: 217,
        height: 138
}
});


class OpeningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
      date: new Date(),
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
      status: 'all good',
      hall: '',
    };
  }
  
  _executeQuery(query) {
    console.log(query);
    this.setState({ status: 'loading' });
    // fetch(query)
    //   .then(response => response.json())
    //   .then(json => this._handleResponse(json.response))
    //   .catch(error =>
    //     console.log('error')
    //   );

    // this._handleResponse({diningData: 'abc'});
    // return;
    var obj = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      console.log(request);
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200 && request.readyState == 4) {
        //this.setState({status: request.responseText});

        obj._handleResponse((request.responseText));
        return;
      } else {
        console.warn(request);
      }
    };

    request.open('GET', query);
    request.send();
  }
  _handleResponse(response) {
    this.setState({ isLoading: false , message: '', status: 'got it'});
    
    console.log(response);
    
    console.log('about to push...');
    this.props.navigator.push({
        title: 'Results',
        component: DiningList,
        passProps: {diningData: JSON.parse(response)}
      });

    // if (response.application_response_code.substr(0, 1) === '1') {
    //   this.props.navigator.push({
    //     title: 'Results',
    //     component: SearchResults,
    //     passProps: {listings: response.listings}
    //   });
    // } else {
    //   this.setState({ status: 'Location not recognized; please try again.'});
    // }
  }

  onDewickPressed() {
    var date = this.state.date;
    var month = date.getUTCMonth() + 1;
    var year = date.getFullYear();
    var day = date.getUTCDate() - 1;
    var hall = 'dewick';

    var query = 'https://tuftsdiningdata.herokuapp.com/menus/' + hall + '/' + day + '/' + month + '/' + year;
    this.setState({status: query});
    this._executeQuery(query);
    console.log(query);
  }

  onCarmPressed() {
    var date = this.state.date;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getUTCDate() - 1;
    var hall = 'carm';

    var query = 'https://tuftsdiningdata.herokuapp.com/menus/' + hall + '/' + day + '/' + month + '/' + year;
    this.setState({status: query});
    this._executeQuery(query);
        console.log(query);

  }

  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  };


  onDateChange = (date) => {
    this.setState({date: date, status: date.toString()});
  };

  render() {
    var spinner = this.state.isLoading ?
        ( <ActivityIndicator
            size='large'/> ) :
        ( <View/>);


    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Select A Dining Hall
        </Text>

        {/*<View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',

        }}>*/}
        {/*<View style={{
          flex: 1,
          flexDirection: 'column',

        }}>*/}
          <TouchableHighlight 
                style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onDewickPressed.bind(this)}>
              <Text style={styles.buttonText}>Dewick</Text>
          </TouchableHighlight>

          <TouchableHighlight 
                style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onCarmPressed.bind(this)}>
              <Text style={styles.buttonText}>Carmichael</Text>
          </TouchableHighlight>
          <View>
        <Text style={styles.description}>
          {this.state.status}
        </Text>
        <DatePickerIOS
            date={this.state.date}
            mode='date'
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
            style={styles.datePicker} />


        </View>
        {/*</View>*/}
        



      </View>
    );
  }
}

module.exports = OpeningPage;
