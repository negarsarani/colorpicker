import Button from '../../components/Button';
import Inputcolor from '../../components/Inputcolor';

const Randomcolor = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Button onClick={()=> {console.log("s")}}> add color</Button>
      <div className='flex flex-col gap-4 w-40 items-center justify-center'>
        <Inputcolor children='#hhhh' style='w-40 h-10 '/>
        <Inputcolor children='#llll' style='w-40 h-10 '/>
      </div>
    </div>
  );
};

export default Randomcolor;
