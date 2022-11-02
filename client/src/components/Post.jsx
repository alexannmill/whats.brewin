import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./BreweryProfile.css"

const Post = () => {
  
  const [post, setPost] = useState({});

  const id = Math.floor(Math.random() * 100)
  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then((res) => {
        const post = res.data
        setPost(post)
      })
  },[])

  return (
    <div className="post">
      <div className="post-img">
        <img src={post.photo_url} alt="post"></img>
      </div>
      <div className="post-content">
        <h2 className="post-h2">{post.caption}</h2>
        <h6 className="post-date">{post.date}</h6>
        <h6 className="post-likes">{post.likes}</h6>
      </div>
    </div>
  );
};

export default Post;
