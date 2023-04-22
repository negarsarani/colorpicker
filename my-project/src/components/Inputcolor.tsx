type Input = {
  children: string;
  style: string;
};
const Inputcolor = ({ children, style }: Input) => {
  return <div className={style}>{children}</div>;
};

export default Inputcolor;
