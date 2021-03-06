import * as React from 'react';
import styled from 'styled-components';

type Props = {}

const Button = styled.button`
  display: block;
  background-color: #FF3C3C;
  color: white;
  border: none;
  border-radius: 0.2rem;
  font-size: 2rem;
  margin 3rem auto;
  width: 12rem;
  height: 3rem;
`

const Select = styled.select`
  display: block;
  text-align: center;
  margin 3rem auto;
  width: 20rem;
  height: 3rem;
  font-size: 2rem;
  border-color: #A2A2A2;
  background-color: white;
  border-style: solid;
  
`

const Option = styled.option`
  text-align: center;
`

const PomodoroDiv = styled.div`
`



const Pomodoro: React.FC<Props> = () => {
  const [selected, setSelected] = React.useState("");

  const getSelectedValue = (e) => {
    setSelected(e.target.value)
  }

  return (
    <PomodoroDiv>
      <Select onChange={getSelectedValue}>
        <Option>coding</Option>
        <Option>reading</Option>
        <Option>english</Option>
        <Option>exercise</Option>
      </Select>
      <Circle selectedValue={selected} />
    </PomodoroDiv>
  )
}


type CircleProps = {
  selectedValue: string;
}

const Timer = styled.div`
  margin: 0 auto;
  width: 20rem;
  height: 20rem;
  border-radius: 10rem;
  background-color: #FF3C3C;
`
const TimerText = styled.div`
  margin-left: 6rem;
  padding-top: 8rem;
  font-size: 3rem;
  color: white;
`

const Circle = (props: CircleProps) => {
  const [isStop, setIsStop] = React.useState(true);
  const [intervalNum, setIntervalNum] = React.useState(null);
  const [timer, setTimer] = React.useState(1500);

  const setTiming = () => setTimer(prevCount =>  prevCount - 1);

  const timerClick = (e) => {
    if (isStop) {
      setIsStop(false);
      setIntervalNum(setInterval(setTiming, 1000));
      addActivity("start", props.selectedValue)
    } else {
      clearInterval(intervalNum);
      setIsStop(true);
      addActivity("stop", props.selectedValue)
    }
  }

  const clearButtonClick = (e) => {
    setTimer(1500);
    if (intervalNum) {
      clearInterval(intervalNum);
      setIsStop(true);
      addActivity("end", props.selectedValue)
    }
  }

  return (
    <>
      <Timer onClick={timerClick}>
        <TimerText>{Math.floor(timer / 60) }:{formatNumToString(timer % 60) }</TimerText>
      </Timer>
      <Button onClick={clearButtonClick}>クリア</Button>
    </>
  )
}


  // 新規追加
function  addActivity(status: "start"|"end"|"stop", kind: string) {
  const item: any = document.getElementsByName('csrf-token').item(0);
  const csrfToken = item.content;
  fetch('http://localhost:3000/api/v1/activities.json', {
      method: 'POST',
      body: JSON.stringify({
        status,
        kind
      }),
    headers: new Headers({
      'Content-type' : 'application/json',
      'X-CSRF-Token': csrfToken
    })
    }).then( () => {
      console.log("post suceeded")
    })
  }

function formatNumToString(num: number): string {
  return num === 0 ? "00" : String(num)
}

export default Pomodoro;
