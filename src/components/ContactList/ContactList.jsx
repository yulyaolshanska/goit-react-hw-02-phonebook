import {ContactItem} from 'components/ContactItem/ContactItem'

export  const ContactList = ({contacts}) => {
    return(
        <ul>
            {contacts.map(({name, number}) => {

  return <ContactItem name={name} number={number}></ContactItem>
            })}
           
        </ul>
    )
}