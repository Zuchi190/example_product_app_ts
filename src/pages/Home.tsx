import React from "react";
import {memo} from "react"
import Image1 from "../images/Image1.jpeg"

export const Home:React.FC =memo(()=>{
    return(
        <section className="mt-16">
            <h2　className="text-center mb-16">制作事例一覧</h2>
        <div className="grid grid-cols-4 gap-4">
           <div className=" border text-center">
            <h3 className="p-2">製品１</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className=" border text-center">
            <h3 className="p-2">製品2</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className="border text-center">
            <h3 className="p-2">製品3</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className="border text-center">
            <h3 className="p-2">製品3</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className="border text-center">
            <h3 className="p-2">製品3</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className="border text-center">
            <h3 className="p-2">製品3</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className="border text-center">
            <h3 className="p-2">製品3</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
            <div className="border text-center">
            <h3 className="p-2">製品3</h3>
            <img src={Image1} alt=""/>
            <p className="p-4">製品事例名：</p>
            </div> 
        </div>
        </section>
    )
})