'use client';

import { SetStateAction, useState } from 'react';


export default function BolderInput() {
  const [Bolder, setBolder] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setBolder(event.target.value);
  };

  return (
    <div className="ml-4 flex-1">
      <div className="font-semibold text-black">ボルダリング疲労度 (％)</div>
      <input
        type="text"
        value={Bolder}
        onChange={handleChange}
        className="text-xl font-bold text-black"
        placeholder="0"
      />
    </div>
  );
}