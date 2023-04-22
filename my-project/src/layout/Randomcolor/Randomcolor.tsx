import Button from '../../components/Button';
import Inputcolor from '../../components/Inputcolor';

const Randomcolor = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Button onClick={()=> {console.log("s")}}> add color</Button>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <Inputcolor children='' style=''/>
        <Inputcolor children='' style=''/>
      </div>
    </div>
  );
};

export default Randomcolor;
