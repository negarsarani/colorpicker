import Inputcolor from '../../components/Inputcolor';
import Picker from '../../components/picker';

const Createcolor = () => {
  return (
    <div className="flex  gap-10 items-center justify-center ">
      <div className="flex flex-col gap-4">
        <Picker children="RED" style="text-red-500" />
        <Picker children="BLUE" style="text-blue-500" />
        <Picker children="GREEN" style="text-red-500" />
      </div>
      <div className="flex items-center justify-center ">
        <Inputcolor children="sa" style="w-40 h-20  " bgcolor={''} />
      </div>
    </div>
  );
};

export default Createcolor;
