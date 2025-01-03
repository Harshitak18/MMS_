import React, { useContext } from 'react'
import "../styleSheets/home.css"
// import Slider from '../components/slider'
import Slider2 from '../components/Slider2'
import Header from '../components/header'
import { ThemeEffect } from '@/store/themeEffect'


function Home() {

  const {blur} = useContext(ThemeEffect)


  return (

    <div className="main w-full h-auto ">
      <div className="Home-page h-auto w-full">
        {/* <Slider/> */}
        <Header/>
        <Slider2/>
        
        
      </div>
      

    </div>
  )
}

export default Home
