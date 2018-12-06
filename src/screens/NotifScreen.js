import React, {Component} from 'react';

import {CardInfo} from '../components/Cards';
import { View } from 'native-base';
import { Card } from 'react-native-paper';

export default class NotifScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            stateContent: [
                {
                  icon: 'coins',
                  typeIcon: 'MaterialCommunityIcons',
                  head: 'Notifikasi Kursi: Ada Kereta Tambahan',
                  content: 'PT Kai baru saja menambahkan kerete Tegal -> Pasar Senen Pesen segera sebelum kehabisa. ',
                  foot: '24 Nov at 14.54'
                },
                {
                  icon: 'coins',
                  typeIcon: 'MaterialCommunityIcons',
                  head: 'Notifikasi Kursi: Ada Kereta Tambahan',
                  content: 'PT Kai baru saja menambahkan kerete Tegal -> Pasar Senen Pesen segera sebelum kehabisan.',
                  foot: '24 Nov at 18.01'
                },

            ]
        }
    }

    render(){
        return(
            <View>
                {this.state.stateContent.map((item, key) =>
                    <CardInfo item={item} key={key}/>
                    )}
            </View>
        )
    }
}