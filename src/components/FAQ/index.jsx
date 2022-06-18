import styles from './FAQ.module.scss';
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import {useState} from "react";

const FAQ = (props) => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }

    return (
        <>
        <div className={styles.faq}>
           <div className={styles.top}>
               {props.question} {open ? <AiOutlineMinus onClick={onClick} /> : <AiOutlinePlus onClick={onClick} />}
           </div>
            <div className={`${open ? styles.open : null} ${styles.bottom} `}>
                {props.answer}
            </div>
        </div>

        </>
    );
}

export default FAQ;