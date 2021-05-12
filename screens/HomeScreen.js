import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToJoke = () => {
    this.props.navigation.navigate('JokeScreen');
  };
  goToHoro = () => {
    this.props.navigation.navigate('HoroscopeScreen');
  };
  goToNews = () => {
    this.props.navigation.navigate('NewsScreen');
  };
  goToSky = () => {
    this.props.navigation.navigate('WeatherScreen');
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToJoke();
          }}>
          Jokes Zone
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => {
            this.goToHoro();
          }}>
          Horoscope of the Week
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => {
            this.goToSky();
          }}>Weather Today</TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => {
            this.goToNews();
          }}>News Today</TouchableOpacity>
        <View style={styles.likes}>
          <Image style={styles.logo1} source={require('../thumbsdown.png')} />
          <Image style={styles.logo2} source={require('../thumbsup.png')} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 70,
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 20,
  },
  logo1: {
    marginLeft: 100,
    marginTop: 30,
    height: 50,
    width: 50,
  },
  logo2: {
    marginLeft: 200,
    marginTop: -60,
    height: 50,
    width: 50,
  },
});
