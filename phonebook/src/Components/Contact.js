import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Contact extends Component {
  constructor (){
    super()
    this.addContact=this.addContact.bind(this);
  }
  state={
    contacts:[{fullName: 'Jenny Mile', phone: '+2458869558'},
              {fullName: 'Stefan Statford', phone: '+2986288555'}]
  }

  addContact (datas){
    const newContacts = this.state.contacts
    newContacts.push(datas)
    this.setState({contacts :  newContacts})
  }



  render() {
    return (
      <div>
        Contacts
        <List contacts={this.state.contacts}/>
        <Form addContact={this.addContact}/>
      </div>
    );
  }
}

export default Contact;