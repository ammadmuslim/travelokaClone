// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Container, Header, Left, Body, Right, Content, Icon, Button} from 'native-base';
// import {createBottomTabNavigator, createAppContainer, TabBarBottom} from 'react-navigation';

// import {Ionicons} from 'react-native-vector-icons/Ionicons';

// class HomeScreen extends React.Component{
//     render(){
//       return(
//         <Container>
//             <Header>
//                 <Left><Text style={{fontColor: 'blue'}}>Traveloka</Text></Left>
//                 <Right><Button transparent><Icon name='more'/></Button></Right>
//             </Header>
//             <Content></Content>
//         </Container>
//       )
//     }
// }
  
// class DetailsScreen extends React.Component{
//    render(){
//      return(
//        <View>
//          <Text>Detail screens</Text>
//        </View>
//      )
//    }
// }

// // const AppContainer = createAppContainer(createBottomTabNavigator(
// //  {
// //     Home: HomeScreen,
// //     Saved: DetailsScreen,
// //     //Booking: OrderScreen,
// //  }
// // ));

// export default AppContainer;


// const styles = StyleSheet.create({
//     header: {
        
//     },
// })

// class OrderScreen extends React.Component{
//     render(){
//         return(
//             <View><Text>Order</Text></View>
//         )
//     }
// }


import React, {Component} from 'react';
import Logo from './Logo';
import { Button, Platform } from 'react-native';
import Nav from '../Navigations/Nav';

export default class HomePage extends Component{
    // static navigationOptions =  { 
    //     return{
    //         headerTitle: <Logo/>
    //         headerRight: ( 
    //             <Button
    //                 title='ok'
    //             />
    //         ),
        
    // }    

    render(){
        return(
            <Nav/>
        )
    }
}





