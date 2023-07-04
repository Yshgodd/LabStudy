import React,{ useState,useContext } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { AuthContext } from './../context/AuthContext';
import { ChatContext } from './../context/ChatContext';
import { arrayUnion, updateDoc, doc, serverTimestamp,Timestamp } from 'firebase/firestore';
import { db,storage } from '../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";


export const Input = () => {
  const [err,setErr]= useState(false);
  const [text,setText] = useState("");
  const [img,setImg] = useState(null);

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  
  
  const handleSend = async () => {
    if( img ){
      const storageRef = ref(storage, uuid());

        // await uploadBytesResumable(storageRef, file).then(() => {
        // getDownloadURL(storageRef).then(async (downloadURL) => {
          // const  uploadTask = uploadBytesResumable(storageRef, img);
          // getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) =>{

            await uploadBytesResumable(storageRef, img).then(() => {
            getDownloadURL(storageRef).then(async(downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        });
        
      

    }else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages: arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          date:Timestamp.now(),
        })
      })
    }

    await updateDoc(doc(db,"userChats",currentUser.uid),{
      [data.chatId+".lastMessage"]:{
        text
      },
      [data.chatId+".date"]:serverTimestamp(),
    });

    await updateDoc(doc(db,"userChats",data.user.uid),{
      [data.chatId+".lastMessage"]:{
        text
      },
      [data.chatId+".date"]:serverTimestamp(),
    });
 
    setText("")
    setImg(null)
  }



  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' onChange = {(e) => setText(e.target.value)} value={text} />
      <div className="send">
        <AttachFileIcon className="icon"/>

        <input required style ={{display:"none"}} type="file" id="file" onChange = {(e) => setImg(e.target.files[0])} />
        <label htmlFor="file">
          <ImageIcon className='icon'/>
        </label>
        <button onClick = {handleSend}>Send</button>
        
      </div>
    </div>
  )
}

