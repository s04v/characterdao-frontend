import Header from "../../components/Header";
import styles from './SignUp.module.scss';
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import * as Yup from "yup";
import {useFormik} from "formik";
import Error from "../../components/Error";
import AccountApi from "../../api/Account";
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";

const SignUp = () => {
    const navigate = useNavigate();

    const SignInSchema = Yup.object().shape({
        Email: Yup.string().email('Wrong email format').required('Email is a required field'),
        Password: Yup.string().min(3,'Password is too short').max(30, 'Password is too long').matches(/^[a-zA-Z0-9!@#$%&*\.]{3,30}$/, 'Wrong password format').required('Password is a required field')
    });

    const formik = useFormik({
        initialValues: {
            Email: '',
            Password: ''
        },
        validationSchema: SignInSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values, { setErrors }) => {
            AccountApi.signUp(values).then(res => {
                const { jwt } = res.data;
                const cookies = new Cookies();
                cookies.set('jwt', jwt);
                navigate('/profile');
            }).catch(e => {
                const error = e.response ? e.response.data : e.message;
                setErrors({err: error});
            });
        }
    })

    return (
        <div className={styles.bg}>
            <Header text='Sign up' />
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <div className={styles.field}>
                    <h2>Email</h2>
                    <input type='text' {...formik.getFieldProps("Email")} />
                </div>
                <div className={styles.field}>
                    <h2>Password</h2>
                    <input type='password' {...formik.getFieldProps("Password")} />
                </div>
                <Button text='Send' type='submit'/>
                { formik.errors ?
                    <Error>{formik.errors[Object.keys(formik.errors)[0]]}</Error>
                    : null }
                <p>Already have an account? <a href='/signin'>Sign in</a></p>
                <p><a href='/'>Back home</a></p>
            </form>
        </div>
    );
};

export default SignUp;