import React, { useState } from "react";
import { HiOutlineAtSymbol } from 'react-icons/hi';
import { LuFeather, LuVerified, LuRocket } from "react-icons/lu";
import { BsPersonUp, BsArrowUpRightSquare } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoHelpCircleOutline } from 'react-icons/io5'
import { BiBarChart, BiMoney } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { TbAccessible } from 'react-icons/tb';
import styles from './MoreDialogueBox.module.css';

function MoreDialogueBox() {

  const [isCreatorList, setIsCreatorList] = useState(false);
  const [isProToolList, setIsProToolList] = useState(false);
  const [isSettingsList, setIsSettingsList] = useState(false);

  const handleCreatorList = ()=> {
    setIsCreatorList(!isCreatorList);
  }

  const handleProToolList = ()=> {
    setIsProToolList(!isProToolList);
  }

  const handleSettingsList = ()=> {
    setIsSettingsList(!isSettingsList);
  }

  return (
    <div className={styles.main}>
        <div className={styles.itemContainer}><span><HiOutlineAtSymbol/></span><span>Connect</span></div>
        <div className={styles.itemContainer}><span><LuFeather/></span><span>Drafts</span></div>
        <div className={styles.itemContainer}><span><LuVerified/></span><span>Verified Orgs</span></div>
        <div className={styles.itemContainer}><span><BsPersonUp/></span><span>Follower requests</span></div>
            <div onClick={handleCreatorList} className={styles.listContainer}><span>Creator Studio</span>
              {
                !isCreatorList ? 
                <span><IoIosArrowDown/></span> : 
                <span><IoIosArrowUp/></span>
              }
            </div>
              { 
                isCreatorList &&
                <div className={styles.lists}><span><BiBarChart/></span><span>Analytics</span></div>
              }
            <div onClick={handleProToolList} className={styles.listContainer}><span>Professional Tools</span>
            {
              !isProToolList ?
              <span><IoIosArrowDown/></span> :
              <span><IoIosArrowUp/></span>
            }
            </div>
            {
              isProToolList && 
              <div className={styles.container}>
                <div className={styles.lists}><span><LuRocket/></span><span>Twitter for Professionals</span></div>
                <div className={styles.lists}><span><BsArrowUpRightSquare/></span><span>Twitter Ads</span></div>
                <div className={styles.lists}><span><BiMoney/></span><span>Monetization</span></div>
              </div>
            }
            <div onClick={handleSettingsList} className={styles.listContainer}><span>Settings and Support</span>
            {
              !isSettingsList ?
              <span><IoIosArrowDown/></span> :
              <span><IoIosArrowUp/></span>
            }
            </div>
            {
              isSettingsList &&
              <div className={styles.container} >
                <div className={styles.lists}><span><FiSettings/></span><span>Settings and privacy</span></div>
                <div className={styles.lists}><span><IoHelpCircleOutline/></span><span>Help Center</span></div>
                <div className={styles.lists}><span><HiOutlinePencilSquare/></span><span>Display</span></div>
                <div className={styles.lists}><span><TbAccessible/></span><span>Keyboard shortcuts</span></div>
            </div>  
            }      
    </div>
  );
}

export default MoreDialogueBox;
