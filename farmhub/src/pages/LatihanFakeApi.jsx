import React from 'react'
import Axios from 'axios'


class LatihanFakeApi extends React.Component{
    state = {
        data : []
    }

    componentDidMount(){
        console.log('ini component did mount')
        this.getDataFromApi()
    }

    getDataFromApi = () => {
        Axios.get('http://localhost:3001/todos')
        .then((res) => {
            this.setState({data : res.data})
        })
        .catch((err) => {
            console.log(err)
        })

        // console.log(' ini dibawah promise ')
    }

    onAddBtnClick = () => {
        var inputTodo = this.refs.todo.value
        var inputUser = this.refs.user.value
        if(inputTodo && inputUser){
            var data = {
                user : inputUser,
                todo : inputTodo
            }
    
    
            Axios.post('http://localhost:3001/todos', data) 
            .then((res) => {
                this.getDataFromApi()
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        else{
            alert('data harus isi semua')
        }

    }

    
    

    printData = () => {
        console.log('ini function print data')
        console.log(this.state.data)
        // var output = []
        
        // for(var i = 0 ; i < this.state.data.length ; i ++){
        //     output.push(
        //         <li className='list-group-item'> 
        //             {this.state.data[i].todo + " " + '(' +this.state.data[i].user + ')'} 
        //             <span onClick={() => alert(this.state.data[i])} className='btn btn-outline-danger ml-3'>delete</span> 
        //             <span className='btn btn-outline-info ml-3'>edit</span> 
        //         </li>
        //     )
        // }

        var output = this.state.data.map((val) => {
            return(
                <li className='list-group-item'> 
                     {val.todo + " " + '(' +val.user + ')'} 
                     <span onClick={() => this.onDeleteBtnClick(val.id)} 
                     className='btn btn-outline-danger ml-3'>delete</span> 
                     <span className='btn btn-outline-info ml-3'>edit</span> 
                 </li>
            )
        })
        console.log(output)
        return output
    }

    onDeleteBtnClick = (id) => {
        Axios.delete('http://localhost:3001/todos/' + id)
        .then((res) => {
            this.getDataFromApi()
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        console.log('ini render')
        return(
            <div className='text-center'>
                <h1>Latihan Fake API</h1>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <ul className='list-group mb-3'>
                            {this.printData()}
                        </ul>
                        <input type='text' ref='todo' placeholder='what will you do?' className='form-control' />
                        <input type='text' ref='user' placeholder='your name?' className='form-control mt-3' />
                        <button className='btn btn-outline-primary mt-3' onClick={this.onAddBtnClick} >Add</button>
                        {/* inputannya */}
                    </div>
                </div>
            </div>
        )
    }
}

export default LatihanFakeApi;