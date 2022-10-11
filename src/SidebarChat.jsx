import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"

export default function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar/>
      <div className='sidebarChat_info'>
        <h2>Room name</h2>
        <p>This is the recent message</p>
      </div>

    </div>
  )
}
