import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,Alert, TouchableOpacity,Image, Dimensions,
} from 'react-native';
import { connect } from 'react-redux'
import { fetchData } from './src/action/action'

export default class Project extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'green', flex: 1,flexDirection:'row'}}>
        
           <View style={{flex:1,backgroundColor:'red'}}>
             </View>
             <View style={{flex:1,backgroundColor:'black'}}>
             </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 main: {
   backgroundColor: 'blue'
 },
 text: {
 alignItems : 'center'

 },
 container: {
  alignItems: 'center',
  flex: 1,
  height:400,
 },
  buttonText1: {
      borderWidth: 1,
      padding: 25,      
      borderColor: 'black',
      backgroundColor: '#C4D7ED',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width / 2,
      height: Dimensions.get('window').height / 8,
      left: 0,
   },
    buttonText2: {
      borderWidth: 1,
      padding: 25,      
      borderColor: 'black',
      backgroundColor: '#C4D7ED',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: Dimensions.get('window').width / 2,
      height: Dimensions.get('window').height / 8,
      right: 0,
   }
});

