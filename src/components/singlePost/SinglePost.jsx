import "./singlePost.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        console.log(res);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img className="singlePostImg" src={post?.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post?.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post?.username}`} className="link">
              <b className="singlePostAuthor">{post?.username}</b>
            </Link>
          </span>
          <span>{new Date(post?.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
