import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';
import store from '../../store/sample';

import Circle from '../../components/charts/circle';


const data = {
  name: "１日の活動時間",
  elements: [
    {name: "study", amount: 80},
    {name: "running", amount: 80},
    {name: "asleep", amount: 300}
  ],
  total: 24 * 60
}

const Statistics = () => {
  const click = (e) => {
    store.dispatch({ type: 'INCREMENT' })
  }
  return (
  <>
    <Circle r={200} data={data} />
    <table>
      <tr>
        <th>name </th>
        <th>amount</th>
      </tr>
      {
        data.elements.map ( e => {
          return <tr>
            <td>{e.name}</td>
            <td>{e.amount}</td>
          </tr>
        }
        )
      }
    </table>
    <div id="modal-point"></div>
    <button onClick={click}>click</button>
  </>
)
}

export default Statistics;
