import React from 'react';
import ReactNative from 'react-native';
import {
  Text,
  View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

class MealTabs extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {

    // };
  }
  static defaultProps

  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={2}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='Breakfast'>My</Text>
      <Text tabLabel='Lunch'>favorite</Text>
      <Text tabLabel='Dinner'>project</Text>
    </ScrollableTabView>;
  }
};

module.exports = MealTabs;

