import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Safak</b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quidem.
          Sit dicta fuga iste, libero consequatur nihil obcaecati earum
          laudantium tenetur nobis enim asperiores similique eos nostrum autem
          dolores voluptates. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sunt aperiam vel nesciunt omnis fugit culpa
          excepturi quisquam in earum, impedit rem, obcaecati libero,
          dignissimos facere aliquam quaerat dicta voluptatem tempora! Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Saepe cum ex ut
          distinctio ullam optio quasi! Molestias hic ab cupiditate voluptatibus
          consequatur dolor voluptates, ea reprehenderit recusandae assumenda
          sit? Ipsam.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
