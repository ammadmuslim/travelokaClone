import React, { Component } from "react";
import { Card, CardItem, Text, Body, Content, Header, Icon, Right, Left, Button } from "native-base";
import {View} from 'react-native';
//import {NavigationActions} from 'react-navigation';

// const navigateAction = NavigationActions.navigate({
//     routeName: 'account',
//     params: {},
//     action: NavigationActions.navigate({ routeName: 'SubProfileRoute'}),
// });

export class Cards extends Component{
    render(){
        return(
        <CardItem style={{marginLeft: 10, marginRight: 10.5}}>
            <Icon name={this.props.item.icon} type={this.props.item.typeIcon}/>
                <Body><View style={{marginLeft: 3, width: 270}}>
                    <Text style={{fontSize: 13, fontWeight: '100'}}>{this.props.item.head}</Text>
                    <Text style={{color: 'grey', marginTop: 4, fontSize: 10, fontWeight: '100'}}>{this.props.item.content}</Text></View>
                </Body>
                <Right><Icon style={{color: 'blue', fontSize: 15}} name='ios-arrow-forward' /></Right>
        </CardItem>
        )
    }
}

export class CardList extends Component{
    render(){
        return(
            <Card style={{marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                <CardItem bordered  style={{height: 50, backgroundColor: 'white'}} header button onPress={()=>alert('pressed')}>
                    <Body>
                    <Text style={{fontSize: 11}}>travelokaPay</Text>
                    </Body>
                    <Right>
                        <Icon style={{color: 'blue', fontSize: 15}} name="ios-arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon name="credit-card" type="Entypo" color='white'/>
                    <Text style={{fontSize:13}}>My Cards</Text>    
                </CardItem>
                <CardItem>
                    <Icon name='coins' type='MaterialCommunityIcons'/>
                    <Text style={{fontSize:13}}>Direct Debit</Text>  
                </CardItem>
            </Card>
        )
    }
} 

export class CardStandart extends Component{
    render(){
        return(
            <Card style={{marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                <CardItem>
                    <Icon name={this.props.icon} type={this.props.typeIcon} style={{color: this.props.color, fontSize: 25}}/>  
                    <Body><View style={{width: 270}}>
                        <Text style={{fontSize: 13}}>{this.props.name}</Text>
                        </View></Body>
                    <Right><Icon style={{color: 'blue', fontSize: 15}} name='ios-arrow-forward'/></Right>
                </CardItem>
            </Card>
        )
    }
}

// 

export class CardInfo extends Component{
    render(){
        return(
            <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'/*marginTop: 20, marginLeft: 10, marginRight: 10 */}}>
                <CardItem>
                    <Icon name={this.props.item.icon} type={this.props.item.typeIcon}/>
                    <Body><View style={{marginLeft: 3, width: 270}}>
                        <Text style={{fontSize: 10, fontWeight: '100'}}>{this.props.item.head}</Text>
                        <Text style={{fontSize: 10, fontWeight: '100'}}>{this.props.item.content}</Text>
                        <Text style={{marginTop: 4, fontSize: 10, fontWeight: '100'}}>{this.props.item.foot}</Text></View>
                    </Body>
                    {/* <Icon name='more'/>*/}<Right><Icon name='more'/></Right>
                </CardItem>
            </View>
        )
    }
}

export class CardTranlance extends Component{
    render(){
        return(
            <Card>
            <CardItem style={{backgroundColor: '#dedfe0'}}></CardItem>
            </Card>
        )
    }
}

export class CardInfoButton extends Component{
    render(){
        return(
            <View style={{borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: 20, marginLeft: 10, marginRight: 10}}>
                <CardItem>
                    <Icon/>
                    <Body><View style={{marginLeft: 3, width: 270}}>
                        <Text style={{fontSize: 12, fontWeight: '100'}}>No Activate E-tickets and Vouchers Found {/*this.props.item.head*/}</Text>
                        <Text style={{fontSize: 9, fontWeight: '100', marginTop: 10}}>Your Activate tickets/vouchers will appear here once you've made a purchase. Log in or register 
                        to view and manage them with eade </Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Button style={{backgroundColor: '#eff0f2', height: 30, width: 100, marginRight: 10, justifyContent: 'center'}}><Text style={{color: 'blue', fontSize: 12, fontWeight: 'bold'}}>Login</Text></Button>
                            <Button style={{backgroundColor: 'blue', height: 30, width: 100, marginLeft: 10, justifyContent: 'center'}}><Text style={{ color: 'white',  fontSize: 12, fontWeight: 'bold'}}>Register</Text></Button>
                        </View>
                    </View></Body>
                </CardItem>
            </View>
        )
    }
}

// export class CardSettings extends Component{
//     //     render(){
//     //         return(
//     //           <Card style={{marginTop: 20, marginLeft: 10, marginRight: 10 }}>
//     //             <CardItem  style={{height: 50, backgroundColor: 'white'}} header button onPress={()=>alert('pressed')}>
//     //                 <Icon name='coins' type='MaterialCommunityIcons'/>
//     //                 <Card transparent>
//     //                     <CardItem style={{height: 25, backgroundColor: 'white'}}>
//     //                     <Text style={{fontSize:13}}>Help Center</Text>
//     //                     </CardItem>
//     //                     <CardItem style={{height: 25, backgroundColor: 'white'}}>
//     //                         <Text style={{fontSize: 10, color: 'grey'}}>Find the best answer to your questions</Text>
//     //                     </CardItem>
//     //                 </Card>
//     //                 <Right>
//     //                     <Icon name="ios-arrow-forward" />
//     //                 </Right>
//     //             </CardItem>
//     //             <CardItem  style={{height: 50, backgroundColor: 'white'}} header button onPress={()=>alert('pressed')}>
//     //                 <Icon name='coins' type='MaterialCommunityIcons'/>
//     //                 <View><Card transparent>
//     //                     <CardItem style={{height: 25, backgroundColor: 'white'}}>
//     //                         <Text style={{fontSize:13}}>Settings </Text>
//     //                     </CardItem>
//     //                     <CardItem style={{height: 25, backgroundColor: 'white'}}>
//     //                         <Text style={{fontSize: 10, color: 'grey'}}>View and set your Account preferences</Text>
//     //                     </CardItem>
//     //                 </Card></View>
//     //                 <Right style={{marginLeft: 17}}>
//     //                     <Icon name="ios-arrow-forward" />
//     //                 </Right>
//     //             </CardItem>
//     //           </Card>
//     //         )
//     //     }
//     // }