import React,{Component} from 'react';
import {Image} from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Button, Text} from 'native-base';

import HeaderAll from '../components/Header';

const cards = [
    {
      name: 'Items from the same category (such as Hotels) are grouped together, so you can easly find them',
      image: require('../pict/promo/cgv_traveloka_09102018.jpg'),
    },
    {
      name: 'Create your bucket list and live your dreams! enjoy this member-only feature. Log in and Register now.',
      image: require('../pict/promo/dapatkan-promo-dari-traveloka-dengan-transaksi-menggunakan-kartu-kredit-citibank.jpg'),
    },
];
export default class Booking extends Component{
    render(){
        return(
            <Container>
            <HeaderAll title='Saved'/>
            <View style={{flex: 5}}>
              <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                  <Card style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    <CardItem style={{width: 250, height: 250}}>
                      <Image style={{height: 250, width: 250, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                      <Text style={{fontSize: 12, textAlign: 'center'}}>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View>
            <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Button style={{backgroundColor: '#dedfe0', height: 40, width: 150, marginRight: 10, justifyContent: 'center'}}><Text style={{color: 'blue', fontSize: 12}}>Login</Text></Button>
                <Button style={{backgroundColor: 'blue', height: 40, width: 150, marginLeft: 10, justifyContent: 'center'}}><Text style={{ color: 'white',  fontSize: 12, fontWeight: 'normal'}}>Register</Text></Button>
            </View>              
            </View>
            </Container>
        );
    }
}