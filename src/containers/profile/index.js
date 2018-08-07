import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styleApp from "../../styles";

class Profile extends Component {
  render() {
    return (
      <View style={[styleApp.container, styleApp.center]}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;
