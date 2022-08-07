import React from "react";
import { useForm } from "react-hook-form";


export const New=(()=> {
   
  return (
    <section className="mt-60 flex justify-center">
        <div className="bg-red-50"></div>
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
          製品特徴
        </label>
      </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="特徴が入ります" />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3"></div>
      <label className="md:w-2/3 block text-gray-500 font-bold">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">
          登録前の最終確認
        </span>
      </label>
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