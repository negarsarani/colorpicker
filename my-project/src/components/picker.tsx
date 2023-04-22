import Button from './Button';

type picker = {
    children: string;
    style: string;
};
const Picker = ({ children, style }: picker) => {
    return (
        <div className="flex flex-col gap-1 items-start justify-center">
            <span className=' flex {style}'>{children}</span>
            <Button children='+' style='' onClick={() => { console.log("q") }} />
            <Button children='_' style='' onClick={() => { console.log("q") }} />
        </div>
    );
};

export default Picker;
