import React,{Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Container, Header, Left, Right, Button, Icon, Content, Body, Card, CardItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import { CardInfo } from './../components/Cards';

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state= {
            rowOne: [
                {
                    icon: 'flight',
                    type: 'MaterialIcons',
                    text: 'Flight',
                    color: 'skyblue'
                },
                {
                    icon: 'hotel',
                    type: 'MaterialIcons',
                    text: 'Hotels',
                    color: 'blue'
                },
                {
                    icon: 'paper-plane',
                    text: 'Flights',
                    color: 'purple'
                },
                {
                    icon: 'ticket',
                    type: 'Entypo',
                    text: 'Activ',
                    color: 'green'
                },
                {
                    icon: 'restaurant',
                    text: 'Eats',
                    color: 'red'
                },
            ],
            rowTwo: [
                {
                    icon: 'train',
                    text: 'Trains',
                    color: 'orange'
                },
                {
                    icon: 'bus',
                    text: 'Bus',
                    color: '#6df751'
                },
                {
                    icon: 'airport-shuttle',
                    type: 'MaterialIcons',
                    text: 'Airport',
                    color: '#50eef7'
                },
                {
                    icon: 'car',
                    text: 'Rental',
                    color: '#10962f'
                },
                {
                    icon: 'menu',
                    text: 'All',
                    color: 'grey',
                    type: 'Entypo'
                }
            ]
        }
    }
    render(){
        return(
            <Container>
            <Header style={{backgroundColor: '#2B9FDC', height: 40}}>
              <Left>
                <Image
                    source={require('../pict/logo.png')}
                    style={{width: 80, height: 20}}
                />
              </Left>
              <Right>
                  <Button transparent onPress={()=>alert('pressed')}>
                    <Icon name='more'/>
                  </Button>
              </Right>
            </Header>
            <Content>
                <CardItem style={{borderBottomWidth: 1.5, borderBottomColor: '#dedfe0'}}>
                    <Icon style={{color: 'grey'}} name='person'/>
                    <Body><View style={{marginLeft: 3, width: 270}}>
                        <Text style={{fontSize: 13, fontWeight: '100'}}>Log in or Register</Text>
                        <Text style={{color: 'grey', marginTop: 4, fontSize: 10, fontWeight: '100'}}>Enjoy your Traveloka member benefits!</Text></View>
                    </Body>
                </CardItem>
                <View style={{height: 200, backgroundColor: 'white', marginTop: 10, marginRight: 3, marginBottom: 10, marginLeft: 3}}>
                    <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Row style={{marginLeft: 25, marginRight: 10, marginTop: 20}}>
                            {this.state.rowOne.map((item, key)=>
                                <ListItems item={item} key={key}/>
                                )}
                        </Row>
                        <Row style={{marginLeft: 25, marginTop: 25, marginRight: 10}}>
                            {this.state.rowTwo.map((item, key)=>
                                <ListItems item={item} key={key}/>
                                )}
                        </Row>
                        <Row>
                        </Row>
                    </Grid>
                </View>
                <Card>
                    <CardItem>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Ongoing Promos</Text>
                        <Right>
                            <Icon style={{color: 'blue', fontSize: 15, marginRight: -45}} name='ios-arrow-forward'/></Right>
                    </CardItem>
                </Card>
                <View style={{height: 100, backgroundColor: 'white'}}>
                    <ScrollView horizontal>
                        <Image style={{width: 90, height: 90, marginLeft: 13}} source={require('../pict/promo/How-to-Use-Your-Traveloka-Coupon-Code-FB.png')} />
                        <Image style={{width: 250, height: 90, marginLeft: 13, resizeMode: 'stretch'}} source={require('../pict/promo/traveloka.jpg')} />
                        <Image style={{width: 250, height: 90, marginLeft: 13, resizeMode: 'stretch'}} source={require('../pict/promo/traveloka-1530359681.png')} />
                        <Image style={{width: 90, height: 90, marginLeft: 13, resizeMode: 'stretch'}} source={require('../pict/promo/cgv_traveloka_09102018.jpg')} />                    
                    </ScrollView>
                </View>
                <View style={{marginTop: 30, marginBottom: 60, height: 100, backgroundColor: 'blue'}}>
                        <View style={{marginTop: 17, marginLeft: 20}}>
                            <Text style={{fontSize: 15, color: 'white', fontWeight: '100'}}>Enable Your Location</Text>
                            <Text style={{fontSize: 10, color: 'white', fontWeight: '100'}}>For the most relevant product recommendations</Text>
                            <Text style={{marginTop: 4, color: 'white', fontSize: 15, fontWeight: '100'}}>Go To Settings</Text>
                        </View>
                </View>
            </Content>
            </Container>
        )
    }
}

class ListItems extends Component{
    render(){
        return(
            <Col style={{justifyContent: 'center', alignItems: 'center', justifyContent: 'center', alignItems: 'center', marginLeft: 5}}>
                <Button icon iconLeft rounded style={{width: 40,height: 40, backgroundColor: this.props.item.color}}>
                <View transparent>
                <Icon name={this.props.item.icon} type={this.props.item.type} color='white' fontSize= '19'/>
                </View></Button>
                <Text style={{fontSize: 10,marginRight: 25, marginTop: 5}}>{this.props.item.text}</Text>
            </Col>
        )
    }
}