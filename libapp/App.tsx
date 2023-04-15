
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignUpScreen/>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
