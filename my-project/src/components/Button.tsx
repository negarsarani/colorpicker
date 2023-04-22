type Button = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
};

const Button = ({ children, onClick }: Button) => {
  return (
    <button className="border rounded-xl w-20 h-10 " onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
