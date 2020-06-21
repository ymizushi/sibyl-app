import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {}

const Pomodoro: React.FC<Props> = () => {
  const Button = styled.button`
    background-color: #FF3C3C;
    color: white;
  `

  const onButtonClick = (e) => {
    console.log("button clicked");
  }

  return (
    <>
      <select>
        <option>coding</option>
        <option>reading</option>
        <option>english</option>
        <option>exercise</option>
      </select>
      <Circle seconds={100} />
      <Button onClick={onButtonClick}>クリア</Button>
    </>
  )
}


type CircleProps = {
  seconds: number;
}

const Circle = (props: CircleProps) => {
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

  const onTimerClick = (e) => {
    console.log("timer clicked");
  }

  return (
    <Timer onClick={onTimerClick}>
      <TimerText>{Math.floor(props.seconds / 60) }:{props.seconds % 60 }</TimerText>
    </Timer>
  )
}

export default Pomodoro;
