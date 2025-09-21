import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Video zoom
    gsap.to(videodiv.current, {
      width: "100%",
      height: "100%",
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1.5,
        markers: false,
      },
    });

    // Text scale (comes closer as video zooms)
    gsap.to(textRef.current, {
      scale: 1.2,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        markers: false,
      },
    });
  }, []);

  return (
    <div
      ref={parent}
      className="w-full h-screen relative overflow-hidden bg-black"
    >
      {/* Video container */}
      <div
        ref={videodiv}
        className="w-40 aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:w-96"
      >
        <video
          loop
          muted
          autoPlay
          className="h-full w-full scale-[2.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1758459692~exp=1758463292~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=197159139c5e73579857a3a83e8f0a33cfbccf4e803a6d8d1c3f90b705d53b07&r=dXMtY2VudHJhbDE%3D"
        ></video>

        {/* Dark overlay on video */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Overlay text */}
      <div className="overlay absolute w-full h-full text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>

          <h3 className="text:sm"> Work in Motion </h3>
        </div>

        {/* Play Reel text */}
        <h1
          ref={textRef}
          className="w-full flex justify-center gap-32 sm:gap-96 items-center"
        >
          <div className="text-4xl sm:text-9xl">Play</div>
          <div className="text-4xl sm:text-9xl">Reel</div>
        </h1>

        <p className="text-center px-10 text-xs">
          Our work is best experienced in motion. Don&apos;t forget to put on
          your headphones.
        </p>
      </div>
    </div>
  );
}

export default Playreel;
