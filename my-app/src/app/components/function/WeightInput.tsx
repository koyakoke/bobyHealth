'use client';

import { SetStateAction, useState } from 'react';

export default function WeightInput() {
  const [weight, setWeight] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setWeight(event.target.value);
  };

  return (
    <div className="ml-4 flex-1">
      <div className="font-semibold text-black">体重 (kg)</div>
      <input
        type="text"
        value={weight}
        onChange={handleChange}
        className="text-xl font-bold text-black"
        placeholder="0.00"
      />
    </div>
  );
}

