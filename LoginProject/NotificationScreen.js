import React, {Component} from 'react';
import {StyleSheet,Image,Button,FlatList,Text,Dimensions,View,TouchableOpacity,TouchableHighlight} from 'react-native';
import data from './data';
const algo = {
    "a": 1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":8,
    "g":3,
    "h":5,
    "i":1,
    "j":1,
    "k":2,
    "l":3,
    "m":4,
    "n":5,
    "o":7,
    "p":8,
    "q":1,
    "r":2,
    "s":3,
    "t":4,
    "u":6,
    "v":6,
    "w":6,
    "x":5,
    "y":1,
    "z":7,
  }
  export default class NotificationScreen extends Component {
    constructor(props)
    {
      super(props)
      this.state = {
        copyData : []
      }
    }
    
    static navigationOptions = {
      tabBarLabel: 'Tab2',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./asset/conRoomWhite.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    componentWillMount()
    {
      
      for (var i = 0;i< data.length ; i++)
      {
          var name = data[i].name
         var total =  this.caculateRank(name)
         data[i] = {...data[i],"rank":total}
         console.log(data)
      }

      var copyData = this.sortedRank(data)
      this.setState({copyData : copyData})

    }

    sortedRank = (contents) => {
      if (contents) {
        return contents.sort((a, b) => {
          if (a.rank < b.rank) return -1;
          if (a.rank > b.rank) return 1;
  
          return 0;
        });
      }
  
      return null;
    };


    caculateRank(name)
    {
       var charInString  = name.split('');
       var sum = 0;
       for (var j= 0 ;j< charInString.length ; j++)
       {
        sum = sum + algo[charInString[j].toLowerCase()]
         
       }
       var finalRank = this.sumSplit(sum)

       return finalRank
    }
    sumSplit(sum){
      if (sum > 9){
        sum1 = 0
        while (sum) {
          sum1 += sum % 10;
          sum = Math.floor(sum / 10);

      }
   return   this.sumSplit(sum1)
      }else{
        return sum
      }
    }
    

    render() {
      return (
        <View style={{alignItems:'center',margin:10}}>
         
         <FlatList
  data={this.state.copyData}
  keyExtractor={item => item.Key}
  renderItem={({item}) => 
    <TouchableHighlight onPress={()=> console.log("")}>
      <View style={{flexDirection:'row',}}>
  <Text style={{fontSize:19,color:'green'}}>{item.name}</Text>
  <Text style={{fontSize:19,color:'red',}}>{item.rank}</Text>
  </View>
  </TouchableHighlight>
  
  }
/>

        
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
  