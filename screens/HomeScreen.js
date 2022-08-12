import { Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className='flex h-full py-8 px-5 bg-sel-100'>
    
      { /* Titlebar */}

      <View>
        <View>
          <Text className='uppercase text-xl'>Guten Morgen Annika!</Text>
          <Text>Du befindest dich heute in der</Text>
          <Text>Lutealphase (15. Zyklustag)</Text>
        </View>
      </View>

    </View>
  )
};

export default HomeScreen