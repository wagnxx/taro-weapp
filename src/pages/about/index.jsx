import React, { Component, useState } from 'react'
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Child from './child';
import { eventChannel } from '../../utils/event';

const InitData = [{
  id: 1,
  title: 'pic1',
  key: 1
}];
let num = 1;
const UserPage = () => {
  const state = {
    msg: 'hello world',
  };  
  const [dataList, setDataList] = useState(InitData)
  const getMoreData = async() => {

    let _data =await getProductList();
    let InitData1=[..._data,...dataList]
    // InitData.push(newdata);
    // let _data=[...dataList,newdata]
    setDataList(InitData1)
  }
  return (<View className='index'>
    <Text onClick={getMoreData}> 获取更多 </Text>

    <Child msg={state.msg} dataList={dataList} />
  </View>)
}
export default UserPage


function getProductList() {
  num++

  let newdata = {
    id: num,
    title: 'pic--' + num,
    key: num,
  };
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove([newdata])
    }, 1000);
  })
}