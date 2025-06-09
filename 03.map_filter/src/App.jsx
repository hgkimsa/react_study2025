import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MapArrayExam from './components/MapArrayExam'
import MapObjectExam from './components/webObjectExam'
import MenuBoard from './components/MenuBoard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 
        map() 함수 실습1
      */}

      {/* <MapArrayExam/> */}


      {/* map() 함수 실습2 */}
      {/* <MapObjectExam /> */}

      {/* filter() 함수 실습 */}
      <FilterExam/>

      {/* 실습) 음료 메뉴 출력 */}
      {/* <MenuBoard/> */}

      

    </>
  )
}

export default App
