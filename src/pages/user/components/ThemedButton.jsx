import React, { Component ,useContext} from 'react'
import Taro from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'

import {ThemeContext} from '../index'

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <Button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </Button>
  );
}

export default ThemedButton;