import React, {Component} from'react';
import {Container, Header as Head, Button, Text, Left, Right, Icon} from 'native-base';
//import { Icon } from 'react-native-paper/typings/components/List';

export default class Header extends Component{
    render(){
        return(
            <Head style={{backgroundColor: '#2B9FDC', height: 40}}>
              <Left>
                  <Text style={{color: 'white', marginLeft: 10}}>{this.props.title}</Text>
              </Left>
              <Right>
                  <Button transparent onPress={()=>alert('pressed')}>
                    <Icon name='more'/>
                  </Button>
              </Right>
            </Head>
        )
    }
}