import * as React from 'react';
import { connect } from 'react-redux'
import {increment, fetchActivities} from '../actions'

const mapStateToProps = state => ({
  counter: state.counter,
  activities: state.activities
}
)

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  fetchActivities: () => dispatch(fetchActivities())
})



const Increment = (props: any) => {
  return (
    <button
      onClick={ () => { 
        props.increment();
        console.log(props.counter);
      }
      }
    >
      incrementします
    </button>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Increment)
