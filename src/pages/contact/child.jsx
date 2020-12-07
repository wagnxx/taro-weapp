import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

class Child extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <View>{this.props.msg}</View>
    )
  }
}
// const Child = (props) => {
//   return <View>{props.msg}</View>
// }
export default Child;