import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

const DevScreen = (props) => {
  console.log('props in dev', props);
  const { path } = props;

  return (
    <View>
      <Text>Welcome to Dev</Text>
      <Text>Route: { path }</Text>
    </View>
  );
};

export default DevScreen;
