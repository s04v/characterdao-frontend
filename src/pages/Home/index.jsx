import styles from './Home.module.scss';
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.home}>
            <img src='img/1.png' alt='Header' />
            <div className={styles.preSale}>
                <div className={styles.imgBox}>
                    <img src='img/char.jpg'/>
                    <img src='img/char.jpg'/>
                    <img src='img/char.jpg'/>
                    <img src='img/char.jpg'/>
                </div>
                <div className={styles.preSaleInfo}>
                    <h2>CHARACTER DAO PRE-SALE</h2>
                    <p>? / 4000 CHARACTER DAO LEFT TO MINT AT 0.02 ETH EACH</p>
                    <div className={styles.preSaleBottomInfo}>
                        <div>
                            <input type='number' min='1' max='5'/>
                            <button>MINT</button>
                        </div>
                        <span>GET YOUR CHARACTER DAO DURING THE PRE-SALE STAGE AND SECURE YOUR SPOT FOR FURTHER MINTING WITH YOUR PREFERRED GAS FEE.</span>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <h1>WE ARE A COMMUNITY THAT CREATES, DEVELOPS AND OWNS CHARACTERS TOGETHER</h1>
                <p>ON XDATE, 10,000 NONFUNGIBLE TOKENS (NFTS) WILL BE MINTED, EACH ONE GRANTING THE OWNER THE RIGHT TO CREATE A CHARACTER AND ITS BACKSTORY, WHICH WILL BE VISIBLE TO ALL IN THE CHARACTERDAO DIRECTORY. EACH TOKEN IS UNIQUELY ASSOCIATED WITH A CHARACTER PROFILE IN THE CHARACTERDAO DIRECTORY. THE TOKEN HOLDER CONTROLS THE PROFILE, WHICH INCLUDES THE ARTWORK AND ORIGINAL MYTHOLOGY OF THE CHARACTER. INITIALLY, EACH NFT WILL CORRESPOND TO A UNIQUE CHARACTER SKETCH. THE SKETCH STYLE REPRESENTS CHARACTERDAO’S ETHOS OF CREATION AND EXPERIMENTATION. KEEP THE SKETCH OR REPLACE IT WITH A COMPLETELY DIFFERENT CHARACTER; IT’S UP TO YOU.</p>
                <a href="/directory"><Button text='CHARACTER DIRECTORY'/></a>
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
                <FAQ question='What is the purpose of CharacterDAO?' answer='The purpose of the DAO is to bring a community together to create, develop and own fictional characters. From artists to storytellers to fans to investors, anyone is welcome in the community. Active participation, while encouraged, is not necessary to be a part of CharacterDAO.' />
                <FAQ question='What kind of characters can token holders create?' answer='Community members are free to create any kind of characters they want. From superheroes and super villains to science fiction and fantasy creatures—a character profile is a blank canvas to play with.' />
                <FAQ question='Does a token holder have to create a character?' answer='Not necessarily. The token represents the right, but not the obligation, to create a character. Moreover, the token holder can have someone create a character on their behalf.' />
                <FAQ question='Can I include a pre-existing character to the directory?' answer='Yes, as long as the token holder owns the rights to the character.' />
                <FAQ question='How does the DAO fund itself?' answer='The DAO treasury, initially funded by token sales and resales, will later be supplemented by the value created with its intellectual property.' />
            </div>
            <Footer />
        </div>
    );
}

export default Home;