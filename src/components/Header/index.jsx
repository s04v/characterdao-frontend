import styles from './Header.module.scss';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1>CHARACTER <span>DAO</span></h1>
            <h2>{props.text ?<span>{props.text}</span> : '' }</h2>
        </div>
    )
};

export default Header;