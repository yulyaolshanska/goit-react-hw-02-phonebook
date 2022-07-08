import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';




export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  }

  addContact = ({name, number}) => {
    const contact = {id: nanoid(), name, number};

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    })
    
      );
    // console.log(contact)

  }

  changeFilter = (e) => {
this.setState({
  filter: e.target.value
})
  }

 

  render() {
    const {contacts, filter} = this.state
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
    
    return <>
    <ContactForm 
    onSubmit={this.addContact}
    />
    < Filter 
    filter={filter} 
    onChange={this.changeFilter}
    />
    <ContactList 
    contacts={filter === "" ? contacts : filteredContacts}
    />
    </>
  }
}
