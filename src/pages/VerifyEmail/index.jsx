import styles from "./VerifyEmail.module.scss";
import Header from "../../components/Header";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import AccountApi from "../../api/Account";

const VerifyEmail = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        AccountApi.verify(token).then(result => {
            setSuccess(true);
            setTimeout(() => {
                navigate('/signin');
            }, 2000)
        }).catch(e => {
            setSuccess(false);
            setTimeout(() => {
                navigate('/signin');
            }, 2000)
        })
    },[]);

    return (
        <div className={styles.bg}>
            <Header text='Verification' />
            { success ?
                <>
                    <p className={styles.success}>Success</p>
                    <p className={styles.message}>You will be redirected to sign in page</p>
                </> : <p className={styles.fail}>Fail</p>
            }
           </div>
    )
}

export default VerifyEmail;