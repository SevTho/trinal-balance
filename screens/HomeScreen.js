import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    
      { /* Titlebar */}
      
      <View>
        <Text>Test</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 25:0
  },
});

export default HomeScreen