import React, { Component, useState, useEffect, useReducer } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
// import Child from './child';
import { eventChannel } from '@/utils/event';
import Tabs from '@/components/tab/tab'

import Sky from '@/images/sky.jpeg'
import Sea from '@/images/sea.jpg'
import Grassland from '@/images/grassland.jpg'
import Tab from '../../components/tab/tab';
import './index.less'

const ContactPage = () => {
  const [tabKeyVal, setTabKeyVal] = useState(1)

  const tabChangeHandle = (key) => {
    setTabKeyVal(key)
  }
  return <View className="contact">
    <Tabs defaultKey={tabKeyVal} onChange={tabChangeHandle}>
      <Tabs.Panel tab='天空' tabKey={1}>
        <View className="contact__tab-panel">
          <Image src={Sky} className="contact__tab-panel__img"></Image>
        </View>
      </Tabs.Panel>
      <Tabs.Panel tab='草原' tabKey={2}>
        <View className="contact__tab-panel">
          <Image src={Grassland} className="contact__tab-panel__img"></Image>
        </View>
      </Tabs.Panel>
      <Tabs.Panel tab='大海' tabKey={3}>
        <View className="contact__tab-panel">
          <Image src={Sea} className="contact__tab-panel__img"></Image>
        </View>
      </Tabs.Panel>
    </Tabs>
  </View>
}



export default ContactPage;



// let num = 0;
// const ACTION_TYPE = {
//   'INCREMENT': 'INCREMENT',
//   'DECREMENT': 'DECREMENT'
// }
// const Index = () => {


//   const [cstate, setCstate] = useState({
//     msg: num
//   })


//   const goback = () => {
//     Taro.navigateBack();
//   }

//   const chagestate = () => {
//     num++;
//     setCstate({
//       msg: cstate.msg + 1
//     })
//     console.log(process)
//   }
//   useEffect(() => {
//     console.log('useeffect worked' + num);
//     window.Taro = Taro
//   }, []);
//   const initialState = {count: 0};

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case ACTION_TYPE.INCREMENT:
//         return {count: state.count + 1};

//       case ACTION_TYPE.DECREMENT:
//         return {count: state.count - 1};

//       default:
//         throw new Error('input error');
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <View className='index'>
//       <Text>User center </Text>
//       <Text>count:{state.count} </Text>
//       <Button onClick={() => dispatch({type: ACTION_TYPE.INCREMENT})}>+count</Button>
//       <Button onClick={() => dispatch({type: ACTION_TYPE.DECREMENT})}>-count</Button>
//       <Button onClick={chagestate}>改变state</Button>
//       <Button onClick={goback}>返回</Button>
//       <Child msg={cstate.msg} />
//     </View>
//   )

// }

// export default Index;