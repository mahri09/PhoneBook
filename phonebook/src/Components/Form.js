// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import './Form.css'

class Form extends Component{
  constructor(){
    super()
    this.inputChange=this.inputChange.bind(this);
    this.sendForm=this.sendForm.bind(this);
  }
  state={
    fullName: '',
    phone: ''
  }

  inputChange(e){
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value});// no matter witch input is clicked it show us inputs name to know witsch send to what
  }

  sendForm(e){
    e.preventDefault();//eventPreventDeafult();
    if(this.state.fullName !== '' & this.state.phone !== ''){
      this.props.addContact({...this.state})
      this.setState({ fullName: "", phone: "" });
    }
    else{
      alert('Please, type name and number !')
    }
  }

  render(){
    return  (
      <div>
        <form className='formField' onSubmit={this.sendForm}>
          <input 
            value={this.state.fullName}
            onChange={this.inputChange} 
            name="fullName"   
            placeholder='enter your name'/>
          <br/>
          <input 
            value={this.state.phone}
            onChange={this.inputChange}  
            name="phone" 
            placeholder='enter your number'/>
          <br/>
          <button>
          add Contact
          </button>
        </form>
      

      </div>
    )
  }
}


export default Form