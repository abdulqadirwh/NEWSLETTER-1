import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View>
      <Text style = {styles.appHeader}>News Letter App</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  appHeader : {
    backgroundColor : 'yellow',
    fontSize : 25,
    alignContent : "center",
    textAlign : 'center'
  }
})