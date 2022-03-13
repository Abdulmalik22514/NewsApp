import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const Loader = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    fontFamily: 'Roboto-MediumItalic',
    fontSize: 20,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightBackground,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Loader;
