import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import "./Chat.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { AttachFile, InsertEmoticon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom'
import db from './firebase';
import firebase from 'firebase'


function Chat() {

    const [input, setInput] = useState('');
    const [seed, setseed] = useState('');
    const { roomId } = useParams();
    const [roomName, setroomName] = useState("")
    const [message, setMessage] = useState([])
    const userData = JSON.parse(localStorage.getItem("auth"));

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId)
                .onSnapshot((snapshot) =>
                    setroomName(snapshot.data().name))


            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc").onSnapshot((snapshot) =>
                    setMessage(snapshot.docs.map((doc) => doc.data()))
                )
        }
    }, [roomId])



    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: userData.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
                <div className="chat_header_info">
                    <h3>{roomName}</h3>
                    <p>last seen{" "}
                        {new Date(
                            message[message.length - 1]?.timestamp?.toDate()).toUTCString()
                        }</p>
                </div>
                <div className="chat_header_right">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {message.map(message => (

                    <p className={`chat_message ${message.name === userData.displayName && 'chat_recevier'}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_time">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span></p>
                ))}
            </div>

            <div className="chatfooter">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
