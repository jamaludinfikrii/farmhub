import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Loading extends Component {
    state = {
        tooLong : false
    }

    componentDidMount(){
        this.handleTooLongLoading()
    }
    handleTooLongLoading = () => {
        setTimeout(
            () => this.setState({tooLong : true}),
            10000
        )
    }

    render() {
        return (
            <div className='row justify-content-center align-items-center' style={{height:'80vh'}}>
                {
                    this.state.tooLong ?
                    <h1>Network Error, try again</h1>
                    :
                    <Loader 
                        type='ThreeDots'
                        color='#3085d6'
                        height = {100}
                        width = {100}
                    />

                }
                {/* loading .. */}
            </div>
        );
    }
}

export default Loading;