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
      <Text style = {styles.text}>This week is an amazing one for you. You will make your dreams come true. Keep working with connfidence and there will be nothing you cannot achieve!</Text>
      <TouchableOpacity style = {styles.back} onPress = {()=>{
        this.goBack()
      }}><Text style = {styles.backet}>Back</Text></TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text : {
    fontSize : 20,
    marginTop : 100
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