import css from './Filter.module.css';


export const Filter = ({filter, onChange }) => {
   return (
    <>
    <label className={css.label}>Find contacts by name
    <input className={css.input} type="text" value={filter} onChange={onChange}>
    </input>
    </label>
    </>
   )
}