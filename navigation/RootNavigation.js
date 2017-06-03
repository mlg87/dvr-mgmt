import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
// import {
//   StackNavigation,
//   TabNavigation,
//   TabNavigationItem,
// } from '@expo/ex-navigation';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import {
  Icon,
  Container,
} from 'native-base';

import Routes from './Routes';
import HomeScreen from '../screens/HomeScreen';
import styles from '../styles/rootNavigation';
import Alerts from '../constants/Alerts';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';

const Navigator = StackNavigator({
  ...Routes,
  Index: {
    screen: HomeScreen,
  },
}, {
  initialRouteName: 'home',
  headerMode: 'screen',
  headerVisible: true,
  navigationOptions: {
    headerBackTitle: null,
    headerTintColor: 'blue',
    headerTitleStyle: {
      fontFamily: 'open-sans',
      fontSize: 20,
      color: 'white',
    },
    headerStyle: {
      backgroundColor: 'red',
      borderBottomWidth: 0,
      borderBottomColor: 'transparent',
      height: 76,
    }
  }
});

// EXPO GENERATED STUFF
export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </Container>
    );
  }

  // expo:::
  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
  // expo:::
  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }
  // expo:::
  _handleNotification = ({ origin, data }) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  };
}
