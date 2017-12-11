import { AppRegistry,StyleSheet } from 'react-native';
import  Project  from './App';
import React, { Component } from 'react';
import LoginForm from './LoginForm';
import  animations  from './TimingAnimation'
import animation from './easeFunction'
import App from './BottomBar'
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import configureStore from './src/store/configStore'; 
const store = configureStore()
import StartNavigator from './StartNavigator'
// create a component
const abc = () => {
    return (
        <Provider store={store}>
          <StartNavigator/>
        </Provider>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});




AppRegistry.registerComponent('LoginProject', () => abc);


// import React, {
//     Component
// } from "react";

// import {
//     AppRegistry,
    
// } from "react-native";
// import Navigator from 'react-native-deprecated-custom-components'
// import * as firebase from "firebase";

// import Home from "./views/home";
// import Login from "./views/login";
// import Firebase from "./firebase/firebase";

// class Initial extends Component {

//   constructor(props) {
//     super(props);

//     Firebase.initialise();

//     this.getInitialView();

//     this.state = {
//       userLoaded: false,
//       initialView: null
//     };

//     this.getInitialView = this.getInitialView.bind(this);

//   }

//   getInitialView() {

//     firebase.auth().onAuthStateChanged((user) => {

//       let initialView = user ? "Home" : "Login";

//       this.setState({
//         userLoaded: true,
//         initialView: initialView
//       })
//     });


//   }

//   static renderScene(route, navigator) {

//     switch (route.name) {

//       case "Home":
//         return (<Home navigator={navigator} />);
//         break;

//       case "Login":
//         return (<Login navigator={navigator} />);
//         break;

//     }

//   }

//   static configureScene(route) {

//     if (route.sceneConfig) {
//       return (route.sceneConfig);
//     } else {
//       return ({
//         ...Navigator.SceneConfigs.HorizontalSwipeJump,
//         gestures: {}
//       });
//     }

//   }

//   render() {

//     if (this.state.userLoaded) {

//       return (
//           <Navigator
//               initialRoute={{name: this.state.initialView}}
//               renderScene={Initial.renderScene}
//               configureScene={Initial.configureScene}
//           />);
//     } else {
//       return null;
//     }

//   }

// }
// AppRegistry.registerComponent('LoginProject', () => Initial);