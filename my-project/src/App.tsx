import { useState } from 'react';
import './index.css';
import Randomcolor from './layout/Randomcolor/Randomcolor';
import Createcolor from './layout/Createcolor/Createcolor';
import RandomAdd from './layout/RandomAdd/RandomAdd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <strong>Hello this is ColorPicker App</strong>
      <div className=" w-full h-full flex flex-col items-center justify-center gap-20">
        <div className="w-full grid grid-cols-2 items-center justify-center gap-10">
          <div className=" pt-10 flex h-[90vh] flex-col items-center justify-start gap-4">
            <h1>The random color</h1>
            <Randomcolor />
          </div>
          <div className='pt-10 flex flex-col items-center  gap-4'>
            <h1>The Add random color</h1>
            
            <RandomAdd />
          </div>
        </div>
        <div className="pb-10 flex flex-col items-center justify-center gap-4">
          <h1>Create your color</h1>
          <Createcolor />
        </div>
      </div>
    </>
  );
}

export default App;
