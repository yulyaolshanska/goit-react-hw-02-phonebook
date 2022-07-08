import css from './ContactItem.module.css'


export const ContactItem = ({ name, number, deleteContact}) => {
    return(
        <li className={css.contactItem} >
        <p>{name}</p>
        <p>{number}</p>
        <button className={css.button} onClick={deleteContact} type="button">Delete</button>
        </li>
    )
}