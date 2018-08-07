/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Scene, Tabs, Stack } from "react-native-router-flux";
import Login from "./containers/login/index";
import Splash from "./containers/splash/index";
import Home from "./containers/home/index";
import Favourite from "./containers/favourite/index";
import Message from "./containers/message/index";
import Profile from "./containers/profile/index";
import Search from "./containers/search/index";
import Upload from "./containers/upload/index";
import { TabIcon } from "./components/ui/index"
const key = require("./constants/keyScreen");

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key={key.ROOT}>
          <Scene key={key.SPLASH} component={Splash} headerMode="none" initial={true} hideNavBar={true} />
          <Scene key={key.LOGIN} component={Login} headerMode="none" hideNavBar={true} />
          <Tabs key={key.TAB_MAIN} showLabel={false} >
            <Scene key={key.HOME} component={Home} title="home" hideNavBar={true} icon={TabIcon} />
            <Scene key={key.SEARCH} component={Search} hideNavBar={true} title="search" icon={TabIcon} />
            <Scene key={key.UPLOAD} component={Upload} hideNavBar={true} title="upload" icon={TabIcon} />
            <Scene key={key.FAVOURITE} component={Favourite} hideNavBar={true} title="favourite" icon={TabIcon} />
            <Scene key={key.PROFILE} component={Profile} hideNavBar={true} title="profile" icon={TabIcon} />
          </Tabs>
        </Stack>
      </Router>
    );
  }
}
