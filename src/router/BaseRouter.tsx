import {memo,FC} from "react";
import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home"
import {Index} from "../pages/Index"
import {New} from "../pages/New"


export const BaseRouter:FC=memo(()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/index" element={<Index />} />
        </Routes>

        </>
    )
})