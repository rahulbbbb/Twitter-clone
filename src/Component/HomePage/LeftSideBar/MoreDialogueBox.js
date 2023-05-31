import React from "react";
import { HiOutlineAtSymbol } from 'react-icons/hi';
import { LuFeather, LuVerified, LuRocket } from "react-icons/lu";
import { BsPersonUp, BsArrowUpRightSquare } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiBarChart } from 'react-icons/bi';

function MoreDialogueBox() {
  return (
    <div>
        <div><span><HiOutlineAtSymbol/></span><span>Connect</span></div>
        <div><span><LuFeather/></span><span>Drafts</span></div>
        <div><span><LuVerified/></span><span>Verified Orgs</span></div>
        <div><span><BsPersonUp/></span><span>Follower requests</span></div>
        <div>
            <div><span>Creator Studio</span><span><IoIosArrowDown/></span><span><IoIosArrowUp/></span></div>
            <div><span><BiBarChart/></span><span>Analytics</span></div>
            <div><span>Professional Tools</span><span><IoIosArrowDown/></span><span><IoIosArrowUp/></span></div>
            <div>
            <div><span><LuRocket/></span><span>Twitter for Professionals</span></div>
            <div><span><BsArrowUpRightSquare/></span><span>Twitter Ads</span></div>
            <div><span>money</span><span>Monetization</span></div>
            </div>
            <div><span>Settings and Support</span><span>arrow</span></div>
            <div>
            <div><span>logo</span><span>Settings and privacy</span></div>
            <div><span>qus</span><span>Help Center</span></div>
            <div><span>dis</span><span>Display</span></div>
            <div><span>logo</span><span>Keyboard shortcuts</span></div>
            </div>
        </div>
    </div>
  );
}

export default MoreDialogueBox;
