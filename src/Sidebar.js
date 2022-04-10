import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { Button } from "@mui/material"

function Sidebar() {
    const userData = JSON.parse(localStorage.getItem("auth"));

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])


    const handleLogout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        window.location.reload();
    }


    return (
        <div>
            <div className="sidebar">
                <div className="sidebar_header">
                    <Avatar src={userData?.photoURL} />
                    <div className="sidebar_headerright">
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>

                        <IconButton>
                            <ChatIcon />
                        </IconButton>

                        <IconButton>
                            <Button type="submit" className="btn" onClick={handleLogout}>
                                LOGOUT
                            </Button>
                        </IconButton>
                    </div>
                </div>
                <div className="sidebar_search">
                    <div className="sidebar_searchcontainer">
                        <SearchIcon />
                        <input type="text" placeholder="Search or start new chat" />
                    </div>
                </div>
                <div className="sidebar_chat">
                    <SidebarChat addNewChat />
                    {rooms.map(room => (
                        <SidebarChat key={room.id} id={room.id}
                            name={room.data.name}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Sidebar
