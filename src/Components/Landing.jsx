import React from 'react'

function Landing() {
  return (
    <div className=' relative w-full h-[150vh] sm:h-[250vh]'>
      <div className='picture w-full h-full overflow-hidden'>
           <img 
           data-scroll
           data-scroll-speed="-1"
           className='w-full h-full object-cover'
           src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
      </div>
      <div className='w-full absolute top-0'>
          <div className=' absolute top-0 h-full text max-w-screen-2xl mx-auto px-5 sm:px-10 text-white'>
         <div className='para mt-72 sm:mt-[30rem] '>
           <p className='text-md sm:text-4xl'>Global design studio partnering</p>
          <p className='text-md sm:text-4xl'>with brands and businesses that create</p>
          <p className='text-md sm:text-4xl'>excentional experiences where people</p>
          <p className='text-md sm:text-4xl'>live, work, and unwind.</p>
         </div>
         <div className='headings mt-5 sm:mt-10'> 
          
           <h1 className='text-6xl tracking-tighter font-sans font-normal sm:text-[16rem]  leading-none'>Digital</h1>
           <h1 className='text-6xl tracking-tighter font-sans font-normal sm:text-[16rem]  leading-none'>Design</h1>
           <h1 className='text-6xl tracking-tighter font-sans font-normal sm:text-[16rem]  leading-none'>Experience</h1>
         </div>

         <div className='sm:w-1/3 para2 mt-12 w-[55%]'>
          <p className='mb-5 sm:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero porro quasi, nesciunt mollitia ullam nulla assumenda laboriosam exercitationem consequuntur quaerat quisquam error distinctio.</p>
          <a className=' border-b-[.3px] sm:border-b-[1px] border-zinc-100 sm:text-xl pb-1' href="#">The Studio</a>
         </div>
      </div>
      </div>
      

    </div>
  )
}

export default Landing
