import * as React from 'react';

type Action = {
  type: string;
  payload: {[key: string]: string;};
}

const enum ActionTypes {
  Increment,
  Decrement
}


export const increment = () => ({
  type: 'INCREMENT',
})
