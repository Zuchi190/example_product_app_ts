import React from "react";
import {memo} from "react"



export const Product:React.FC =memo(()=>{
    return(
      <div className="snap-x flex snap-mandatory h-screen w-96 mx-auto overflow-scroll">
      <div className="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center ">
        <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center ">
        <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center ">
        <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center ">
        <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center ">
        <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start w-96 flex-shrink-0 h-screen flex items-center justify-center r">
        <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
    </div>
    )
})