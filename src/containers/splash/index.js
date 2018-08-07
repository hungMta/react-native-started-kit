import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import styleApp from "../../styles";

const key = require("../../constants/keyScreen");
class Splash extends Component {
  constructor(props) {
    super(props);
    Actions.replace(key.TAB_MAIN)
  }

  render() {
    return (
      <View style={styleApp.center}>
    
      </View>
    );
  }
}

export default Splash;
