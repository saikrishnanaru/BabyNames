import React, {Component} from 'react';
import {StyleSheet,Image,Button,FlatList,Text,Dimensions,View,TouchableOpacity,TouchableHighlight} from 'react-native';
  export default class Clear extends Component {
    static navigationOptions = {
      tabBarLabel: 'Tab4',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./asset/conRoomWhite.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
  