import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bot from '../logos/chatbot.gif'
import ChatBox from './ChatBox';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    const closeChatBox = () => {
        setIsOpen(false);
    };



    return (
        <div >
            {isOpen ? (
                <div className='ChatBox d-flex' >
                    <div className='close-chat' onClick={() => { closeChatBox() }} style={{cursor:'pointer'}}>
                        <p>Close me</p>
                        <img src={bot} style={{ width: 300 }} className='chatbot-img' />
                    </div>
                    <ChatBox />
                </div>
            ) : (
                <div className={`chatbot-container ${isOpen ? 'open' : ''}`} onClick={() => { toggleChatBox()}}>
                    <p>Talk to me</p>
                    <img src={bot} style={{ width: 300 }} className='chatbot-img' />
                </div>
            )}
        </div>
    );
};