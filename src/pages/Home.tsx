import React, { useEffect, useState } from "react";
import {memo} from "react"
import Image1 from "../images/Image1.jpeg"
import db from "../firebase"
import { collection, getDocs,onSnapshot} from "firebase/firestore";

type Home={
    id:number;
    name:string;
    industry:string;
  }

  type setPosts={
    industry:string,
    material:string,
    name:string,
    timeStamp:Date,
    thickness:string
  }

export const Home:React.FC =memo(()=>{
    const [posts,setPosts]=useState<any>([]);

  useEffect(()=>{ 
  //データベースからデータを取得する
    const postData=collection(db,"products");
    getDocs(postData).then((snapShot)=>{
      console.log(snapShot.docs.map((doc) =>({...doc.data()})))
    setPosts(snapShot.docs.map((doc)=>({...doc.data()})));
    });

    //リアルタイムで取得
    onSnapshot(postData,(post)=>{
        setPosts(post.docs.map((doc)=>({...doc.data()})));
    });
  },[])

    return(

        <section className="mt-16">
            <h2　className="text-center mb-16">制作事例一覧</h2>
        <div className="grid grid-cols-4 gap-4">
          {posts.map((post:any)=>(
           <div className="border text-center" key={post.name}>
           <h3 className="p-2">{post.name}</h3>
           <img src={Image1} alt=""/>
           <p className="p-2">業界：{post.industry}</p>
           <p className="p-2">材質：{post.material}</p>
           <p className="p-2">板厚：{post.thickness}</p>
           </div> 
          ))}

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