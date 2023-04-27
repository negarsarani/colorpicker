import Button from './Button';
import { useState } from 'react';

type picker = {
  children: string;
  style: string;
  setcolor: React.Dispatch<React.SetStateAction<number[]>>;
  id: number;
};
const Picker = ({ children, style, setcolor, id }: picker) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center">
      <span className={`border-t border-b font-bold ${style}`}>{children}</span>
      <Button
        children={<img src="./plus.svg" alt="" className="w-4" />}
        onClick={() => {
          setcolor((prev) => {
            prev[id] < 255 ? ++prev[id] : 255;
            return [...prev] 
          });
        }}
      />
      <Button
        children={<img src="./minus.svg" alt="" className="w-4" />}
        onClick={() => {
          setcolor((prev) => {
            prev[id] > 255 ? --prev[id] : 0;
            return [...prev]
          });
        }}
      />
    </div>
  );
};

export default Picker;
