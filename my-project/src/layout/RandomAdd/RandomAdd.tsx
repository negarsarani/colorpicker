import { useState } from 'react';
import Button from '../../components/Button';
import Inputcolor from '../../components/Inputcolor';

const RandomAdd = () => {
  const [listColor, setlistColor] = useState([]);

  return (
    <div className="flex flex-col gap-4 ">
      <Button
        onClick={() => {
          const randomColor =
            '#' + Math.floor(Math.random() * 16777215).toString(16);
          setlistColor([ randomColor , ...listColor]);
        }}
      >
        {' '}
        Add color
      </Button>
      <div className=" h-[30rem] overflow-y-scroll ">
        <div className="flex flex-col items-center justify-center  gap-4">
          {listColor.map((item) => (
            <Inputcolor
              children={item}
              style="w-40 h-10 "
              bgcolor={item}
              textcolor={''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomAdd;
