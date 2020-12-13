import React, { Component ,useContext,useState} from 'react'
import Taro from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import Child from './child';  
import { eventChannel } from '../../utils/event';
import ElRate from '../../components/my-rate';
import Toolbar from './components/Toolbar';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
let num = 0;
export const ThemeContext = React.createContext();

function App() {
  let [mode,changeMode] = useState(themes.light);
  const clickHandle = () => {
    num++;
    if(num % 2 === 0) {
      changeMode(themes.light)
    }else{
      changeMode(themes.dark)

    }
  }
  return (
    <ThemeContext.Provider value={mode}>
      <Toolbar />
      <Button onClick={clickHandle}>change color</Button>
    </ThemeContext.Provider>
  );
}

 

export default App;