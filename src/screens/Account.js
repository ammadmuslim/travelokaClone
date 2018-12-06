import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {Container, Header, Left, Right, Button, Icon, Content, Card} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import {Cards, CardList, CardStandart, CardSettings, CardTranlance} from '../components/Cards';
import HeaderAll from '../components/Header'; 
import MemberBenefit from '../screens/MemberBenefit';
import HomeScreen from '../screens/Home';

// class HomeScreen extends Component {
//     static navigationOptions = {
//       title: 'Welcome',
//     };
//     render() {
//       const {navigate} = this.props.navigation;
//       return (
//         <Button
//           title="Go to Jane's profile"
//           onPress={() => navigate('Profile')}
//         />
//       );
//     }
//   }

class MainScreen extends Component{
    constructor(props){
        super(props)
        this.state= {
            stateContent: [
                {
                    icon: 'coins',
                    typeIcon: 'MaterialCommunityIcons',
                    head: 'My Refund',
                    content: 'Manage your refund in one place'
                },
                {
                    icon: 'coins',
                    typeIcon: 'MaterialCommunityIcons',
                    head: 'Passenger Quick Pick',
                    content: 'Fill in passenger details now, pick passengers quickly later.'
                },
                {
                    icon: 'coins',
                    typeIcon: 'MaterialCommunityIcons',
                    head: 'My Bills',
                    content: 'Manage your Bills & Top-up accounts with ease'
                },
                {
                    icon: 'coins',
                    typeIcon: 'MaterialCommunityIcons',
                    head: 'Price Alert',
                    content: 'Be the first to know when  airfare changes'
                }
            ],
            stateSettings: [
                {
                    icon: 'coins',
                    typeIcon: 'MaterialCommunityIcons',
                    head: 'Help Center',
                    content: 'Find the best answer to your questions'
                },
                {
                    icon: 'coins',
                    typeIcon: 'MaterialCommunityIcons',
                    head: 'Settings',
                    content: 'View and set your account preferences'
                }
            ]
        }
    }

render (){
    const {navigate} = this.props.navigation
    return(
      <Container style={{}}>
          <HeaderAll title='My Account'/>
          <Content>
               <Header style={{backgroundColor: '#2B9FDC', height: 120}}>
                <View>
                <Text style={{color: 'white', marginTop: 20}}>Become a member and enjoy the benefit!</Text>
                <Grid style={{marginTop: 20}}>
                    <Col size={50}><Button onPress={()=> navigate('Profile')} style={{backgroundColor: 'white', height:30, width: 150, marginRight: 40}}><Text style={{color: 'blue'}}>Log In</Text></Button></Col>
                    <Col size={50}><Button style={{backgroundColor: 'blue', height:30, width: 150, marginLeft: 40}}><Text style={{color: 'white'}}>Register</Text></Button></Col>
                </Grid>
                </View>
              </Header>
              <Content style={{backgroundColor: '#dedfe0'}}>
                  <CardStandart icon='coins' name='My Poins' typeIcon='MaterialCommunityIcons'/>
                  <CardList/>
                  <View style={{marginTop: 20}}>
                  <View>
                      {this.state.stateContent.map((item, key) =>
                        <Cards item={item} key={key}/>
                        )}
                  </View>
                  </View>
                  <View style={{marginTop: 20}}>
                    <View>
                        {this.state.stateSettings.map((item, key) =>
                            <Cards item={item} key={key}/>
                            )}
                    </View>
                  </View>
                  <CardTranlance/>
              </Content>
          </Content>
      </Container>
    );
}
}

const AccountNav = createStackNavigator(
    {
        Main: {
            screen: MainScreen
        },
        Profile: {
            screen: MemberBenefit
        }
    },
    {
        headerMode: "none"
    }
)

export default createAppContainer(AccountNav);


