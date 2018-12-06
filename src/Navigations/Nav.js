import React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

//import Header from '../components/Header';
import LoginScreen from '../screens/Account';
import InboxScreen from '../screens/Inbox';
import BookingScreen from '../screens/Booking';
import SavedScreen from '../screens/Saved';
import HomeScreen from '../screens/Home';

const HomeRoute = () => <HomeScreen/>;
const SavedRoute = () => <SavedScreen/>;
const BookedRoute = () => <BookingScreen/>;
const InboxRoute = () => <InboxScreen/>;
const AccountRoute = () => <LoginScreen/>;


export default class Nav extends React.Component{
    state ={
      index: 0,
      routes: [
          { key: 'home', title: 'Home', icon: 'store'},
          { key: 'saved', title: 'Saved', icon: 'bookmark-border'},
          { key: 'booked', title: 'My Booking', icon: 'poll'},
          { key: 'inbox', title: 'My Inbox', icon: 'mail'},
          { key: 'account', title: 'My Account', icon: 'person'},
      ],
    };

    _handleIndexChange = index => this.setState({index});

    _renderScene = BottomNavigation.SceneMap(
      {
        home: HomeRoute,
        saved: SavedRoute,
        booked: BookedRoute,
        inbox: InboxRoute,
        account: AccountRoute,
      },
      );

    // _renderLabel({
    //     color: 'black',
    // })=>;

    render(){
        return(
            <BottomNavigation
                barStyle={{backgroundColor: 'white', borderTopWidth: 0.25, color: 'grey'}}
                activeColor= 'blue'
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                shifting={false}
            />
        );
    }
}