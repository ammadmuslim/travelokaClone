import React,{Component} from 'react';
import {View, Content, Text, Icon} from 'native-base';

import HeaderAll from '../components/Header';
import {CardStandart, CardInfoButton} from '../components/Cards';

export default class Booking extends Component{
    render(){
        return(
            <View style={{backgroundColor: '#dedfe0', flex: 1}}>
                <HeaderAll title='My Booking'/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Active E-tickets & Voucher</Text>
                <CardInfoButton/>
                <Text style={{marginLeft: 10, marginTop: 10}}>Purchase List</Text>
                <CardStandart color='blue' icon='library-books' typeIcon='MaterialIcons' name='View your purchase history'/>
            </View>
        )
    }
}