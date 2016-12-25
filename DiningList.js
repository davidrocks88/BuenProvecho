'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text,
  SegmentedControlIOS,
  ScrollView,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var PageControl = require('react-native-page-control');
var MealView = require('./MealView');
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
  },
  demoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: 'yellow',
  },
  MealTabSyle: {
    paddingTop: 100
  },
});

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';


var screen = require('Dimensions').get('window');
class DiningList extends Component {
  constructor(props) {
      super(props);

      this.state = {
        diningData: this.props.diningData,
        selectedTab: 'Breakfast', // THIS IS WHAT COULD CHANGE
        currentPage: 0
      };
    }
  onScroll(event) {
    var offsetX = event.nativeEvent.contentOffset.x,
        pageWidth = screen.width ;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  }


  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Breakfast"
          iconName="ios-egg-outline"
          selectedIconName = "ios-egg"
          selected={this.state.selectedTab === 'Breakfast'}
          onPress={() => {
              this.setState({
                selectedTab: 'Breakfast',
              });
          }}>
              <MealView diningData={this.props.diningData.data['Breakfast']} meal='Breakfast' />
          </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Lunch"
          iconName="ios-basket-outline"
          selectedIconName = "ios-basket"
          selected={this.state.selectedTab === 'Lunch'}
          onPress={() => {
              this.setState({
                selectedTab: 'Lunch',
              });
          }}>
              <MealView diningData={this.props.diningData.data['Lunch']} meal='Lunch' />
          </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Dinner"
          iconName="ios-pizza-outline"
          selectedIconName = "ios-pizza"
          selected={this.state.selectedTab === 'Dinner'}
          onPress={() => {
              this.setState({
                selectedTab: 'Dinner',
              });
          }}>
              <MealView diningData={this.props.diningData.data['Dinner']} meal='Dinner' />
          </Icon.TabBarItem>
      </TabBarIOS>  
      );
  }
}

module.exports = DiningList;
