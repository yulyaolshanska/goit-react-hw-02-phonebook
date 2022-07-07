import {ContactItem} from 'components/ContactItem/ContactItem'

export  const ContactList = ({contacts}) => {
    return(
        <ul>
            {contacts.map(({name}) => {

  return <ContactItem name={name}></ContactItem>
            })}
           
        </ul>
    )
}