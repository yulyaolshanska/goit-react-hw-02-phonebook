import React, {Component} from 'react';
import css from './ContactForm.module.css';
const DEFAUL_STATE = {
    name: "",
    number: "",
}
export  class ContactForm extends Component {
 
  
    state = {
        name: "",
        number: "",
    }

handleSubmit = (e) => {
    e.preventDefault();
//    const {name, number} = this.state
//    console.log(name, number);
// const { name, number } = this.state;
const { onSubmit } = this.props;
onSubmit(this.state)
//    this.props.onSubmit(this.state);
   this.setState(DEFAUL_STATE)
// console.log(this.state)
}

handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    // console.log(e.target.name)

    // console.log(e.target.value)
}

    render () {
        const { name, number } = this.state;

        return <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.label}>
            Name
            <input className={css.input} onChange={this.handleChange}
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
       </label>
       <label className={css.label}>Number
       <input className={css.input} value={number}  onChange={this.handleChange} type="tel" name="number"></input>
       </label>
        <button className={css.addBtn} type='submit'>Add contact</button>
        </form>
    }
}
