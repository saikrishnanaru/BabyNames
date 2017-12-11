import React, {Component} from 'react';
import {StyleSheet,Image,Button,FlatList,Text,Dimensions,View,TouchableOpacity,TouchableHighlight} from 'react-native';
import NotificationScreen from './NotificationScreen'
import {TabNavigator} from 'react-navigation';
import FavouriteScreen from './FavouriteScreen'
import MyHomeScreen from './BottomBar';
import ClearScreen from './ClearScreen'
  export default   TabNavigator({
    Tab1: {
      screen: MyHomeScreen,
    },
    Tab2: {
      screen: NotificationScreen,
    },Tab3: {
      screen: FavouriteScreen,
    },
    Tab4: {
      screen: ClearScreen,
    }

  }, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  });
  
  
