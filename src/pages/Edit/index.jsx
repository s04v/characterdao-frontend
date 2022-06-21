import Header from '../../components/Header';
import styles from './Edit.module.scss';
import Button from "../../components/Button";
import {TiDelete} from "react-icons/ti";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useEffect, useRef, useState} from "react";
import Error from "../../components/Error";
import {Upload} from "upload-js";
import CharacterApi from '../../api/Character';
import {useNavigate, useParams} from "react-router-dom";

const Edit = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const submitRef = useRef();
    const fileMainRef = useRef();
    const fileRef1 = useRef();
    const fileRef2 = useRef();
    const fileRef3 = useRef();

    const [mainImg, setMainImg] = useState(null);
    const [pic1, setPic1] = useState(null);
    const [pic2, setPic2] = useState(null);
    const [pic3, setPic3] = useState(null);

    const [success, setSuccess] = useState(null);
    const CreateSchema = Yup.object().shape({
        Name: Yup.string().required('Name is a required field'),
        NFTLink: Yup.string().url('NFTLink format wrong').required('NFTLink is a required field'),
        SocialLink: Yup.string().url('SocialLink format wrong').required('SocialLink is a required field'),
        Description: Yup.string().required('Description is a required field')
    });

    const formik = useFormik({
        initialValues: {
            Name: '',
            NFTLink: '',
            SocialLink: '',
            Description: ''
        },
        validationSchema: CreateSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values, { setErrors }) => {
            if(!mainImg) {
                setErrors({err: 'You need to upload photo'});
                return;
            }

            const data = props.edit ?
                {...values, MainPhoto: mainImg, Photo1: pic1, Photo2: pic2, Photo3: pic3}
            :  {...values, MainPhoto: mainImg, Photo1: pic1, Photo2: pic2, Photo3: pic3, IsPublic: 'false'};

            delete data.Id;
            delete data.UserId;

            const endpoint = props.edit ? CharacterApi.update(id, data) : CharacterApi.create(data);
            endpoint.then(res => {
                setSuccess('Saved');
                setTimeout(()=> {
                    navigate('/profile');
                },1000)
            }).catch(e => {
                const error = e.response ? e.response.data : e.message;
                setErrors({err: error});
            })
        }
    });

    const upload = new Upload({apiKey: "public_kW15arz5o6VQwfroqdzR5FnoKxiC"})

    const onUpload = async (event, setState) => {
         if(event.target.files[0].type.startsWith('image/')) {
            const uploadFile = upload.createFileInputHandler({
                onUploaded: (result) => {
                    console.log(event);
                    setState(result.fileUrl);
                    console.log(result);
                }
            });

            uploadFile(event);
         }
    }

    useEffect(() => {
        if(props.edit) {
            CharacterApi.get(id).then(res => {
                formik.setValues(res.data);
                setMainImg(res.data.MainPhoto);
                setPic1(res.data.Photo1);
                setPic2(res.data.Photo2);
                setPic3(res.data.Photo3);
            });
        }
    }, []);

    return (
        <>
            <Header text='Edit'/>
            <div className={styles.edit}>
                <div className={styles.buttons}>
                   <a href='/profile'>Back</a>
                </div>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <input ref={fileMainRef} type='file' accept='image/*' style={{display: 'none'}} onChange={(e) => onUpload(e, setMainImg)} />
                        <div className={mainImg ? styles.mainImg : styles.emptyMainItem} onClick={() => fileMainRef.current.click()}>
                            { mainImg ?
                                <>
                                    <img src={mainImg} />
                                    {/*<TiDelete size={25}/>*/}
                                </> : 'Empty' }
                        </div>
                        <div className={styles.bottom}>
                            <input ref={fileRef1} type='file' style={{display: 'none'}} onChange={(e) => onUpload(e, setPic1)} />
                            <div className={pic1 ? styles.item : styles.emptyItem} onClick={() => fileRef1.current.click()}>
                                { pic1 ?
                                    <>
                                        <img src={pic1} />
                                        <TiDelete size={20}/>
                                    </> : 'Empty' }
                            </div>
                            <input ref={fileRef2} type='file' style={{display: 'none'}} onChange={(e) => onUpload(e, setPic2)} />
                            <div className={pic2 ? styles.item : styles.emptyItem} onClick={() => fileRef2.current.click()}>
                                { pic2 ?
                                    <>
                                        <img src={pic2} />
                                        <TiDelete size={20}/>
                                    </> : 'Empty' }
                            </div>
                            <input ref={fileRef3} type='file' style={{display: 'none'}} onChange={(e) => onUpload(e, setPic3)} />
                            <div className={pic3 ? styles.item : styles.emptyItem} onClick={() => fileRef3.current.click()}>
                                { pic3 ?
                                    <>
                                        <img src={pic3} />
                                        <TiDelete size={20}/>
                                    </> : 'Empty' }
                            </div>
                        </div>
                        <Button text='Save' onClick={() => {
                            if(submitRef.current) submitRef.current.click();
                        }}/>
                    </div>
                    <form onSubmit={formik.handleSubmit}  className={styles.right} >
                        <h2>Character name</h2>
                        <input type='text' {...formik.getFieldProps("Name")} />
                        <h2>NFT link</h2>
                        <input type='text' {...formik.getFieldProps("NFTLink")} />
                        <h2>Social</h2>
                        <input type='text' {...formik.getFieldProps("SocialLink")} />
                        <h2>Character description</h2>
                        <textarea {...formik.getFieldProps("Description")} />
                        <input ref={submitRef} type='submit' style={{display: 'none'}}/>
                        { formik.errors ?
                            <Error>{formik.errors[Object.keys(formik.errors)[0]]}</Error>
                            : null }
                        { success ?
                            <p className={styles.success}>{success}</p>
                            : null }
                    </form>
                </div>
            </div>
        </>
    );
}

export default Edit;