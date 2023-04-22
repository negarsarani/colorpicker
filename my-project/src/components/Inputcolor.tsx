type Input = {
  children: string;
  style: string;
  bgcolor: string;
  textcolor?: string;
};
const Inputcolor = ({ children, style  , bgcolor , textcolor}: Input) => {
  return (
    <div
      className={` border border-black rounded-xl flex flex-col items-center justify-center text-center ${style}`}
      style={{ backgroundColor: bgcolor, color: textcolor }}
    >
      {children}
    </div>
  );
};

export default Inputcolor;
