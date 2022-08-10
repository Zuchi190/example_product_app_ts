import React from "react";
import {memo} from "react"

export const Layout:React.FC=memo(()=>{
    return(
        <section>
        <div className="flex justify-center mb-16">
            <div className="tect-center border border-red-300 py-4 flex-grow">あああ</div>
            <div className="tect-center border border-red-300 py-4 flex-grow">あああ</div>
        </div>
        
        <div className="md:flex justify-center mb-16">
            <div className="tect-center border border-red-300 py-4 flex-grow">あああ</div>
            <div className="tect-center border border-red-300 py-4 flex-grow">あああ</div>
        </div>

        <div className="md:flex justify-center mb-16">
            <div className="tect-center border border-red-300 py-4 flex-grow md:w-5/12">あああ</div>
            <div className="tect-center border border-red-300 py-4 flex-grow md:w-7/12">あああ</div>
        </div>

        <div className="md:flex flex-row-reverse justify-center mb-16">
            <div className="tect-center border border-red-300 py-4 flex-grow md:w-5/12">あああ</div>
            <div className="tect-center border border-blue-300 py-4 flex-grow md:w-7/12">あああ</div>
        </div>
        <div className="flex justify-center mb-16">
            <div className="text-center border border-red-300 py-4 flex-grow">あああ</div>
            <div className="text-center border border-red-300 py-4 flex-grow">あああ</div>
            <div className="text-center border border-red-300 py-4 flex-grow">あああ</div>
        </div>

        <div className="md:flex justify-center mb-16">
            <div className="text-center border border-red-300 py-4 flex-grow">あああ</div>
            <div className="text-center border border-red-300 py-4 flex-grow">あああ</div>
            <div className="text-center border border-red-300 py-4 flex-grow">あああ</div>
        </div>

        <div className="md:flex justify-center mb-16">
            <div className="text-center border border-red-300 py-4 flex-grow md:w-3/12">あああ</div>
            <div className="text-center border border-red-300 py-4 flex-grow md:w-6/12">あああ</div>
            <div className="text-center border border-red-300 py-4 flex-grow md:w-3/12">あああ</div>
        </div>

        <div className="flex justify-center flex-wrap mb-16">
            <div className="text-center border border-red-300 py-4 w-1/2 md:w-1/4">左上</div>
            <div className="text-center border border-red-300 py-4 w-1/2 md:w-1/4 ">右上</div>
            <div className="text-center border border-red-300 py-4 w-1/2 md:w-1/4 ">左下</div>
            <div className="text-center border border-red-300 py-4 w-1/2 md:w-1/4 ">右下</div>
        </div>
        </section>

        
    )
})
