import styles from './CharacterItem.module.scss';
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import CharacterApi from '../../api/Character';
import ReactDOM from 'react-dom';

const CharacterItem = (props) => {
    const navigate = useNavigate();
    const [isPublic, setIsPublic] = useState(props.IsPublic);

    const handleChange = () => {
        const data = {
            'Name': props.Name,
            'NFTLink': props.NFTLink,
            'SocialLink': props.SocialLink,
            'Description': props.Description,
            'MainPhoto': props.MainPhoto,
            'Photo1': props.Photo1,
            'Photo2': props.Photo2,
            'Photo3': props.Photo3,
            'IsPublic': !isPublic,
        };
        CharacterApi.update(props.Id, data).then(result => {
            setIsPublic(!isPublic);
        });
    }

    const onRemove = () => {
        CharacterApi.remove(props.Id).then(result => {
            console.log(result);
            window.location = '/profile';
        })
    }
    return (
        <div className={styles.item} >
            <img src={props.MainPhoto} />
            <a href={`/character/${props.Id}`} ><h1>{props.Name}</h1></a>
            <div className={styles.buttons}>
                {
                    isPublic ? <p className={styles.public}>Public</p> : <p>Private</p>
                }
                <input type='checkbox' checked={isPublic} onClick={handleChange}/>
                <AiFillEdit size={30} onClick={() => navigate(`/edit/${props.Id}`)}/>
                <AiFillDelete size={30} onClick={onRemove}/>
            </div>
        </div>
    );
}

export default CharacterItem;