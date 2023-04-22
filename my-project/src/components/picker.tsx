import Button from './Button';

type picker = {
  children: string;
  style: string;
};
const Picker = ({ children, style }: picker) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center">
      <span className={`border-t border-b font-bold ${style}`}>{children}</span>
      <Button
        children={<img src="./public/plus.svg" alt="" className='w-4'/>}
        onClick={() => {
          console.log('q');
        }}
      />
      <Button
        children={<img src="./public/minus.svg" alt="" className='w-4' />}
        onClick={() => {
          console.log('q');
        }}
      />
    </div>
  );
};

export default Picker;