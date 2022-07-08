import {Component} from 'react';

export  class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }

handleSubmit = (e) => {
    e.preventDefault();
//    const {name, number} = this.state
//    console.log(name, number);
   this.props.onSubmit(this.state);

}

handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    // console.log(e.target.name)

    // console.log(e.target.value)
}

    render () {
        return <form onSubmit={this.handleSubmit}>
            <label>
            Name
            <input onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
       </label>
       <label>Number
       <input onChange={this.handleChange} type="tel" name="number"></input>
       </label>
        <button type='submit'>Add contact</button>
        </form>
    }
}
