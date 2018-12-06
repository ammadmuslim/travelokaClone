import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { Header, Left, Right, Button, Icon, Card} from 'native-base';
import { Col, Row, Grid} from 'react-native-easy-grid';

import {Cards, CardList, CardStandart, CardSettings, CardTranlance} from '../components/Cards';

class MessageScreen extends Component{
    static navigationOption ={
        header: null
    }

render (){
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#E6EAED'}}>
            {/* <Image source={{uri: 'https://tvlk.imgix.net/imageResource/2018/04/30/1525085827513-df39b4fe1756c081cfc1db7e38a08539.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75'}}
            style={{width: 100, height: 100}} /> #E6EAED */}
            <Image source={require('../pict/noInbox.png')} style={{width: 350, height: 180}} />    
            <Text style={{marginTop: 5}}>Need help with your booking?</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Button style={{backgroundColor: 'white', height: 40, width: 150, marginRight: 10}}><Text style={{color: 'blue', marginLeft: 25}}>Send Message</Text></Button>
                <Button style={{backgroundColor: 'blue', height: 40, width: 120, marginLeft: 10}}><Text style={{color: 'white', marginLeft: 25}}>Learn FAQ</Text></Button>
            </View>
        </View>
    );
}
}
export default MessageScreen


