import React, { useState } from 'react';
import styles from './LeftSideBar.module.css';
import { RiHome7Fill } from 'react-icons/ri';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import { GrNotification } from 'react-icons/gr';
import { LuMail } from 'react-icons/lu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { CiCircleMore } from 'react-icons/ci';
import { FaFeatherAlt, FaUserCircle, FaTwitter } from 'react-icons/fa';
import { GoPlusSmall } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import MoreDialogueBox from './MoreDialogueBox';
import AccountDialogueBox from './AccountDialogueBox';


function LeftSideBar() {

    const [more, setMore] = useState(false);
    const [accounts, setAccounts] = useState(false);

    const Navigate = useNavigate();

    const handleHome = ()=> {
        Navigate('/');
    }

    const handleExplore = ()=> {
        Navigate('/explore');
    }

    const handleNotification = ()=> {
        Navigate('/notification');
    }

    const handleMessages = ()=> {
        Navigate('/messages');
    }

    const handleProfile = ()=> {
        Navigate('/profile');
    }

    const handleTweet = ()=> {
        Navigate('/compose/tweet');
    }

    const handleMore = ()=> {
        setMore(!more);
    }

    const handleAccounts = ()=> {
        setAccounts(!accounts);
    }

  return (
    <div  className={styles.main}>
        <header className={styles.header}>
            <div onClick={handleHome} className={styles.iconsTwitter}><FaTwitter/></div>
            <div className={styles.container}>
            <div title='Home' onClick={handleHome} className={styles.icons}><RiHome7Fill/></div>
            <div title='Explore' onClick={handleExplore} className={styles.icons}><Grid3x3Icon/></div>
            <div title='Notification' onClick={handleNotification} className={styles.icons}><GrNotification/></div>
            <div title='Messages' onClick={handleMessages} className={styles.icons}><LuMail/></div>
            <div title='Profile' onClick={handleProfile} className={styles.icons}><PersonOutlineIcon/></div>
            {
                more && <div> < MoreDialogueBox /> </div>
            }
            <div title='More' onClick={handleMore} className={styles.icons}><CiCircleMore/></div>
            <div title='Tweet' onClick={handleTweet} className={styles.iconsTweet}><GoPlusSmall/><FaFeatherAlt/></div>
            </div>
            {
                accounts && <div> <AccountDialogueBox/> </div>
            }
            <div title='Accounts' onClick={handleAccounts} className={styles.iconsAccounts}><FaUserCircle/></div>

        </header>
    </div>
  )
}

export default LeftSideBar;