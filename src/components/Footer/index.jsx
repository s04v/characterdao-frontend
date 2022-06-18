import styles from './Footer.module.scss';
import {BsTwitter} from "react-icons/bs";
import {GiSailboat} from "react-icons/gi";
import {SiDiscord} from "react-icons/si";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src='img/footer.png' />
            <div className={styles.linkBox}>
                <div className={styles.links}>
                    <a href='#'>ABOUT</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>CHARACTER DIRECTORY</a>
                    <a href='#'>ROADMAP</a>
                </div>
                <div className={styles.icons}>
                    <a href='https://twitter.com/characterdao'><BsTwitter size={30} /></a>
                    <a href='https://discord.gg/xTvWkbezsq'><SiDiscord size={30} /></a>
                    <a href='#'><GiSailboat size={30} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
