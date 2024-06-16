//型を定義する情報をインポートしている
import { JSX, SVGProps } from "react"
import React from 'react';

import dynamic from 'next/dynamic';

import { QueryResultRow, sql } from "@vercel/postgres";

//使用関数のimport
import { makeDatePart } from "../components/function/formatDate"; 

//import ScaleIcon from '../public/scal-icon.svg';
import ScaleIcon from '../../../public/scal-icon.svg'

//データ取得
async function fetchData() {
  try {
    await sql.connect();
    console.log('Connected to database');
    
    const { rows } = await sql`select * from test order by id;`
    console.log(rows);

    await sql.end();
  } catch (error) {
    console.error('Error executing query', error);
  } finally {
    await sql.end();
  }
}

fetchData();



const { scalRow } = await sql`select * from mtb_category_store;`
const { rows } = await sql`select * from test order by id;`
console.log(scalRow);
console.log(rows);

//日付取得
const dayPartArray = makeDatePart(); 

//input関数
const WeightInput = dynamic(() => import('../components/function/WeightInput'), {
  ssr: false, // サーバーサイドレンダリングを無効にします
});

const BolderInput = dynamic(() => import('../components/function/BolderInput'), {
  ssr: false, // サーバーサイドレンダリングを無効にします
});



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LdxTkuaFrYc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-[#4CAF50] px-4 py-2 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{dayPartArray.date}</h1>
          <div className="space-y-1 text-right">
            <div className="text-lg">{dayPartArray.year}年 {dayPartArray.month}月</div>
            <div className="text-xs">{dayPartArray.currentWeekDay}</div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <h2 className="flex items-center text-lg font-semibold">
            <MicroscopeIcon className="text-xl" />
            <span className="ml-2 text-white">Graph Viewer</span>
          </h2>
          <ChevronRightIcon className="text-xl text-black" />
        </div>
      </div>

      <div className="px-4 py-2">
      {/* ここから配列にしたい。 */}

        <div className="flex items-center justify-between border-b py-3">
          <div>
            <ScaleIcon />
          </div>
          <div className="ml-4 flex-1">
            <div><WeightInput /></div>
          </div>
          <LineChartIcon className="text-2xl text-black" />
          <ListIcon className="ml-4 text-xl text-black" />
        </div>

        <div className="flex items-center justify-between border-b py-3">
          <LoaderIcon className="text-2xl text-black" />
          <div className="ml-4 flex-1">
            <div><BolderInput /></div>
          </div>
          <LineChartIcon className="text-2xl text-black" />
          <ListIcon className="ml-4 text-xl text-black" />
        </div>

        <div className="flex items-center justify-between border-b py-3">
          <FootprintsIcon className="text-2xl text-black" />
          <div className="ml-4 flex-1">
            <div className="font-semibold text-black">ランニング距離 (km)</div>
            <div className="text-xl font-bold text-black">0.00</div>
          </div>
          <LineChartIcon className="text-2xl text-black" />
          <ListIcon className="ml-4 text-xl text-black" />
        </div>
        <div className="flex items-center justify-between border-b py-3">
          <MoonStarIcon className="text-2xl text-black" />
          <div className="ml-4 flex-1">
            <div className="font-semibold text-black">睡眠時間 (h:m)</div>
            <div className="text-xl font-bold text-black">00:20 - 08:30</div>
          </div>
          <LineChartIcon className="text-2xl text-black" />
          <ListIcon className="ml-4 text-xl text-black" />
        </div>
        <div className="flex items-center justify-between border-b py-3">
          <CircuitBoardIcon className="text-2xl text-black" />
          <div className="ml-4 flex-1">
            <div className="font-semibold text-black">気になる課題 (h:m:s)</div>
            <div className="text-xl font-bold text-black">Total 00:00:00</div>
          </div>
          <LineChartIcon className="text-2xl text-black" />
          <ListIcon className="ml-4 text-xl text-black" />
        </div>
      </div>
      {/* ここまでを配列にしたい。 */}
      <div className="flex flex-col items-center justify-center py-8">
        <ChevronLeftIcon className="mb-4 text-4xl text-black" />
        <div className="text-center text-sm text-black">NO DATA.</div>
      <div>
      {testConectDB(rows)}
      </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
    　{...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CircuitBoardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  )
}


function FootprintsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}


function LineChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function LoaderIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>
  )
}


function MicroscopeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}


function MoonStarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  )
}

function testConectDB(rows: QueryResultRow[]) {
return (
  <div className="mb-4 text-4xl text-black">
    {rows.map((row) => (
      <div key={row.id}>
        {row.id} - {row.name}
      </div>
    ))}
  </div>
);
}