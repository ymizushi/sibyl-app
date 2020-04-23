import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Circle from './components/charts/circle';

const data = {
  name: "１日の活動時間",
  elements: [
    {name: "study", amount: 80},
    {name: "running", amount: 80},
    {name: "asleep", amount: 300}
  ],
  total: 24 * 60
}

const App = ({name: string}) => (
  <>
    <Circle r={200} data={data} />
  </>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="sibyl" />,
    document.body.appendChild(document.createElement('div')),
  )
})
