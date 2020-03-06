import React from 'react'
import Axios from 'axios'


// render

// componentdidmount

// render

// oper oper data
  // datanya ada dimana?

// CRUD JSON-SERVER
 // Create ==> post
 // Read ==> get
 // Update ==> patch
 // Delete ==> delete



class LatihanFakeApi extends React.Component{
    state = {
        data : [],
        showEditForm : false,
        indexSelectedToEdit : null  //0
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

            this.refs.todo.value = ''
            this.refs.user.value = ''
        }
        else{
            alert('data harus isi semua')
        }

    }

    onEditBtnClick = (bebas) => {

        this.setState({showEditForm : true,indexSelectedToEdit : bebas})
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

        var output = this.state.data.map((val,index) => { // 4
            return(
                <li key={index} className='list-group-item'> 
                     {val.todo +  ' - '  +val.user } 
                     <span onClick={() => this.onDeleteBtnClick(val.id)} 
                     className='btn btn-outline-danger ml-3'>delete</span> 
                     <span className='btn btn-outline-info ml-3' onClick={ () => this.onEditBtnClick(index)}>edit</span> 
                 </li>
            )
        })

        console.log(output)
        return output
    }

    onDeleteBtnClick = (bebas) => {
        Axios.delete('http://localhost:3001/todos/' + bebas)
        .then((res) => {
            this.getDataFromApi()
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    onCancelBtnClick = () => {
        this.setState({showEditForm : false})
    }

    onSaveBtnClick = (id) => {
        // alert(id)
        var inputTodoEdit = this.refs.todoEdit.value ?
         this.refs.todoEdit.value :
         this.state.data[this.state.indexSelectedToEdit].todo
 
         var inputUserEdit = this.refs.userEdit.value ? 
         this.refs.userEdit.value : 
         this.state.data[this.state.indexSelectedToEdit].user
        // alert(inputTodoEdit)
        // alert(inputUserEdit)
        var data = {
            todo : inputTodoEdit,
            user : inputUserEdit
        }

        Axios.patch('http://localhost:3001/todos/' +id , data)
        .then((res) => {
            console.log(res)
            this.getDataFromApi()
            this.setState({showEditForm : false})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderEditForm = () => {
        console.log('render edit form')
        if(this.state.showEditForm){
            return(
                <span>
                    <input type='text' ref='todoEdit' placeholder={this.state.data[this.state.indexSelectedToEdit].todo} className='form-control mt-3' />
                    <input type='text' ref='userEdit' placeholder={this.state.data[this.state.indexSelectedToEdit].user} className='form-control mt-3' />
                    <button className='btn btn-outline-success mt-3' 
                    onClick={() => this.onSaveBtnClick(this.state.data[this.state.indexSelectedToEdit].id)} >Save</button>
                    <button className='btn btn-outline-danger mt-3' onClick={this.onCancelBtnClick} >Cancel</button>
                </span>

            )
        }
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
                        
                        <hr/>
                        {this.renderEditForm()}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default LatihanFakeApi;