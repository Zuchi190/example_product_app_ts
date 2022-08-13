import React from "react";
import storage from "../firebase_storage"
import { ref,uploadBytes } from "firebase/storage";

export const New=(()=> {
  const OnFileUploadToFirebase=(e: any)=>{
    //console.log(e.target.files[0].name)
    const file = e.target.files[0];
    const storageRef=ref(storage,"image/"+file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
  return (
    <section className="mt-60 flex justify-center">
    <form className="w-full max-w-sm">
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          製品名
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="製品名を入力してください" />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          業界
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="特徴が入ります" />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          材質
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="特徴が入ります" />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          板厚
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="特徴が入ります" />
      </div>
    </div>

    <div className="flex justify-center my-8">
    <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">製品画像</label>
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">ファイルを添付</p>
                    </div>
                    <input type="file" className="opacity-0" onChange={OnFileUploadToFirebase} accept=".png , .jpeg, .jpg"/>
                </label>
            </div>
        </div>
    </div>
</div> 

    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        データ登録
        </button>
      </div>
    </div>
  </form>
  </section>
  );
}
)