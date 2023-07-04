import React,{useState} from 'react'
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, storage, db} from "../firebase";
import ImageIcon from '@mui/icons-material/Image';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import {useNavigate, Link} from "react-router-dom";
import {async} from "@firebase/util";

function Register() {

  const [err,setErr]= useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res =  await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      
        await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            const errorCode = err.code;
            const errorMessage = err.message;
           
            
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      
      setErr(true);
      setLoading(false);
    }
  };




// uploadTask.on(
//   (error) => {
//     setErr(true);
//   }, 
//   () => {

//     getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
//       await updateProfile(res.user,{
//         displayName,
//         photoURL: downloadURL,
//       });
//       await setDoc(doc(db, "users", res.user.uid),{
//         uid: res.user.uid,
//         displayName,
//         email,
//         photoURL: downloadURL,
//       });
//       await setDoc(doc(db,"userChats",res.user.uid),{})

//     });
//   }
// );
//   }catch(err){
//       setErr(true);
//     }


    // try {

    //   const res = await createUserWithEmailAndPassword(auth, email, password)
      
    //   const storageRef = ref(storage, displayName);

    //   const uploadTask = uploadBytesResumable(storageRef, file);

    //   uploadTask.on(

    //     (error) => {
    //       setErr(true);
    //     }, 
        
    //     () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
    //             await updateProfile(res.user,{
    //             displayName,
    //             photoURL: downloadURL
                
    //           })
    //           await setDoc(doc(db, "users", "res.user.uid"),{
    //             uid: res.user.uid,
    //             displayName,
    //             email,
    //             photoURL: downloadURL
    //           });
    //       });
    //     }
    //   );
    // } catch (err) {
    //   setErr(true);
    // }
  

  return (
    <div className= 'formContainer'>
      <div className = 'formWrapper'>
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit ={handleSubmit}>
          <input required type="text" placeholder ='display name'/>
          <input required type="email" placeholder = 'email'/>
          <input required type="password" minLength="6" maxLength="12" placeholder = 'password'/>
          <input required style ={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <ImageIcon className='imageicon'/>
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>오류발생</span>}
        </form>
        <p>계정이 이미 있으면 <Link to ="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register