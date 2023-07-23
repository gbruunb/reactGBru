import React from 'react'

type Props = {
    data: string[];
    func: React.Dispatch<React.SetStateAction<string>>;
};

const about = ({data, func}:Props) => {
    return (
    <div>
        {data.map((item, idx) => (
            <h4 key={idx}>{item}</h4>
            
        ))}
         <button onClick={() => func("TTT")}>Click Me</button>
    </div>
    )
};

export default about;