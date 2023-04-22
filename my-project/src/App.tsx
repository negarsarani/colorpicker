import { useState } from 'react';
import './index.css';
import Randomcolor from './layout/Randomcolor/Randomcolor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <strong>HeLLo this is ColorPicker App</strong>
      <div className="bg-red-300 flex flex-col items-center justify-center gap-10">
        <div>
          <h1>The random color</h1>
          <Randomcolor />
        </div>
        <div>
          <h1>Create your color</h1>
        </div>
      </div>
    </>
  );
}

export default App;
