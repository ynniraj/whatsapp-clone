import React from 'react'
import { Avatar } from '@mui/material';
import "./SidebarChat.css";
import { useEffect } from 'react';
import { useState } from 'react';
import db from './firebase';
import { Link } from "react-router-dom"
function SidebarChat({ id, name, addNewChat }) {

    const [seed, setseed] = useState('');
const [messages,setMessages] = useState("");
    useEffect(() => {
        if (id) {
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())))
        }
    },[id])

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter room name");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarchat">
                <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
                <div className="sidebar_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>


    ) : (
        <div onClick={createChat}
            className="sidebarchat">
            <h2>Add New Chat</h2>
        </div>
    )


}

export default SidebarChat
