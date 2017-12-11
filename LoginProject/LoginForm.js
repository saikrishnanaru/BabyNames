//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,Animated,
  TouchableHighlight
} from "react-native";

// animate(){
//   let {paddingAnimation} = this.state;
//   Animated.timing( paddingAnimation, { toValue: 100, duration: 100}).start();
// }
// In Render
// <AnimatedInputText style={[styles.search, {margin: paddingAnimation}]}>



// create a component
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isVisiblity: false,
      errorName:'',
      paddingAnimation: new Animated.Value(40),

    };
  }
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  componentWillMount()
  {
    Animated.timing( this.state.paddingAnimation, { toValue: 100, duration: 1000}).start();

  }

  // async function getMoviesFromApi() {
  //   try {
  //     let response = await fetch('https://facebook.github.io/react-native/movies.json'{
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         firstParam: 'yourValue',
  //         secondParam: 'yourOtherValue',
  //       });
  //     let responseJson = await response.json();
  //     return responseJson.movies;
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }
  
  onLogin = () => {

    if (!this.validateEmail(this.state.name)) {
        //error
        this.setState({errorName:'please valid username'})
      } else {
        this.setState({errorName:''})
        // valid email
      }


  };
  render() {
    const  { textOnOpen }= this.props;
    return (
      <View style={styles.container}>
        <Animated.Text style={[{paddingLeft: this.state.paddingAnimation}]}>
        LoginForm
          </Animated.Text>
        <View style={{ justifyContent: "center" }}>
          <Text> userName</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={name => {
              console.log(name);
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <Text style={{ textAlign: "left",color:'red' }}> {this.state.errorName}</Text>


          <Text style={{ textAlign: "left" }}> password</Text>

          <View>
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              keyboardType={"email-address"}
              secureTextEntry={this.state.isVisiblity}
              onChangeText={password => {
                this.setState({ password });
              }}
              value={this.state.password}
            />
            <TouchableHighlight
              onPress={() => {
                this.setState({ isVisiblity: !this.state.isVisiblity });
              }}
            >
              <Text>show</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            width: 300,
            height: 50,
            justifyContent: "center",
            backgroundColor: "#841584",
            marginTop: 15
          }}
        >
          <Button title={`${textOnOpen}`} onPress={this.onLogin} color="black" />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10
  }
});

//make this component available to the app
export default LoginForm;

