import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {}

const Button = styled.button`
  background-color: #FF3C3C;
  color: white;
`

const Select = styled.select`
  display: block;
  margin 1rem auto;
  width: 10rem;
  height: 2rem;
`

const PomodoroDiv = styled.div`
`

const Pomodoro: React.FC<Props> = () => {
  const [timer, setTimer] = React.useState(1500);

  const onButtonClick = (e) => {
    console.log("button clicked");
    setTimer(1500);
  }

  return (
    <PomodoroDiv>
      <Select>
        <option>coding</option>
        <option>reading</option>
        <option>english</option>
        <option>exercise</option>
      </Select>
      <Circle seconds={timer} setTimer={setTimer}/>
      <Button onClick={onButtonClick}>クリア</Button>
    </PomodoroDiv>
  )
}


type CircleProps = {
  seconds: number;
  setTimer: any;
}

const Timer = styled.div`
  width: 10em;
  height: 10em;
  border-radius: 5em;
  background-color: #FF3C3C;
`
const TimerText = styled.div`
  margin-left: 4em;
  padding-top: 4em;
  color: white;
`

const Circle = (props: CircleProps) => {
  const [isStop, setIsStop] = React.useState(true);
  const [intervalNum, setIntervalNum] = React.useState(null);

  const setTimer = () => props.setTimer(prevCount =>  prevCount - 1);

  const onTimerClick = (e) => {
    if (isStop) {
      setIsStop(false);
      setIntervalNum(setInterval(setTimer, 1000));
    } else {
      clearInterval(intervalNum);
      setIsStop(true);
    }
  }

  return (
    <Timer onClick={onTimerClick}>
      <TimerText>{Math.floor(props.seconds / 60) }:{props.seconds % 60 }</TimerText>
    </Timer>
  )
}

export default Pomodoro;
