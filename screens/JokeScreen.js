import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component{
  goBack=()=>{
    this.props.navigation.navigate('HomeScreen')
  }
  render(){
    return(
      <View>
      <View style = {styles.joke}>
      <Text style = {styles.font}>What do you call a three humped camel?</Text>
      <Text style = {styles.font}>A.) Pregnant!</Text>
      </View>
      <Text style = {styles.haha}>HAHAHA!!!</Text>
      <TouchableOpacity style = {styles.back} onPress = {()=>{
        this.goBack()
      }}><Text style = {styles.backet}>Back</Text></TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  joke : {
    marginTop : 100,
  },
  font : {
    fontSize : 20
  },
  haha : {
    fontSize : 30,
    marginTop : 100,
    marginLeft : 80
  },
  back : {
    backgroundColor : 'pink',
    marginTop : 100,
    borderWidth : 2,
    borderColor : 'pink',
    marginLeft : 120,
    borderRadius : 10,
    width : 50,
  },
  backet : {
    fontSize : 20,
    fontWeight : 'bold'
  }
})