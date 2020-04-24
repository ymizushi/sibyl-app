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

type ArcProps = {
    cx: number;
    cy: number;
    r: number;
    start: number;
    end: number;
    fill: string;
}

function Circle({r,data}: Props) {
    const height = r * 2
    const width = r * 2
    const unitDegree = 360.0 / data.total
    const degrees: number[] = data.elements.map(e => {
        return (unitDegree *  e.amount);
    });
    let totalDegree = 0;
    let arcs = [];
    for (let i in degrees) {
        arcs.push({start: totalDegree, end: totalDegree+degrees[i]});
        totalDegree += degrees[i];
    }
    return (
        <>
            <svg xmlns="http:/www.w3.org/2000/svg" version="1.1" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                { arcs.map( a => {
                  return <Arc cx={r} cy={r} r={r} start={a.start-90} end={a.end-90} fill={"red"}/>
                }) }
            </svg>
        </>
    );
}

function toRadian(degree: number) {
    return degree * ( Math.PI / 180 ) ;
}

function Arc({cx, cy, r, start, end, fill}: ArcProps) {
    const x1 = cx + r * Math.cos(toRadian(start));
    const y1 = cy + r * Math.sin(toRadian(start));
    const x2 = cx + r * Math.cos(toRadian(end));
    const y2 = cy + r * Math.sin(toRadian(end));
    const dx = x2 - x1;
    const dy = y2 - y1;
    const f1 = (end - start) >= 180 ? 1 : 0
    const f2 = 1;
    return (
        <path d={`M ${cx} ${cy} L ${x1} ${y1} a ${r} ${r} 0 ${f1} ${f2} ${dx} ${dy} z`}  fill={fill} stroke="black" />
    );
}

export default Circle;