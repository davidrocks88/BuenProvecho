import React from 'react';
import ReactNative from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  SectionHeader,
} from 'react-native';
var screen = require('Dimensions').get('window');
var bgColor = '#f2f7ff';
// Props: meal, data
var styles = StyleSheet.create({
  txt: {
    flex: 1
  },
  lvContainer: {
    flex: 1,
    marginTop: 0,
    paddingTop: -80,
    marginBottom: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 100,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  lvItem: {
    width: screen.width,
    fontSize: 20,
    padding: 3,
    paddingLeft: 0,
  },
  sectionText: {
    fontSize: 24,
  }
});
class MealView extends React.Component{
  

  constructor(props) {
    super(props);
    // console.log('in constructor');
    // console.log(this.props.diningData);

    dataBlob = this.props.diningData;

    if (dataBlob == undefined) {
      dataBlob = {nothing: 'empty'};
      this.props.empty = true;

    }

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1,s2) => s1 !== s2
    })

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob)
    }



  }



  _renderMeal() {
        <Text style={{flex: 1, fontSize: 1}}> {JSON.stringify(this.props.diningData)} </Text>

  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style = {{
        backgroundColor: '#ededed'
      }}>
        <Text style={styles.sectionText}>{sectionID}</Text>
      </View>
      )
  }

  renderRowText(txt) {

    txt = txt.replace(/&amp;/g,'&');
    return (
      <Text style = {styles.lvItem}> {txt} </Text>
    )
  }

  getListView() {
    console.log('this.props.empty = ' + this.props.empty)

    if(this.props.diningData == undefined) {
      return (
        <View style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style = {{
            fontSize: 30,
            marginBottom: 0,
          }}> No menu info found.</Text>
          <Text style = {{
            fontSize: 30,
            marginBottom: 80,
          }}> Sorry! </Text>
        </View>

        );
    }


    return (
        <View style = {styles.lvContainer}>
          <ListView
            automaticallyAdjustContentInsets={false}
            dataSource={this.state.dataSource}
            renderRow={this.renderRowText}
            // renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            renderSectionHeader={this.renderSectionHeader}
            enableEmptySections = {false}
          />
        </View>
      );
  }

  render() {

    console.log('meal = ' + this.props.meal);
    console.log(this.props.diningData);

    var lv = this.getListView();
    return (
      <View style={{
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style = {{flex: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',backgroundColor: bgColor}}>
          <Text style = {{
            flex: 0,
            alignItems: 'center',
            flexDirection: 'row',
            fontSize: 50,
            marginTop: 60,
            marginBottom: 0,
            backgroundColor: bgColor
          }}> {
            this.props.meal} </Text>
        </View>

        {lv}

      </View>
      );
  }
};

module.exports = MealView;
