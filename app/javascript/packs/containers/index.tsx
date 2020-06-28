import * as React from 'react';
import { connect } from 'react-redux'
import {increment} from '../actions'

const mapStateToProps = state => ({
  counter: state.counter
}
)

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment())
})



const Increment = (props: any) => {
  return (
    <button
      onClick={ () => { props.increment(); console.log(props.counter); } }
    >
      buttonです
    </button>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Increment)
