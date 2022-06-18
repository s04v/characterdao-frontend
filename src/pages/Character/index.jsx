import Header from "../../components/Header";
import styles from "./Character.module.scss";
import {TiDelete} from "react-icons/ti";
import Button from "../../components/Button";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import CharacterApi from '../../api/Character';

const Character = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        CharacterApi.get(id).then(result => {
            setCharacter(result.data);
        }).catch(e => {
            navigate('/directory');
        })
    }, []);
    return (
        <>
            <Header text='Character'/>
            <div className={styles.character}>
                <div className={styles.buttons}>
                    <a href='/directory'>Back</a>
                </div>
                {character ?
                    <div className={styles.top}>

                    <div className={styles.left}>
                        <div className={styles.mainImg}>
                            <img src={character.MainPhoto} />
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.item}>
                                <img src={character.Photo1} />
                            </div>
                            <div className={styles.item}>
                                <img src={character.Photo2} />
                            </div>
                            <div className={styles.item}>
                                <img src={character.Photo3} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>{character.Name}</p>
                        <p>NFT: <a href={character.NFTLink} >{character.NFTLink}</a> </p>
                        <p>Social: <a href={character.SocialLink} >{character.SocialLink}</a> </p>
                        <p>{character.Description}</p>
                    </div>
                </div>
                : 'Empty'}
            </div>
        </>
    );
}

export default Character;