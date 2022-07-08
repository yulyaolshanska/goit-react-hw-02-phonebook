import {ContactItem} from 'components/ContactItem/ContactItem'
import css from './ContactList.module.css'

export  const ContactList = ({contacts, deleteContact}) => {
    return(
        <ul className={css.contactList}>
            {contacts.map(({name, number, id}) => {

  return <ContactItem deleteContact={() => deleteContact(id)} key={id}  name={name} number={number}></ContactItem>
            })}
           
        </ul>
    )
}