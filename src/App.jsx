import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Work from './Components/Work'
import Playreel from './Components/Playreel'
import Images from './Components/Images'
import Spread from './Components/Spread'
 import LocomotiveScroll from 'locomotive-scroll';
function App() {
 

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen '>
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <Images />
      <Spread />
    </div>
  )
}

export default App

