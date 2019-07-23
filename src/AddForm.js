import React, { Component } from 'react'

class AddForm extends Component {
    state= {
         content: '' 
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><h4 className="blue-text">Add New todo:</h4></label>
                    <input id='acomplete' type='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddForm