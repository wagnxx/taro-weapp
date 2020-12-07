import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.less'
class Child extends Component {
  // constructor(props){/
  //   super(props);
  // }
  render() {
    return (
      <View style={{textAlign:'center'}}>
        <View>{this.props.msg}</View>
        <View className='devidedLine'>
          <View className='devidedLine__before'></View>

          推荐更多
        <View className='devidedLine__after'></View>

        </View>
      </View>
    )
  }
}
// const Child = (props) => {
//   return <View>{props.msg}</View>
// }
export default Child;