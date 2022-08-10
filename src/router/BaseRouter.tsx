import {memo,FC} from "react";
import {Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home"
import {Index} from "../pages/Index"
import { Layout } from "../pages/Layout";
import {New} from "../pages/New"
import {Page404} from "../pages/Page404"
import { Product } from "../pages/Product";
import { Default } from "../pages/Default"



export const BaseRouter:FC=memo(()=>{
    return(
        <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/index" element={<Index />} />
            <Route path="*" element={<Page404 title="あはは" />} />
            <Route path="/design" element={<Layout/>} />
            <Route path="/idea" element={<Default/>} />
            <Route path="product" element={<Product/>} >
                <Route index element={<Home/>}/>
                <Route path="page1" element={<Product/>} />
            </Route>
            </Routes>


        </>
    )
})