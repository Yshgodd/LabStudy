import React,{useState} from 'react'
import "./Timeline.css"
import Suggestions from "./Suggestions"
import Post from "./posts/Posts"


function Timeline() {
  const [posts,setPost] = useState([
    {
      user:"minzi_",
      postImage:"data:image/jpeg;base64,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",
      likes:1299,
      timestamp:"2d",
    },
    {
      user:"An_uzin_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwowVdak6AwGQ6CHrOPI-IDXZMB8LlSuooA&usqp=CAU",
      likes:11333,
      timestamp:"1d",
    },
    {
      user:"wonYeong_",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwrYdqUztKurLeTk5l8hvk56aNvIdDIjlkg&usqp=CAU",
      likes:9990,
      timestamp:"4d",
    },
    {
      user:"Karina",
      postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQopHHI6P9Clica6UomvtkXjE2xd2yfeIfJw&usqp=CAU",
      likes:1234,
      timestamp:"13hours ago",
    },

  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post)=>(
            <Post user={post.user} postImage={post.postImage} like={post.likes} timestamp={post.timestamp}/>
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions/>
      </div>
    </div>
      )
}

export default Timeline