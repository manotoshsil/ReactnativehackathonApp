/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements'

export default class ItronEventAwareApp extends Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }

  onSideMenuChange (isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }
  
  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
       <Text></Text>
      </View>
    )
  
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={this.onSideMenuChange.bind(this)}
        menu={MenuComponent}>
        <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ItronEventAwareApp', () => ItronEventAwareApp);
