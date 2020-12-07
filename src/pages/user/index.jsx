import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './child';
import { eventChannel } from '../../utils/event';

export default class Index extends Component {

  state = {
    msg: 'hello ,welcom ,User  page!'
  }

  componentWillMount() {
    eventChannel.on('acceptDataFromOpenerPage', data => {
      console.log('on data', data)
    })
  }

  componentDidMount() {
    const params = Taro.getCurrentInstance().router.params;
    console.log(params)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goback(){
    Taro.navigateBack();
  }

  render() {
    return (
      <View className='index'>
        <Text>User center </Text>
        <Button onClick={this.goback}>返回</Button>
        <Child msg={this.state.msg} />
      </View>
    )
  }
}
