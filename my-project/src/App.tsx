import { useState } from 'react';
import './index.css';
import Randomcolor from './layout/Randomcolor/Randomcolor';
import Createcolor from './layout/Createcolor/Createcolor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <strong>Hello this is ColorPicker App</strong>
      <div className=" w-full h-full flex flex-col items-center justify-center gap-20">
        <div className=" pt-10 flex flex-col items-center justify-center gap-4">
          <h1>The random color</h1>
          <Randomcolor />
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
