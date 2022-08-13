import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {SparklesIcon} from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className='flex h-full flex-col py-8 px-7 bg-sel-100'>
    
      { /* Titlebar */}

      <View className='mt-8 flex flex-row space-x-5'>
        <View>
          <Text className='uppercase text-xl text-slate-800'>Guten Morgen Annika!</Text>
          <Text className='text-slate-800'>Du befindest dich heute in der</Text>
          <Text className='text-slate-800'>Lutealphase (15. Zyklustag)</Text>
        </View>
        <TouchableOpacity>
          <Image 
            source={{
              uri: 'https://pps.whatsapp.net/v/t61.24694-24/294946175_727290145195026_6571170971301202090_n.jpg?ccb=11-4&oh=01_AVypQEqYUCfNYfdtM9S-Bd-McJEHFHZbnkZDzvAR-4UTjg&oe=6304CC1C',
            }}
            className='h-14 w-14 bg-gray-300 rounded-full mt-3'
          />
        </TouchableOpacity>
      </View>

      <View className='mt-10 space-y-8'>

        {/* First Card */}
        <View className='bg-white rounded-md px-3 pt-3 pb-8'>
          <View className='flex flex-row justify-between'>
            <View className='h-9 w-9 bg-sel-200 rounded-full'></View>
            <Text className='font-bold text-lg'>Sport</Text>
            <SparklesIcon color="#dfcfb6" size={35} />
          </View>
          <View className='mt-3'>
            <Text className='text-sm text-gray-600'>Wie wäre es mit einem HIIT Training?</Text>
            <Text className='text-sm text-gray-600'>Aufgrund deiner aktuellen Hormonlage</Text>
            <View className='flex-row'>
              <Text className='text-sm text-gray-600'>hast du viel Energie.</Text>
              <TouchableOpacity><Text className='text-sm font-bold ml-2 text-gray-600'>Probiere es hiermit!</Text></TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Second Card */}
        <View className='bg-white min-h-fit rounded-md px-3 pt-3 pb-8'>
          <View className='flex flex-row justify-between'>
            <View className='h-9 w-9 bg-sel-300 rounded-full'></View>
            <Text className='font-bold text-lg'>Ernährung</Text>
            <SparklesIcon color="#c7762e" size={35} />
          </View>
          <View className='mt-3'>
            <Text className='text-sm text-gray-600'>Du solltest heute darauf achten,</Text>
            <Text className='text-sm text-gray-600'>dass du genügend blabla zu dir nimmst.</Text>
            <TouchableOpacity><Text className='text-sm font-bold text-gray-600'>Probiere doch mal dieses Rezept aus!</Text></TouchableOpacity>
          </View>
        </View>

        {/* Third Card */}
        <View className='bg-white rounded-md px-3 pt-3 pb-8'>
          <View className='flex flex-row justify-between'>
            <View className='h-9 w-9 bg-sel-400 rounded-full'></View>
            <Text className='font-bold text-lg'>Mindset</Text>
            <SparklesIcon color="#567c68" size={35} />
          </View>
          <View className='mt-5'>
            <Text className='text-sm text-gray-600'>Du solltest heute darauf achten,</Text>
            <Text className='text-sm text-gray-600'>dass du genügend blabla zu dir nimmst.</Text>
            <TouchableOpacity><Text className='text-sm font-bold text-gray-600'>Probiere doch mal dieses Rezept aus!</Text></TouchableOpacity>
          </View>
        </View>

      </View>

    </View>
  )
};

export default HomeScreen