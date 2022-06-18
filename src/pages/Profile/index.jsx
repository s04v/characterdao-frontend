import styles from './Profile.module.scss';
import Header from "../../components/Header";
import ProfileItem from "../../components/ProfileItem";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CharacterApi from '../../api/Character';

const Profile = () => {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        CharacterApi.getAllPrivate().then(res => {
            setCharacters(res.data)
        });
    },[]);

    return (
        <>
            <Header text='Profile' />
            <div className={styles.profile}>
                <div className={styles.buttons}>
                    <a href='/directory'>Back</a>
                    <a href='/create'>Create a new character</a>
                    <p onClick={() => {
                        new Cookies().remove('jwt', {path: '/'});
                        navigate('/');
                    }}>Logout</p>
                </div>
                <div className={styles.list}>
                    {characters ?
                        characters.map(item => {
                            return <ProfileItem {...item} />
                        })
                        : <p className={styles.empty}>Empty</p>}
                </div>
            </div>

        </>
    )
}

export default Profile;