import { Text, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className='flex h-full py-8 px-5 bg-sel-100'>
    
      { /* Titlebar */}

      <View className='mt-5 flex flex-row space-x-5'>
        <View>
          <Text className='uppercase text-xl text-slate-800'>Guten Morgen Annika!</Text>
          <Text className='text-slate-800'>Du befindest dich heute in der</Text>
          <Text className='text-slate-800'>Lutealphase (15. Zyklustag)</Text>
        </View>
        <Image 
          source={{
            uri: 'https://pps.whatsapp.net/v/t61.24694-24/294946175_727290145195026_6571170971301202090_n.jpg?ccb=11-4&oh=01_AVypQEqYUCfNYfdtM9S-Bd-McJEHFHZbnkZDzvAR-4UTjg&oe=6304CC1C',
          }}
          className='h-14 w-14 bg-gray-300 rounded-full mt-3'
        />
      </View>

      {/* First Card */}
      <View>

      </View>

    </View>
  )
};

export default HomeScreen