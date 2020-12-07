import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './child';
import { eventChannel } from '../../utils/event';

export default class Index extends Component {

  state = {
    msg: 'hello ,welcom ,about page!'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  goUserPage(){
    Taro.navigateTo({
      url: '/pages/user/index?id=2&type=test',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        console.log('navigate success')
        eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }


  render() {
    return (
      <View className='index'>
        <Text>About </Text>
        <Button onClick={this.goUserPage}>go user page</Button>
        <Child msg={this.state.msg} />
      </View>
    )
  }
}
