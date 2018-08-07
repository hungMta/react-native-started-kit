import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styleApp from "../../styles";
// import Icon from "react-native-vector-icons/Ionicons"

class Home extends Component {
  render() {
    return (
      <View style={[styleApp.container, styleApp.center]}>
        <Text>Home</Text>
        {/* <Icon name="ios-add" color="black" /> */}
      </View>
    );
  }
}

export default Home;
