import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
function Images() {
  const first = useRef(null);
  const second = useRef(null);
  const fourth = useRef(null);
  const third = useRef(null);
  const parent = useRef(null);

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: parent.current,
      start: "top 90%",
      scrub: 1,
    },
  });

  tl.to(first.current, {
    x: "90%",
    ease: "linear",   // ease must be a string
  }, 'a')
  .to(third.current, {
    x: "-80%",
    ease: "linear",
  }, 'a')
  .to(second.current, {
    x: "-20%",
    ease: "linear",
  }, 'a')
  .to(fourth.current, {
    x: "80%",
    ease: "linear",
  }, 'a');

});


  return (
    <div ref={parent} className='w-full h-[70vh] sm:h-[110vh] bg-white flex items-center justify-center overflow-hidden mb-10'>


      <div className='w-[40%]
      sm:w-[20%] sm:h-[70%] h-1/2  relative '>

      <div ref={first} className='absolute w-20 sm:h-[15rem] h-[7rem] sm:w-48 sm:-right-35 sm:top-22 -right-13 top-26 '>
      <img  className='w-full h-full object-cover' src="	https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
      </div>


      <div ref={second} className='absolute w-[12rem] sm:w-[20rem] sm:-left-[85%] aspect-video -left-1/3 top-32 overflow-hidden'>
      <video autoPlay loop muted src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
      </div>


      <div  ref={third} className='absolute w-[9rem] sm:w-[17rem] aspect-video -left-[32%] -bottom-10 sm:-left-[80%] sm:-bottom-29'>
        <img className='h-full w-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
      </div>


      <div ref={fourth} className='absolute w-[10rem] aspect-[1.5/1]  -right-25 -bottom-[20%] overflow-hidden  sm:w-[24rem]
      sm:-right-[80%] sm:-bottom-35'>
      <video muted loop autoPlay src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
      </div>
      <img  className = "w-full h-full object-cover"
      src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
      </div>
    </div>
  )
}

export default Images
