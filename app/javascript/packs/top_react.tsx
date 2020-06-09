import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';

import Circle from './components/charts/circle';

import store from './store/sample';

 Modal.setAppElement('#modal');

const data = {
  name: "１日の活動時間",
  elements: [
    {name: "study", amount: 80},
    {name: "running", amount: 80},
    {name: "asleep", amount: 300}
  ],
  total: 24 * 60
}


const App = ({name: string}) => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  
  function closeModal() {
    setIsOpen(false);
  }

  const click = (e) => {
    store.dispatch({ type: 'INCREMENT' })
    setIsOpen(true);
  }
  return (
  <>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
    hoge
   </Modal>
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App id="app" name="sibyl" />,
    document.body.appendChild(document.createElement('div')),
  )
})
