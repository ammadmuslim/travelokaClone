import React, {Component} from 'react';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import { View, Text, Content } from 'native-base';

import MessageScreen from '../screens/MessageScreen';
import NotifScreen from '../screens/NotifScreen';

const AppNavigator = createMaterialTopTabNavigator({
  NOTIFICATIONS: {
    screen: NotifScreen
  },
  MESSAGES: {
    screen: MessageScreen
  }
},{
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'skyblue',
    style: {
      backgroundColor: 'white',
      height: 40
    },
    indicatorStyle: {
      backgroundColor: 'blue'
    },
    labelStyle: {
      fontSize: 10
    } 
  }
});

export default createAppContainer(AppNavigator);

// import  React from 'react';
// import {Tabs, Tab, Content, Container} from 'native-base';

// // import NotifTab from '';
// // import MessageTab from '';

// export default class InboxNav extends React.Component{
//   render(){
//     return(
//       <Content>
//       <Tabs height= '10'>
//         <Tab initialPage heading='Notification'></Tab>
//         <Tab heading='Message'></Tab>
//       </Tabs>
//       </Content>
//     )
//   }
// }
