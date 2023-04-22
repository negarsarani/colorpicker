import { useState } from 'react';
import Button from '../../components/Button';
import Inputcolor from '../../components/Inputcolor';
import colorData from '../../data/data';
const Randomcolor = () => {
  // eslint-disable-next-line prefer-const
  let [color, setcolor] = useState([
    {
      name: '#000000',
      text: 'text-white',
    },
    {
      name: '#dddd',
      text: 'text-black',
    },
  ]);
  const handleClickRandom = () => {
    // eslint-disable-next-line prefer-const
    let randomIndex1 = Math.floor(Math.random() * 12);
    let randomIndex2 = Math.floor(Math.random() * 12);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * 12);
    }
    // console.log(colorData[randomIndex1], colorData[randomIndex2]);
    // console.log(randomIndex1, randomIndex2);

    setcolor(
      (color = [
        {
          name: colorData[randomIndex1].color,
          text: colorData[randomIndex1].text,
        },
        {
          name: colorData[randomIndex2].color,
          text: colorData[randomIndex2].text,
        },
      ])
    );
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Button onClick={handleClickRandom}> add color</Button>
      <div className="flex flex-col gap-4 w-40 items-center justify-center">
        <Inputcolor
          children={color[0].name}
          style="w-40 h-10"
          bgcolor={color[0].name}
          textcolor={color[0].text}
        />
        <Inputcolor
          children={color[1].name}
          style="w-40 h-10 "
          bgcolor={color[1].name}
          textcolor={color[1].text}
        />
      </div>
    </div>
  );
};

export default Randomcolor;
