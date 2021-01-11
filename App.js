import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
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
  ABYSS: {toRender: Abyss, left: Abyss, right: Menu},
  MENU : {toRender: Menu,  left: Abyss, right: Reality},
  REALITY: {toRender: Reality, left: Menu, right: Reality},
};
//currentScreen = screens.ABYSS

//The current screen is stored in the 'state.currentScreen', and that is rendered
class Main extends Component {
  //state = {currentScreen: screens.ABYSS};
  state = {refresh: false, index: 0};

  constructor(props) {
    super(props);
    this.changeToMain = this.changeToMain.bind(this);
  }

  test(state, obj) {
    console.log("scrolling: ", state.isScrolling);
    console.log("index: ", state.index);
    obj.setState({refresh: !state.isScrolling, index: state.index})
    //console.log(context.state)
  }
  
  render() {
      console.log("--------")
      console.log("At App: ", this.state);
      return (
        <View style={styles.container}>
          <Swiper 
            loop={false}
            showsPagination={false}
            showsHorizontalScrollIndicator={true}
            onMomentumScrollBegin={(e, state, context) => this.test(state, this)}
          >
            <Abyss nextPost={this.state.refresh && this.state.index == 0}/>
            <Menu />
            <Reality nextPost={this.state.refresh && this.state.index == 2}/>

          </Swiper>
        </View>
      );
  }

  //onIndexChanged={(index) => {this.indexchanged(index)}}

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