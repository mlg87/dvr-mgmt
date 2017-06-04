import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  TabNavigator,
  addNavigationHelpers,
} from 'react-navigation';

import styles from '../styles/mainTabs';
import DevScreen from '../screens/DevScreen';
import _Icon from '../components/_Icon';

// const MainTabNavigationBar = ({ navigation }) => {
//   const { routes } = navigation.state;
//   return (
//     <View style={ styles.tabContainer }>
//       { routes.map(route => (
//         <TouchableOpacity
//           onPress={ () => navigation.navigate(route.routeName) }
//           style={ styles.tab }
//           key={ route.routeName }
//         >
//           <Icon name={ route.icon } />
//           <Text note>{ route.routeName }</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };
//
// const MainTabNavigationView = ({ router, navigation }) => {
//   const { routes, index } = navigation.state;
//   const ActiveScreen = router.getComponentForState(navigation.state);
//   return (
//     <View style={ styles.container }>
//       <ActiveScreen
//         navigation={ addNavigationHelpers({
//           ...navigation,
//           state: routes[index],
//         }) }
//       />
//       <MainTabNavigationBar navigation={ navigation } />
//     </View>
//   );
// };
//
// const MainTabNavigationRouter = TabRouter(
//   {
//     Home: {
//       screen: DevScreen,
//       path: '',
//       navigationOptions: {
//         tabBar: {
//           label: 'Mason',
//           icon: ({ tintColor }) => <Icon name="home" color={ tintColor } />,
//         },
//       },
//     },
//     NotificationsMason: {
//       screen: DevScreen,
//       path: 'notifications',
//     },
//     Settings: {
//       screen: DevScreen,
//       path: 'settings',
//     },
//   },
//   {
//     // Change this to start on a different tab
//     initialRouteName: 'Home',
//   },
// );
//
// const MainTabs = createNavigationContainer(
//   createNavigator(MainTabNavigationRouter)(MainTabNavigationView),
// );

const MainTabs = TabNavigator({
  Schedule: {
    screen: DevScreen,
    navigationOptions: {
      tabBarLabel: 'Schedule',
      tabBarIcon: ({ tintColor }) => <_Icon name="calendar" color={ tintColor } />,
    },
  },
  Chat: {
    screen: DevScreen,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => <_Icon name="comments" color={ tintColor } />,
    },
  },
  Me: {
    screen: DevScreen,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <_Icon name="user-circle" color={ tintColor } />,
    },
  },
});

export default MainTabs;
