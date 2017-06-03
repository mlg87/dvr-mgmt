import HomeScreen from '../screens/HomeScreen';
import DevScreen from '../screens/DevScreen';

export default {
  home: {
    name: 'Home Screen',
    description: 'The main screen',
    screen: HomeScreen,
  },
  dev: {
    name: 'Dev Screen',
    description: 'A screen to use as a placeholder while in development',
    screen: DevScreen,
  },
};
