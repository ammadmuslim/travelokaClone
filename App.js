import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './src/Navigations/Nav';

export default class App extends React.Component{
  render(){
    return(
      <Home/>
    );
  }
}

// const AppNavigator=createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen
//   }, 
//   {
//     initialRouteName: 'Home'
//   }
// );


