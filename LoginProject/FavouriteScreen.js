import React, {Component} from 'react';
import {StyleSheet,Image,Button,FlatList,Text,Dimensions,View,TouchableOpacity,TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
class FavouriteScreen extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      dataToRender :[]
     }
    }
    static navigationOptions = {
      tabBarLabel: 'Tab3',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./asset/conRoomWhite.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
    onpress = (item)=>{
    }


    componentWillReceiveProps(nextProps)
    {
      if (this.props.fulldata != nextProps.fulldata)
      {
        this.setState({dataToRender:nextProps.fulldata})
      }

    }
  
    render() {
      console.log("full data")
      console.log(this.props.fulldata)
      return (
       <View>
                 <FlatList
  data={this.state.dataToRender}
  keyExtractor={item => item.Key}
  renderItem={({item}) => 
    <TouchableHighlight onPress={()=>this.onpress(item)}>
      <View style={{flexDirection:'row',}}>
  <Text style={{fontSize:19,color:'green'}}>{item.name}</Text>
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
  const mapStateToProps = state =>{
    console.log("render screen")
    console.log(state.selectedReducer.selectedData)
return{
  fulldata:state.selectedReducer.selectedData
};
  };
  export default connect(mapStateToProps,null)(FavouriteScreen);

  