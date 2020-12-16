import React, { Component, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

const ChildList = ({ dataList }) => {

  useEffect(() => {
    console.log('dataList 更新了',dataList);
  })
  return <View className="list">
    {
      !dataList || !dataList.length ? '' :
        dataList.map(item => {

          return <View className="list__item" key={item.key}>
            id: {item.id}
            title:{item.title}
          </View>
        })
    }
  </View>
}
export default ChildList;