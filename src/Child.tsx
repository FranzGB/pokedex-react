import * as React from 'react';
interface IChildProps {
    name: string;
    data: string[];
}
const Child:React.FC<IChildProps> = (props) =>{
    return (
        <div>
            <h2 className={"bg-red-900"}>Test {props.name}</h2>
            <ul className={"list-inside list-disc"}>
                {props.data.map((value,idx)=> <li className={"hover:text-white"} key={idx}>{value}</li>)}
            </ul>
        </div>
    );
};

export default Child;