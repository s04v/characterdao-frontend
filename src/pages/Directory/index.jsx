import styles from './Directory.module.scss';
import Header from "../../components/Header";
import Button from "../../components/Button";
import {useEffect, useState} from "react";
import CharacterApi from "../../api/Character";
import Cookies from "universal-cookie";

const Directory = () => {
    const [characters, setCharacters] = useState(null);

    const token = new Cookies().get('jwt');

    useEffect(() => {
        CharacterApi.getAll().then(res => {
            setCharacters(res.data)
        });
    },[]);

    return (
        <>
            <Header text='Character directory' />
            <div className={styles.directory}>
                <div className={styles.buttons}>
                    <a href='/'>Home</a>
                    {token ?
                        <a href='/profile'>Profile</a>
                        : <>
                            <a href='/signin'>Sing in</a>
                            <a href='/signup'>Sing up</a>
                        </>}


                </div>
                <div className={styles.list}>
                    {characters ?
                        characters.map(item => {
                        return  <a href={`/character/${item.Id}`}>
                                    <div className={styles.item}>
                                        <img src={item.MainPhoto} />
                                        <h1>{item.Name}</h1>
                                    </div>
                                </a> })
                        : <p className={styles.empty}>Empty</p>
                    }
                </div>
            </div>

        </>
    );
}

export default Directory;