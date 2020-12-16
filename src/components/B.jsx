import React, { Component, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

const B = ({ namespaceKey }) => {


  return <View className="list">
    这是 B 组件 ;接受的数据是 {namespaceKey}
  </View>
}
export default B;