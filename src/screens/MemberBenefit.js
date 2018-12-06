import React, {Component} from 'react';
import {Container, Header, Button, Left, Title, Text, Icon, View, Body} from 'native-base';
import { StackActions } from 'react-navigation';

const popAction = StackActions.pop({
  n: 1,
});

export default class MemberBenefit extends Component{
    render(){
        
        return(
            <Container>
            <Header style={{backgroundColor: '#2B9FDC', height: 40}}>
              <Left>
                <Button transparent 
                   onPress={()=>this.props.navigation.dispatch(popAction)}>
                  <Icon style={{fontSize: 15}} name='arrow-back' />
                </Button>
              </Left>
              <Body style={{marginRight: 200}}>
                <Text style={{color: 'white'}}>Member</Text>
              </Body>
            </Header>
          </Container>      
        )
    }
}