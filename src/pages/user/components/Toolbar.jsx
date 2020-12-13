import React, { Component ,useContext} from 'react'
import Taro from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import ThemedButton from './ThemedButton'

function Toolbar(props) {
  return (
    <View>
      <ThemedButton />
    </View>
  );
}


export default Toolbar;