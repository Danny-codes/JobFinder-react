import styles from './Input.module.css'
const Input = (props) => {

    return(
        <input
            className={styles.input}
            refP={props.ref}
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
          />
    )
}

export default Input