import React,{useContext} from 'react'
import {Messages} from './Messages'
import {Input} from './Input'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {ChatContext} from "../context/ChatContext"



export const Chat = () => {

  const {data} = useContext(ChatContext);


  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div >
          <CameraAltIcon className="chatIcons" />
          <AddIcon className="chatIcons" />
          <MoreHorizIcon className="chatIcons" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}
