import React, { Component, useEffect, Suspense } from 'react'
// eslint-disable-next-line no-unused-vars
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

const Loading = () => <View>loading....</View>

const compMap = {
  a: 'components/A',
  b: 'components/B',
}

// const fetchTask = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve( {data:'msg data from fetch'})
//     }, 2000);
//   })
// }
// const cache = {};
// const fetchData = (promiseRequest) => {
//   let ref = cache;
//   return () => {
//     let ftask = promiseRequest()
//     ftask().then(res =>{
//       ref = res;
//     });

//     if(ref === cache) {
//       throw ftask;
//     }
//     return ref;
//   }

  
// }

// const FechComp = () => {

//    const {data} = fetchData(fetchTask);

// return <View>feth data:{data}</View>
// }


function fetchApi() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('fettch data:sucess');
      }, 3000);
  })
}

const cached = {};
const createFetcher = promiseTask => {
  let ref = cached;

  return () => {
      const task = promiseTask();
      task.then(res => {
          ref = res;
      });
      console.log("cahched,ref", cached, ref);
      if (ref === cached) {
          throw task
      }

      return ref;
  }
}


function requestData() {
  return createFetcher(fetchApi)
}

// Taro 里 待测
function SuspenseComp() {
  // const {error,data}=useFetch('a.php')
  // if(error) return null;
  const data = requestData();
  if(data==null) return null;
  return <View>{data}</View>
}



const Load = ({ namespaceKey }) => {
  let path = compMap[namespaceKey];
  console.log('path', path)
  let ChildLazy = React.lazy(() => import(`@/${path}`));
  // let ChildLazy = React.lazy(() => import(`@/components/B`));

  return <Suspense className="list" fallback='loading'>
    这是 Load 组件 ;接受的数据是 {namespaceKey}
    {/* <SuspenseComp /> */}
    {/* <FechComp /> */}
    <ChildLazy namespaceKey=' from lazy' />
  </Suspense>
}
export default Load;