import React from "react";
import {memo} from "react"
import Image1 from "../images/Image1.jpeg"

type Props={
    title:string;
}

export const Page404:React.FC<Props> =memo((Props:Props)=>{
    const {title}=Props
    return(
        <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
        <section
          id="section1"
          className="w-full h-screen snap-start flex justify-center items-center bg-red-500 text-5xl text-white"
        >
          {title}
        </section>
        <section
          id="section2"
          className="w-full h-screen snap-start flex justify-center items-center bg-yellow-500 text-5xl text-white"
        >
          開くことが
        </section>
        <section
          id="section3"
          className="w-full h-screen snap-start flex justify-center items-center bg-green-500 text-5xl text-white"
        >
          できません
        </section>
      </div>
    )
})