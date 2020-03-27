// reducer
// store
// action
// action creator

 
// 2 jalur
  // 1. Accsess global state
  // 2. Update Global State


import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment,decrement,actionWithPayload} from './../redux/actions/counter'


class CounterWithRedux extends Component {
    render() {
        console.log(this.props.bebas)
        console.log(this.props.name)
        return (
            <div>
                <h1>Ini Page Counter</h1>
                <input type="button" onClick={this.props.actionWithPayload} value="click me"/>
                <span>{this.props.bebas.name}</span>
                <center>
                    <input onClick={this.props.onClickMinus} type="button" value="-"/> 
                    <span>{this.props.bebas.angka}</span>
                    <input onClick={this.props.onClickPlus} type="button" value="+"/> 
                </center>

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

const mapDispatchToProps ={
    onClickPlus : increment,
    onClickMinus : decrement,
    actionWithPayload
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterWithRedux);

