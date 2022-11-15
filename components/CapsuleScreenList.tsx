/*This is an Example of React Native Add Items to ScrollView using Loop*/
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, TouchableOpacity, SectionList, StatusBar } from 'react-native';
import CapsuleService from './CapsuleService';

import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
//import { Text, View } from './Themed';

const service = new CapsuleService();
let capsules: any[] = [];
  
class CapsuleScreenList extends Component {
    constructor(props){
        super(props);
        this.state = {
          updateList: true,
          capsules: []=[]
        }
    }
    getCapsule() {
      service.findAll("launches").then((resp) => {
              capsules = resp;
              this.setState({capsules: capsules, updateList: true})
              console.log('resp==', resp);
        },
        error => {
            console.log("error====", error);
        });
    }

    render() {
        return (
          <SafeAreaView style={styles.container}>
            <button style={styles.button} onClick={()=> {this.getCapsule()}}>Rechercher</button>
            <View style={styles.separator}  />
            {(capsules.length > 0)? 
              <ScrollView>
                {capsules.map((capsul, key) => {
                    return (
                      <Text key={key} style={styles.item}>{capsul.flight_number}. {capsul.mission_name}</Text>
                    );
                })}
              </ScrollView> : null
            }
          </SafeAreaView>
        );
    }
}
export default CapsuleScreenList;

/* function getCapsule() {
  service.findAll("launches").then((resp) => {
          capsules = resp;
          console.log('resp==', resp);
    },
    error => {
        console.log("error====", error);
    });
} */
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      width: '90%'
    },
    item: {
      color: "#000",
      padding: 15,
      marginVertical: 5
    },
    button: {
      backgroundColor: "#4caf50",
      height: 45,
      borderRadius: 25
    },
    separator: {
      marginVertical: 10,
      height: 1,
      width: '100%',
      color: '#00ff00',
      backgroundColor: "#00ff00"
    },
});
  