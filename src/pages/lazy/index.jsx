import React, { Component, useState } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import A from '../../components/A';
import B from '../../components/B';
import Load from './Load'
import { eventChannel } from '../../utils/event';


let namespaceKey = 'a';

const UserPage = () => {

  return (<View className='index'>
    <Text >主页 </Text>

    <Load namespaceKey={namespaceKey} />
    {/* <View>一下是同步组件 </View>
    <A namespaceKey='同步加载a组件' />
    <B namespaceKey='同步加载b组件' /> */}
  </View>)
}
export default UserPage

