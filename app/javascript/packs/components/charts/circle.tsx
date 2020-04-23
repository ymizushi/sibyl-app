import * as React from 'react'

type Element = {
    name: string;
    amount: number;
}

type Props = {
    r: number;
    data: {
      name: string;
      elements: Element[],
      total: number;
    };
}

function Circle({r,data}: Props) {
    const height = r * 2
    const width = r * 2
    return (
        <>
            <svg xmlns="http:/www.w3.org/2000/svg" version="1.1" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                <circle cx={r} cy={r} r={r} />
            </svg>
        </>
    );
}

export default Circle;