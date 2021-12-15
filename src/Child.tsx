import * as React from 'react';
interface IChildProps {
    name: string;
    data: string[];
}
const Child:React.FC<IChildProps> = (props) =>{
    return (
        <div>
            <h2>Test {props.name}</h2>
            <ul>
                {props.data.map((value,idx)=> <li key={idx}>{value}</li>)}
            </ul>
        </div>
    );
};

export default Child;