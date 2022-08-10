import React from "react";
import {memo} from "react"
import { Link } from 'react-router-dom'

export const Default:React.FC=memo(()=>{
    return(
        <div className="flex justify-center flex-wrap mt-40 ">
            <div className="text-center border border-red-300 py-24 w-1/2 md:w-1/4 bg-red-500"><Link to="/new">事例</Link></div>
            <div className="text-center border border-red-300 py-24 w-1/2 md:w-1/4 bg-blue-500"><Link to="/new">提案</Link></div>
            <div className="text-center border border-red-300 py-24 w-1/2 md:w-1/4 bg-yellow-500"><Link to="/new">アイディア</Link></div>
            <div className="text-center border border-red-300 py-24 w-1/2 md:w-1/4 bg-green-500"><Link to="/new">ツール</Link></div>
        </div>
    )
    })