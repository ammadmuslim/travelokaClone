import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Left, Right, Button, Content, Card} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';

import {Cards, CardList, CardStandart, CardSettings, CardTranlance} from '../components/Cards';
import InboxTabs from '../Navigations/InboxNav';
import HeaderAll from '../components/Header'; 

class InboxScreen extends Component{
    static navigationOption ={
        header: null
    }

render (){
    return(
      <Container style={{backgroundColor: '#dedfe0'}}>
          {/* <Header style={{backgroundColor: '#2B9FDC', height: 40}}>
              <Left>
                  <Text style={{color: 'white', marginLeft: 10}}>My Inbox</Text>
              </Left>
              <Right>
                  <Button transparent onPress={()=>alert('pressed')}>
                    <Icon name='more'/>
                  </Button>
              </Right>
          </Header> */}
          <HeaderAll title='My Inbox'/>
          <InboxTabs/>
      </Container>
    );
}
}
export default InboxScreen