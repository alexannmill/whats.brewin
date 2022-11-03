import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./BreweryProfile.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
} from "@fortawesome/free-solid-svg-icons";


const Post = () => {
  
  const [post, setPost] = useState({});

  const id = Math.floor(Math.random() * (5 - 1) + 1)
  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then((res) => {
        const post = res.data
        setPost(post)
        console.log('post:', post)
      })
  },[])

  return (
    <div className="post">
      <div className="post-img" >
        <img src={post.photo_url} alt="post"></img>
      </div>
      <div className="post-content">
        <h4 className="post-caption">{post.caption}</h4>
        <h6 className="post-likes">
          <FontAwesomeIcon icon={faHeart} className="heart"/>
           {post.likes}</h6>
        <h6 className="post-date">{post.date}</h6>
      </div>
    </div>
  );
};

export default Post;
