import Expo from 'expo';
import React from 'react';
import {
  Platform,
  StatusBar,
  View,
} from 'react-native';
// import { NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'mobx-react/native';

import RootNavigation from './navigation/RootNavigation';
import Router from './navigation/Router';
import LoginScreen from './screens/LoginScreen';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import stores from './stores';
import styles from './styles/main';

const AppNavigator = StackNavigator({
  login: {
    name: 'Login',
    description: 'Login Screen',
    screen: LoginScreen,
  },
  rootNavigation: {
    name: 'Root Navigation Navigation',
    description: 'A card stack for app navigation',
    screen: RootNavigation,
  },
  Index: {
    screen: LoginScreen,
  },
}, {
  initialRouteName: 'Index',
  headerMode: 'none',

  /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
})

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/images/expo-wordmark.png')],
        fonts: [
          FontAwesome.font,
          { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ],
      });

      if (Platform.OS === 'android') {
        await Exponent.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
      }
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <Provider { ...stores }>
          <AppNavigator style={ styles.container }/>
        </Provider>
      );
    } else {
      return <Expo.AppLoading />;
    }
  }
}

Expo.registerRootComponent(AppContainer);
