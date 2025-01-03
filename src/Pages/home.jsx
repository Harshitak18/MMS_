import React  from 'react'
import "../styleSheets/home.css"
// import Slider from '../components/slider'
import Slider2 from '../components/Slider2'
import Header from '../components/Header'




function Home() {




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
