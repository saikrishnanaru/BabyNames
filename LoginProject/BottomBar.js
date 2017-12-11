import React, {Component} from 'react';
import {StyleSheet,Image,Button,FlatList,Text,Dimensions,View,TouchableOpacity,TouchableHighlight} from 'react-native';
import {TabNavigator} from 'react-navigation';
import data from './data';
var _ = require('lodash');
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const width = Dimensions.get('window').width
var radio_props = [
  {label: 'Default', value: 1 },
  {label: 'Male', value: 0 },
  {label: 'Female', value: 0 }

];
import { selectItem,deleteItem }  from './src/action/favouriteAction';
 import { connect } from 'react-redux';
import NotificationScreen from './NotificationScreen'
import FavouriteScreen from './FavouriteScreen'
class MyHomeScreen extends Component {
    static navigationOptions = {
      tabBarLabel: 'Tab1',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./asset/conCallWhite.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };

    constructor(props)
    {
      super(props)
      this.state={
        data:this.sorted(data)
      }
      this.copyData = this.sorted(data)
    }
 
    
    sorted = (contents) => {
        if (contents) {
          return contents.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
    
            return 0;
          });
        }
    
        return null;
      };
      sortedSex = (type) => {
      return   data.filter(data => {
          return data.sex === type;
        })
      };

      filter=(value,label)=>{
console.log(label)

if (label === 1){
  this.setState({value:value,data:this.sortedSex("boy")})
}else if (label === 2){
  this.setState({value:value,data:this.sortedSex("girl")})
}else{
  this.setState({value:value,data:this.sorted(data)})
}
        
      }
  
      onpress = (item)=>{
        // var object = {
        //   "Key":item.Key,
        //   "selected":!item.selected,
        //   "name":item.name,
        //   "sex":item.sex
        // }
       // this.state.data[item.Key].selected = !item.selected

       var index = _.findIndex(this.state.data, item)

        let newArray = this.state.data.slice();
       

        if (this.state.data[index].selected == false){
          this.props.selected(item)
        }else{
          this.props.delete(item)
        }

        newArray[index] = {
          ...this.state.data[index],
          selected: !this.state.data[index].selected
        };
  
        
        this.setState({data:newArray})
          
      }
      selectedOrNot=(item)=>{
        if (item.selected){
        return (<Image
        style={{width:30,height:30,backgroundColor:'red'}}
        source={require('./asset/cross.png')}
      />)
        }else{
          return null
        }
      }

    render() {
      return (
        <View>
        <View style={{width:width,height:70,justifyContent:'center',alignItems:'center'}}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          formHorizontal={true}
          onPress={(value,label) => {this.filter(value,label)}}
        />
          </View>
        <FlatList
  data={this.state.data}
  keyExtractor={item => item.Key}
  renderItem={({item}) => 
    <TouchableHighlight onPress={()=>this.onpress(item)}>
      <View style={{flexDirection:'row',}}>
         {this.selectedOrNot(item)}
  <Text style={{fontSize:19,color:'green'}}>{item.name}</Text>
  </View>
  </TouchableHighlight>
  
  }
/>
</View>
      );
    }
  }
  mapDispatchToProps= dispatch=>{
    return {
      selected: (item)=>{
        dispatch(selectItem(item))
      },
      delete :(item)=>{
        dispatch(deleteItem(item))
      }
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
  
  export default connect(null,mapDispatchToProps)(MyHomeScreen);
  
  