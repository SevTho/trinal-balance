import { View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Footer from '../components/footer'
import { useNavigation } from '@react-navigation/native'

const MediaLibraryScreen = () => {

  const navigation = useNavigation()

  useLayoutEffect(() => {  
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View className='flex flex-col h-full bg-sel-100'>
      <View className='py-8 px-7 h-[90%]'></View>
      <Footer />
    </View>
  )
}

export default MediaLibraryScreen