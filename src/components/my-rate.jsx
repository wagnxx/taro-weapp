import React, { useState, useReducer, useEffect } from 'react';
import { View } from '@tarojs/components';
import './styles/my-rate.less'

const ElRate = ({ value = 0 ,changeRateHandler}) => {


  let defultData = new Array(5);
  defultData.fill(false);
  let rateValue

  const initData = () => {


    if (value && value > 0) {
      for (let i = 0; i < value; i++) {
        defultData[i] = true;
      }
    }

    rateValue = defultData;

  }


  const changeValue = (k) => {
    changeRateHandler(k)
  }

  initData();
 



  return <View className='rate'>
    {
      rateValue.map((rate, i) => {
        return rate ? <View
          className='rate__item rate__item--active'
          key={i}
          onClick={() => changeValue(i)}
        >
        </View> :
          <View className='rate__item' key={i} onClick={() => changeValue(i)} onTouchStart={()=>changeValue(i)}></View>
      })
    }

  </View>
};

export default ElRate;