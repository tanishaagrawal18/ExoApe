import React, { useState } from "react";
import { motion } from "framer-motion";
function Work() {
    const [elems,setElems] = useState([
        {heading: "Ottografie", subheading: "Seamless Photographic journey", img: "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)", video: "https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"},

        {heading: "Rino & Pelle", subheading: "Effortless chic lifestyle", img: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)", video: "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"},

        {heading: "Pixelflakes", subheading: "Architecture Marketing Agency", img: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)", video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"},

        {heading: "Cambium", subheading: "Pioneering Sustainable Solutions", img: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)", video: "https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"}
    ])
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl py-20 mx-auto px-5 sm:px-10">
        <div className="feature flex gap-4">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>

          <h3 className="capitalize">Featured Projects</h3>
        </div>

        <h1 className="text-6xl sm:text-[13rem] sm:leading-none sm:tracking-tight  my-5 overflow-hidden">
         <motion.span 
         initial=
         {{
          rotate:"90deg",
          y:"40%", opacity:0
         }}

         whileInView=
         {{
          rotate:"0deg",
          y:"0%", opacity:1
        }}

        transition=
        {{
          viewPort:{once:true},
          duration:0.8, 
          ease:[0.22,1,0.36,1]
        }}

         className="
         inline-block origin-left "
         >
          Work
         </motion.span> 
        </h1>
        <p className=
        "leading-relaxed text-md w-[85%] sm:w-full">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className=
        "elems sm:flex sm:flex-wrap sm:gap-5 mt-10">
            {elems.map((item, index)=> { 
                return(
                    <div 
                    key = {index}
                    className="elem w-full sm:w-[48%] mt-10  ">
            <div className="video w-full h-[104vw] sm:h-[50vw] relative overflow-hidden ">
              <motion.img
              initial={{opacity: 1}}
              whileHover={{opacity: 0}}
              data-scroll
              data-scroll-speed="-.5"
                className="
                sm:absolute
                sm:top-0
                sm:left-0
                sm:z-[2]
                w-full
                hidden
                sm:block
                h-full object-cover"
                src={item.img}
              />
              <video
                autoPlay
                muted
                loop
                className="
            w-full h-full absolute top-1/2 left-1/2 
            z-[1]
            block
            scale-[1.3]
            -translate-x-1/2 
            -translate-y-1/2"
                src={item.video}
              ></video>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{item.heading}</h3>
              <p className="capitalize opacity-40">
                {item.subheading}
              </p>
            </div>
          </div>
                )
            })}
          
        </div>
      </div>
    </div>
  );
}

export default Work;
