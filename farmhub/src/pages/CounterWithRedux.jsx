// reducer
// store
// action
// action creator

 
// 2 jalur
  // 1. Accsess global state
  // 2. Update Global State


import React, { Component } from 'react'
import {connect} from 'react-redux'


class CounterWithRedux extends Component {
    render() {
        console.log(this.props.bebas)
        console.log(this.props.name)
        return (
            <div>
                <h1>Ini Page Counter</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        bebas : state.counter,
        name : state.name
    }
}


export default connect(mapStateToProps)(CounterWithRedux);

