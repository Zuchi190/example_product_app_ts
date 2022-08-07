import React from 'react';
import Image1 from "./images/Image1.jpeg"

export const Button: React.FC = () => {
  const num =null
  const fee= num || "金額は未設定です"
  console.log(fee)

  const  num1 ="aaa"
  const  aaa=num1&&"設定されています"
  console.log(aaa)
  return (
   <div>   
       <span className="border border-red-500 w-4">インライン</span>
        <div className="border border-red-500 w-16">ブロック</div>

        <div className="border border-red-500 w-96">ブロック</div>
        <div className="border border-red-500 w-full">ブロック</div>
        <br></br>
        <div className="border border-blue-500 w-1/2">ブロック</div>
        <div className="border border-blue500 max-w-2xl">ブロック</div>
        <br></br>
        <p className="text-base">こんにちは</p>
        <p className="text-2xl ">こんにちは</p>

        <br></br>
        <p className="mt-16 tracking-wider">
        こんにちは<br></br>
        こんにちは<br></br>
        こんにちは<br></br>
        </p>

        <br></br>
        <p className="mt-16 leading-10">こんにちは<br></br>
        こんにちは<br></br>
        こんにちは<br></br>
        </p>

        <div className="text-center">ブロック内の要素を中央に</div>

        <p　className="text-blue-400">こんにちは</p>
        <div className="border border-pink-too mt-16"></div>
        <div className="mt-16 bg-green-400 text-center">背景の色</div>

        <button className="bg-red-800 text-white font-bold w-32 py-4 hover:bg-indigo-400 " >ボタンです</button>
        <input type="text" className="border-2 p-2 focus:outline-none focus:border-red-300"/>

        <p　className="text-blue-400 mt-16 text-opacity-50">こんにちは</p>
        <div className="border border-pink-500 mt-16 border-opacity-50">線の色</div>
        <div className="mb-16 mt-16 bg-green-400 text-center bg-opacity-20 hover:bg-opacity-100">背景の色</div>

        <div className="border-red-400 border-2">線の太さ</div>

        <div className="mt-4 flex justify-around border-red-400 border-2 divide-x divide-green-400">
            <div className="flex-grow text-center">1</div>
            <div className="flex-grow text-center">2</div>
            <div className="flex-grow text-center">3</div>
        </div>

        <div className="mt-16 rounded-full w-24 bg-indigo-500 text-white text-center py-10">rounded</div>


        <div className="mt-16 rounded-full w-24 bg-indigo-500 text-white text-center py-10 ring-4 ring-indigo-600 ring-offset-4 ring-offset-red-300 hover:ring-opacity-25 ">rounded</div>

        <div className="mt-20 mb-16 h-24 w-40 bg-image bg-indigo-500"></div>

        <img src={Image1} alt="" className="mb-16 w-96"/>
        <img src={Image1} alt="" className="mb-16 w-96 h-24 "/>
        <img src={Image1} alt="" className="mb-16 w-96 h-200 object-cover"/>

        <div className="mb-16 h-96 w-96 bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(${Image1})`}}></div>

        <div className="mb-16 w-40 border shadow">Shadow</div>
        <div className="mb-16 w-40 border  shadow-md">Shadow</div>
        <div className="mb-16 w-40 border  shadow-lg">Shadow</div>


        <section className="mt-16">
        <h2 className="text-center mb-8">横並びのサンプル</h2>
        <div className="flex justify-center space-x-16">
          <div　className="w-1/4 border text-center">
            <h3　className="p-2">タイトル</h3>
            <p className="p-4">ここに文章が入りますここに文章が入りますここに文章が入ります</p>
          </div>
          <div className="w-1/4 border text-center">
          <h3　className="p-2">タイトル</h3>
            <p className="p-4">ここに文章が入りますここに文章が入りますここに文章が入ります</p>
          </div>
          <div className="w-1/4 border text-center">
          <h3　className="p-2">タイトル</h3>
            <p className="p-4">ここに文章が入りますここに文章が入りますここに文章が入ります</p>
          </div>
          
        </div>
        </section>

        <section className="mt-16">
        <h2 className="text-center mb-8">入れ替えテスト</h2>
        <div className="flex items-center">
          <div className="w-1/2 p-16">ここに文章が入りますここに文章が入りますここに文章が入ります</div>
          <img src={Image1} width="50%" alt=""/>
        </div>
        <div className="flex items-center flex-row-reverse">
          <div className="w-1/2 p-16">ここに文章が入りますここに文章が入りますここに文章が入ります</div>
          <img src={Image1} width="50%" alt=""/>
        </div>
        <div className="flex items-center">
          <div className="w-1/2 p-16">ここに文章が入りますここに文章が入りますここに文章が入ります</div>
          <img src={Image1} width="50%"alt=""/>
        </div>
        </section>

        <section className="mt-20">
          <div className="grid grid-cols-4">
          <div className="border-2">1</div>
          <div className="border-2 col-span-2 bg-red-100">2</div>
          <div className="border-2 col-start-1 col-span-2 bg-blue-100">3</div>
          <div className="border-2">4</div>
          <div className="border-2 h-16">5</div>
          <div className="border-2">6</div>
          <div className="border-2">7</div>
          <div className="border-2">8</div>
          <div className="border-2">9</div>
          <div className="border-2">10</div>
          </div>

          <div className="grid grid-flow-col grid-rows-3 mt-16">
          <div className="border-2">1</div>
          <div className="border-2">2</div>
          <div className="border-2">3</div>
          <div className="border-2">4</div>
          <div className="border-2">5</div>
          </div>
        </section>

        <footer className="bg-gray-200 mt-20">
        <div className="p-8 grid grid-cols-4 gap-8">
          <div>
            <p>ロゴ</p>
            <address>〒123-4567 東京都中央区〇〇</address>
          </div>
          <div>
          <div className="mb-8">最新の記事</div>
          <ul>
          <li>記事1</li>
          <li>記事2</li>
          <li>記事3</li>
          </ul>
          </div>

          <div>
          <div className="mb-8">最新の記事</div>
          <ul>
          <li>カテゴリ1</li>
          <li>カテゴリ2</li>
          <li>カテゴリ3</li>
          </ul>
          </div>

          <div>
          <div className="mb-8">人気記事</div>
          <ul>
          <li>人気記事1</li>
          <li>人気記事2</li>
          <li>人気記事3</li>
          </ul>
          </div>
          
          <div className="col-span-4 justify-self-center">
            Copyright all rights reserved
          </div>
        </div>
        </footer>

        <div className="bg-green-300 md:bg-blue-300 lg:bg-red-300">あああ</div>
        <div className="text-center">
        <button className="max-w-md bg-indigo-600 hover:bg-indigo-500 text-white p-4 w-1/2">レスポンシブ対応</button>
        </div>
        
        <div className="mt-16 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
       <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={Image1} alt="Man looking at item at a store"/>
      </div>

    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>

</div>      


    <img src={Image1} alt="aaa" className="w-96 mt-20"/>
    <span>文字を重ねたい</span>

    <div className="relative mt-8">
    <img src={Image1} alt="aaa" className="w-96  absolute"/>
    <span className="absolute top-16 left-16 text-white">文字を重ねる</span>
    </div>

    <div className="mt-96 relative w-96 h-60 bg-red-400">
      <div className="absolute w-40 h-40 top-8 left-8 bg-blue-400"></div>
      <div className="absolute w-40 h-40 top-16 left-16 bg-blue-500"></div>
    </div>

    <div className="fixed bottom-8 right-8">戻るボタン</div>

    <div className="sticky top-0 p-2 bg-green-300">Stickyヘッダー</div>
    <div className="h-96">ああああ</div>
    <div className="h-96">ああああ</div>
    <div className="h-96">ああああ</div>
    <div className="h-96">ああああ</div>
    

   </div>
  );
};