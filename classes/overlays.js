import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import Menu from './screens/Menu';


var screens = {
    MENU : {toRender: Menu}
  };

  class AbyssOverlay extends Component {
    render(props) {
        console.log("At abyss overlay. Opacity: ", this.props.opacity);
        //opacity
        //style={{opacity: '.3'}}
        return (
            <TouchableHighlight style={[styles.abyssOverlay, {opacity: this.props.opacity}]} onPress={() => this.middleChange(this.props)}>
                
                    <Text></Text>
                
            </TouchableHighlight>
        );
    }

    middleChange(props) {
        console.log("Should be changing to abyss");
        this.props.change(1);
    }
}

class ProfileOverlay extends Component {
    render(props) {
        return (
            <TouchableHighlight style={[styles.profileOverlay, {opacity: this.props.opacity}]} onPress={() => this.middleChange(this.props)}>
                <Text></Text>
            </TouchableHighlight>
        );
    }

    middleChange(props) {
        this.props.change(2);
    }
}



class RealityOverlay extends Component {
    render(props) {
        return (
            <TouchableHighlight style={[styles.realityOverlay, {opacity: this.props.opacity}]} onPress={() => this.middleChange(this.props)}>
                <Text></Text>
            </TouchableHighlight>
        );
    }

    middleChange(props) {
        this.props.change(3);
    }
}

const styles = StyleSheet.create({
    selected: {
        opacity: 1,
    },
    unselected: {
        opacity: .3,
    },
    profileOverlay: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 9999,
        position: 'absolute',
        bottom: '-47%',
        backgroundColor: 'black',
      },
    abyssOverlay: {
        width: '100%',
        aspectRatio: 1.25,
        borderRadius: 9999,
        position: 'absolute',
        margin: '-32%',
        bottom: '0%',
        left: '0%',
        backgroundColor: 'black',
      },
    realityOverlay: {
        width: '100%',
        aspectRatio: 1.25,
        borderRadius: 9999,
        position: 'absolute',
        margin: '-32%',
        bottom: '0%',
        right: '0%',
        backgroundColor: 'black',
      }
  });

  export {AbyssOverlay, ProfileOverlay, RealityOverlay};