type Input = {
  children: string;
  style: string;
};
const Inputcolor = ({ children, style }: Input) => {
  return <div className={` border border-black rounded-xl flex flex-col items-center justify-center text-center ${style}`}>{children}</div>;
};

export default Inputcolor;
