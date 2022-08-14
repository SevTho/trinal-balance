import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const DailyFoodScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Ernährung',
    });
  }, []);

  return (
    <View className='flex h-full px-5 py-5 bg-sel-100'>
      <Text className='text-xl'>Hier kommt das Daily Food zeugs rein</Text>
    </View>
  )
}

export default DailyFoodScreen