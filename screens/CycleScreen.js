import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';

const CycleScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <View className='flex flex-col h-full bg-sel-100'>
      <View className='py-8 px-7 h-[90%]'>
        <Text>Test</Text>
      </View>
      <Footer />
    </View>
  )
}

export default CycleScreen