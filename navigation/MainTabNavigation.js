// import React from 'react';
// import {
//   Button,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {
//   createNavigator,
//   createNavigationContainer,
//   TabRouter,
//   addNavigationHelpers,
// } from 'react-navigation';
//
// import styles from '../styles/mainTabNavigation';
// import DevScreen from '../screens/DevScreen';
//
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
//           <Text>{ route.routeName }</Text>
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
//       <MainTabNavigationBar navigation={ navigation } />
//       <ActiveScreen
//         navigation={ addNavigationHelpers({
//           ...navigation,
//           state: routes[index],
//         }) }
//       />
//     </View>
//   );
// };
//
// const MainTabNavigationRouter = TabRouter(
//   {
//     Home: {
//       screen: DevScreen,
//       path: '',
//     },
//     Notifications: {
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
//   createNavigator(MainTabNavigationRouter)(MainTabNavigationView)
// );
//
// export default MainTabs;
