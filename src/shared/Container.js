import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

export const Container = ({children, backgroundColor}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView />
      <View style={{backgroundColor, flex: 1}}>{children}</View>
    </>
  );
};
