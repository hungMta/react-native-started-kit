import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styleApp from "../../styles";

class Favourite extends Component {
  render() {
    return (
      <View style={[styleApp.container, styleApp.center]}>
        <Text>Favourite</Text>
      </View>
    );
  }
}

export default Favourite;
