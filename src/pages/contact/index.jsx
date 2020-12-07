import React, { Component, useState, useEffect, useReducer } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Child from './child';
import { eventChannel } from '../../utils/event';


let num = 0;
const ACTION_TYPE = {
  'INCREMENT': 'INCREMENT',
  'DECREMENT': 'DECREMENT'
}
const Index = () => {


  const [cstate, setCstate] = useState({
    msg: num
  })


  const goback = () => {
    Taro.navigateBack();
  }

  const chagestate = () => {
    num++;
    setCstate({
      msg: cstate.msg + 1
    })
    console.log(process)
  }
  useEffect(() => {
    console.log('useeffect worked' + num);
    window.Taro = Taro
  }, []);
  const initialState = {count: 0};

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPE.INCREMENT:
        return {count: state.count + 1};
      
      case ACTION_TYPE.DECREMENT:
        return {count: state.count - 1};
      
      default:
        throw new Error('input error');
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View className='index'>
      <Text>User center </Text>
      <Text>count:{state.count} </Text>
      <Button onClick={() => dispatch({type: ACTION_TYPE.INCREMENT})}>+count</Button>
      <Button onClick={() => dispatch({type: ACTION_TYPE.DECREMENT})}>-count</Button>
      <Button onClick={chagestate}>改变state</Button>
      <Button onClick={goback}>返回</Button>
      <Child msg={cstate.msg} />
    </View>
  )

}

export default Index;