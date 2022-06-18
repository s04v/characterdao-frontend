import styles from './Button.module.scss';

const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick} type={props.type}>
            {props.text}
        </button>
    );
}

export default Button;