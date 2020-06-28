import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';

import Circle from '../../components/charts/circle';

import Increment from '../../containers'


const data = {
  name: "１日の活動時間",
  elements: [
    {name: "study", amount: 80},
    {name: "running", amount: 80},
    {name: "asleep", amount: 300}
  ],
  total: 24 * 60
}


const fetchData = async () => {
  const item: any = document.getElementsByName('csrf-token').item(0);
  const csrfToken = item.content;
  const res = await fetch('http://localhost:3000/api/v1/activities.json', {
    method: 'GET',
    headers: new Headers({
      'Content-type' : 'application/json',
      'X-CSRF-Token': csrfToken
    })
    })
  const data = await res.json();
  console.log(data);
}

const Statistics = () => {
  const click = (e) => {
  }

  React.useEffect(() => {
    fetchData()
      .then(data => {
          console.log(JSON.stringify(data));
      })
      .catch(err => {
          console.log(err);
      })
  });

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
    <Increment />
  </>
)
}

export default Statistics;
