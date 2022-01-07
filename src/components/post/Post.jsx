import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        eligendi a earum numquam harum, facilis voluptas in eaque, mollitia,
        recusandae labore nesciunt id placeat neque. Doloribus praesentium in
        rerum maxime? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Porro pariatur ducimus dolor laboriosam iusto optio, iure necessitatibus
        neque voluptatum officia sequi similique ad reprehenderit qui
        praesentium possimus impedit tempora! Deleniti.
      </p>
    </div>
  );
};

export default Post;
