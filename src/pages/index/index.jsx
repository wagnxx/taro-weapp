import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './child';

export default class Index extends Component {

  state = {
    msg: 'hello ,welcom !'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className='index'>
        <Text>index </Text>
        <Child msg={this.state.msg} />
      </View>
    )
  }
}
