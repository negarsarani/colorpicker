import Inputcolor from '../../components/Inputcolor';
import Picker from '../../components/picker';
import { useState } from 'react';

const Createcolor = () => {
  const [color, setcolor] = useState([100, 0, 0]);

  return (
    <div className="flex  gap-10 items-center justify-center ">
      <div className="flex flex-col gap-4" >
        <Picker
          children="RED"
          setcolor={setcolor}
          style="text-red-500"
          id={0}
        />
        <Picker
          children="GREEN"
          setcolor={setcolor}
          style="text-green-500"
          id={1}
        />
        <Picker
          children="BLUE"
          setcolor={setcolor}
          style="text-blue-500"
          id={2}
        />
      </div>
      <div className="flex items-center justify-center text-white">
        <Inputcolor
          children={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}
          style="w-40 h-20  "
          bgcolor={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}
        />
      </div>
    </div>
  );
};

export default Createcolor;
