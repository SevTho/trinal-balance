import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHouse, 
  faCircleNotch,
  faBook,
  faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  const navigation = useNavigation()

  return (
    <View className='flex flex-row pt-3 pb-5 px-12 space-x-12 h-[10%]'>
        <TouchableOpacity onPress={() => {
                navigation.navigate('Home')
              }}>
          <FontAwesomeIcon icon={ faHouse } color="#808080" size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
                navigation.navigate('Cycle')
              }}>
          <FontAwesomeIcon icon={ faCircleNotch } color="#808080" size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
                navigation.navigate('KnowledgeLibrary')
              }}>
          <FontAwesomeIcon icon={ faBook } color="#808080" size={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
                navigation.navigate('MediaLibrary')
              }}>
          <FontAwesomeIcon icon={ faCirclePlay } color="#808080" size={35} />
        </TouchableOpacity>
    </View>
  )
}

export default Footer