import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Abyss from './classes/screens/Abyss';
import Menu from './classes/screens/Menu';
import Reality from './classes/screens/Reality';
import {AbyssOverlay, ProfileOverlay, RealityOverlay} from './classes/overlays';

//This is the highest level rendering tool. It renders the whole screen and utilizes 'Main'
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

var screens = {
  MENU : {toRender: Menu},
  REALITY: {toRender: Reality},
  ABYSS: {toRender: Abyss},
  
};
//currentScreen = screens.ABYSS

//The current screen is stored in the 'state.currentScreen', and that is rendered
class Main extends Component {
  state = {currentScreen: screens.ABYSS};

  constructor(props) {
    super(props);
    this.changeToMain = this.changeToMain.bind(this);
  }

  
  render() {
      //this.changeToMain = this.changeToMain.bind(this);
      console.log("--------")
      console.log("At App: ", this.state);
      return (
        <View style={styles.container}>
          <this.state.currentScreen.toRender />
          <ProfileOverlay change={this.changeToMain} opacity={(this.state.currentScreen == screens.MENU) ? 1 : .3}/>
          <AbyssOverlay change={this.changeToMain} opacity={(this.state.currentScreen == screens.ABYSS) ? 1 : .3}/>
          <RealityOverlay change={this.changeToMain} opacity={(this.state.currentScreen == screens.REALITY) ? 1 : .3}/>
        </View>
        
      );
  }

  changeToMain(screenNum) {
    console.log("Changing Screen");
    
    switch (screenNum) {
      case 1:
        this.setState({currentScreen: screens.ABYSS});
        break;
      case 2:
        this.setState({currentScreen: screens.MENU});
        break;
      case 3:
        this.setState({currentScreen: screens.REALITY});
        break;
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});