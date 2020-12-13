import React, { Component, useState, useEffect, useReducer } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './tab.less'

const voidFunc = () => console.log('没有调用该方法')
const Tab = ({ defaultKey, onChange = voidFunc, ...props }) => {

  const children = props.children.length ? props.children : [props.children]
  const hasInvalidChild = children.some(panel => panel.type !== Panel);

  if (hasInvalidChild) {
    throw new Error('Tabs include invalid child')
  }

  const validChildren = children.filter(panel => panel.type === Panel);

  const navData = validChildren.map(panel => ({ key: panel.props.tabKey, tab: panel.props.tab }))

  const clickNatTabHandle = (key) => {
 
    onChange(key)
  }
  const tabClassNameList = `tabs__nav__item`;
  return (
    <View className="tabs">
      <View className="tabs__nav">
        {
          navData.map(nav => {
            return <View
              className={`tabs__nav__item ${nav.key === defaultKey ? 'tabs__nav__item--active' : ''}`}
              key={nav.key}
              onClick={() => clickNatTabHandle(nav.key)}
            >{nav.tab}</View>
          })
        }

      </View>
      <View className="tabs__panel">
        {validChildren.find(panel => panel.props.tabKey === defaultKey)}
      </View>
    </View>
  )
}


const Panel = ({ key, tab, ...props }) => {
  return <>{props.children}</>
}



Tab.Panel = Panel;
export default Tab;