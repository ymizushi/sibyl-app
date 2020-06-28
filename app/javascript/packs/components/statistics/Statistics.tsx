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
  return res.json();
}

const Statistics = () => {
  const click = (e) => {
  }

  const [activities, setActivities] = React.useState([]);

  React.useEffect( () => {
    fetchData()
      .then(data => {
        console.log(data);
        setActivities(data);
      })
      .catch(err => {
      });
  }, []);
  return (
  <>
    <Circle r={200} data={data} />
    <table>
      <tr>
        <th>kind </th>
        <th>status</th>
        <th>created_at</th>
      </tr>
      { activities.map(e => { 
        return <tr><th> { e.kind } </th><th>{ e.status} </th><th> { e.created_at }</th></tr>
      })} 
    </table>
    <div id="modal-point"></div>
    <button onClick={click}>click</button>
    <Increment />
  </>
)
}

export default Statistics;
